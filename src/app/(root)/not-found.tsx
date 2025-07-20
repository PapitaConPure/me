import BackSection from "@/components/BackSection";

const NotFound = () => (
    <main>
        <section>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center space-y-8'>
                    <div className='text-9xl'>🥔</div>
                    <p>
                        La dirección especificada no existe.
                    </p>
                </div>
            </div>
        </section>
        <BackSection href='/'>
            Volver a <span className='font-semibold'>Inicio</span>
        </BackSection>
    </main>
);

export default NotFound;
