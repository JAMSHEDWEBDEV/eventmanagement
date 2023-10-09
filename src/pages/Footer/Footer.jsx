
const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mt-10 bg-gray-300 p-5">
                <div>
                    <h1 className="text-3xl font-bold mb-4">About</h1>
                    <p>HealthCare A trusted name for caring for someone. Seniors live their life in their own way here what they want.</p>
                    <p>No one can bother them here, thats why they can feel free and independent.</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">Services</h1>
                    <ul>
                        <li>living Assisted</li>
                        <li>Physical Theraphy</li>
                        <li>Nursing Care</li>
                        <li>Spiritual spain</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">Contact</h1>
                    <p>Flat 20, Reynolds Neck, North
                        Helenaville, FV77 8WS</p>
                    <p>+2(305) 587-3407</p>
                    <p>info@healthcare.com</p>
                </div>
            </div>
            <div className="flex justify-between bg-gray-600 mb-6 text-white p-6">
                <div>
                    <p>HealthCare 2023 All Right Reserved</p>
                </div>
                <div>
                    <p>Terms of Service |
                        Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;