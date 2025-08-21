import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import ContactInfo from "@/components/contact-info";
import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className="mb-6 md:mb-8 text-2xl leading-tight text-center md:text-left md:text-5xl px-4 md:px-0">
          Pongámonos en <span className="font-bold text-secondary">contacto</span>
        </h1>

        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 px-4 md:px-0 pb-28 md:pb-10">
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2">
            <ContactInfo />
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default ContactPage;
