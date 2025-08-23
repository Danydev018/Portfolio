"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        description?: string
    }
}

const PortfolioBox = (props:PortfolioBoxProps) => {
    const {data} = props;
    const {id, title, image, urlGithub, description} = data;
    const [showDescription, setShowDescription] = useState(false);
    
    const renderDescription = (text: string): ReactNode[] => {
        const lines = text.split('\n');
        const blocks: ReactNode[] = [];
        let listBuffer: string[] = [];
        let paraBuffer: string[] = [];

        const flushPara = () => {
            if (paraBuffer.length) {
                const content = paraBuffer.join(' ').trim();
                if (content)
                    blocks.push(<p key={`p-${blocks.length}`} className="mb-2 leading-relaxed">{content}</p>);
                paraBuffer = [];
            }
        };
        const flushList = () => {
            if (listBuffer.length) {
                blocks.push(
                    <ul key={`ul-${blocks.length}`} className="list-disc pl-5 space-y-1 mb-2">
                        {listBuffer.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
                listBuffer = [];
            }
        };

        for (const raw of lines) {
            const line = raw.replace(/\t/g, '    ');
            const trimmed = line.trim();
            if (!trimmed) {
                // blank line = paragraph/list separator
                flushList();
                flushPara();
                continue;
            }
            const matchBullet = /^-\s+/.test(trimmed);
            if (matchBullet) {
                // entering list mode
                flushPara();
                listBuffer.push(trimmed.replace(/^-\s+/, ''));
            } else if (/.*:\s*$/.test(trimmed)) {
                // section subtitle (line ending with ':')
                flushList();
                flushPara();
                const heading = trimmed.replace(/:\s*$/, '');
                blocks.push(<h4 key={`h-${blocks.length}`} className="mt-3 font-semibold">{heading}:</h4>);
            } else {
                // normal paragraph line
                flushList();
                paraBuffer.push(trimmed);
            }
        }
        // flush any remaining
        flushList();
        flushPara();
        return blocks;
    }
    return ( 
        <motion.div
            layout
            className="p-4 border border-teal-50 rounded-xl flex flex-col items-center justify-center self-start"
            animate={{ opacity: showDescription ? 1 : 0.98, y: showDescription ? 0 : -2 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <div className='flex flex-col items-center justify-center'>
                <Image src={image} alt='image product' width={200} height={200}
                className='w-full md:w-[200px] rounded-2xl h-auto'/>
                <div className='flex gap-5 mt-5 justify-center'>
                    <Link href={urlGithub} target="_blank"
                    className="p-2 transition duration-150 rounded-lg 
                    bg-slate-500 hover:bg-slate-500/80">
                        Github
                    </Link>
                    <button
                        onClick={() => setShowDescription((v) => !v)}
                        className="p-2 transition duration-150 rounded-lg border border-slate-500 text-slate-100 hover:bg-slate-500/20 inline-flex items-center gap-2"
                        aria-expanded={showDescription}
                        aria-controls={`desc-${id}`}
                    >
                        <span>{showDescription ? 'Ocultar descripción' : 'Descripción'}</span>
                        <motion.div
                            animate={{ rotate: showDescription ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            aria-hidden
                        >
                            <ChevronDown size={18} />
                        </motion.div>
                    </button>
                </div>
                <AnimatePresence initial={false}>
                    {description && showDescription && (
                        <motion.div
                            id={`desc-${id}`}
                            className="mt-3 prose prose-invert prose-base max-w-none text-left w-full rounded-md border border-slate-700/60 bg-slate-800/40 p-4 shadow-sm prose-p:text-slate-200 prose-li:text-slate-200 prose-strong:text-white prose-headings:text-white prose-li:marker:text-secondary"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.12, duration: 0.2, ease: 'easeOut' }}
                            >
                                {renderDescription(description)}
                                <div className="not-prose mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setShowDescription(false)}
                                        className="px-2 py-1 text-xs rounded-md border border-slate-600/70 text-slate-200 hover:bg-slate-700/40 transition"
                                        aria-controls={`desc-${id}`}
                                        aria-expanded={showDescription}
                                    >
                                        Ocultar
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
        </motion.div>
    );
}
 
export default PortfolioBox;