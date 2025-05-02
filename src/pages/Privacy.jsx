import React from 'react';
import './Privacy.css';

function Privacy() {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-intro">
                This Privacy Policy (“Privacy Policy”) describes what information Axelia Solutions Private Limited (“Company”), as the operator of the Platform and Threpsi Solutions Private Limited, as owner of the Platform, may collect from a user (“You”, “Your” or “User”), on or through Our website (https://pharmeasy.in/) (the “Site”) or one or more mobile applications (the “App”), directly or in relation to services otherwise rendered by Us (collectively “Platform”).
            </p>
            <section className="privacy-section">
                <h2>1. General Terms</h2>
                <p>
                    By accessing or using the Platform or the Service, or by otherwise giving Us Your information, You confirm that You have the capacity to enter into a legally binding contract under Indian law, in particular, the Indian Contract Act, 1872, and have read, understood, and agreed to the practices and policies outlined in this Privacy Policy.
                </p>
                <p>
                    You hereby consent to Our collection, use, sharing, and disclosure of Your information as described in this Privacy Policy. We reserve the right to change, modify, add or delete portions of the terms of this Privacy Policy at Our sole discretion, at any time.
                </p>
            </section>
            <section className="privacy-section">
                <h2>2. Information We Collect</h2>
                <p>
                    When You access the Site or the App or use the Service(s), You may provide, or We may collect information that may specifically identify You or any other individual. This includes:
                </p>
                <ul>
                    <li>Personal details such as name, phone number, email address, and geographical address.</li>
                    <li>Health-related information such as medical history, prescriptions, and diagnostic results.</li>
                    <li>Payment information such as card details and billing address.</li>
                    <li>Automatically collected information such as IP address, device details, and location data.</li>
                </ul>
            </section>
            <section className="privacy-section">
                <h2>3. How We Use Your Information</h2>
                <p>
                    We use the information collected to provide and improve our services, including:
                </p>
                <ul>
                    <li>Processing and delivering orders.</li>
                    <li>Facilitating consultations with medical practitioners.</li>
                    <li>Scheduling diagnostic tests and delivering results.</li>
                    <li>Improving user experience and conducting research.</li>
                </ul>
            </section>
            <section className="privacy-section">
                <h2>4. Sharing of Information</h2>
                <p>
                    We share your information with trusted third parties such as retail pharmacies, diagnostic service providers, and payment gateways to fulfill your orders and provide services. We ensure that these third parties adhere to strict data protection standards.
                </p>
            </section>
            <section className="privacy-section">
                <h2>5. Data Security</h2>
                <p>
                    We implement advanced security measures, including encryption and secure storage, to protect your data from unauthorized access. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
            </section>
            <section className="privacy-section">
                <h2>6. Your Rights</h2>
                <p>
                    You have the right to access, update, or delete your personal information. You may also withdraw your consent for data processing by contacting us at care@pharmeasy.in.
                </p>
            </section>
            <section className="privacy-section">
                <h2>7. Retention of Information</h2>
                <p>
                    We retain your information as long as necessary to provide services or comply with legal obligations. After this period, your data may be anonymized or securely deleted.
                </p>
            </section>
            <section className="privacy-section">
                <h2>8. Contact Us</h2>
                <p>
                    If you have any concerns or questions about this Privacy Policy, please contact our grievance officer:
                </p>
                <p>
                    Name: Mr. Himanshu<br />
                    Address: Office No. E1-509, 5th Floor, Kailas Esplanade Premises Co-op Society Ltd, LBS Road, Ghatkopar West, Mumbai - 400086<br />
                    Phone: 08048641743<br />
                    Email: care@pharmeasy.in
                </p>
            </section>
        </div>
    );
}

export default Privacy;