import React from "react";
import Inner from "@/transitions/Inner";

const ContactPage = () => {
    return (
        <Inner>
            <div className="max-w-3xl mx-auto mt-9 p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Contact</h1>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <p className="text-gray-700">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many desktop publishing
                        packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web
                        sites still in their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </p>
                    <p className="text-gray-700">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many desktop publishing
                        packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web
                        sites still in their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose (injected humour
                        and the like).
                    </p>
                </div>
            </div>
        </Inner>
    );
};

export default ContactPage;
