import React from "react";

export const About = () => {
    return (
        <div id="about" className="w-full bg-[#c9dcf7]">
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold mb-6 md:text-start text-center">Acerca de RegadIOT</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                        <img
                            src="https://www.innovatefpga.com/attachment/member/2021/AP055-946BE07319D93020/Main.png"
                            alt="IoT Sensors"
                            className="w-[80%] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-6">
                        <div className="w-[80%] mx-auto text-center">
                            <p className="text-base mb-4 text-justify">
                                Nuestro proyecto está orientado a mejorar la gestión del riego. 
                                A través del uso de sensores IoT y tecnología inteligente, 
                                hemos creado un sistema automatizado que optimiza el consumo de agua
                                mientras maximiza la productividad de los cultivos.
                            </p>
                            <p className="text-base mb-4 text-justify">
                                Con nuestras aplicaciones web y móviles, los usuarios tienen la 
                                capacidad de supervisar y gestionar sus sistemas de riego de forma 
                                remota desde cualquier ubicación, garantizando que los cultivos reciban 
                                la cantidad exacta de agua necesaria, lo que permite ahorrar tiempo y recursos.
                            </p>
                            <p className="text-base text-justify">
                                
                                Nuestra misión es brindar a los agricultores soluciones de riego eficientes y 
                                sostenibles, lo que a su vez contribuirá a una industria agrícola más resistente y
                                productiva.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center mt-12">
                    <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                        <img
                            src="https://i.pinimg.com/originals/5f/08/50/5f08505655b858d52ea4ef07a6fa58d5.gif"
                            alt="Web and Mobile Apps"
                            className="w-[50%] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:mr-6">
                        <div className="w-[80%] mx-auto text-center">
                            <p className="text-base mb-4 text-justify">
                                Nuestras aplicaciones web y móviles ofrecen interfaces fáciles de 
                                usar que permiten a los usuarios supervisar datos de sensores, 
                                programar horarios de riego y recibir alertas y notificaciones en tiempo real.
                            </p>
                            <p className="text-base mb-4 text-justify">
                                Ya sea que estés a cargo de un pequeño jardín o de una gran operación agrícola,
                                nuestra plataforma personalizable se ajusta a tus necesidades, brindándote un control
                                y una información sin precedentes sobre tu sistema de riego.
                            </p>
                            <p className="text-base text-justify">
                                Acompáñanos en la transición hacia el futuro de la agricultura, donde 
                                la tecnología se combina con la sostenibilidad para fomentar prácticas 
                                agrícolas más inteligentes y eficientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};