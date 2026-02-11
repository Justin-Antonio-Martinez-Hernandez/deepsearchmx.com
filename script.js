// Configuration for Google Client ID
const googleClientId = '1060237405695-v3sgkhm66lcbeshb7tq21cs46ih8epiv.apps.googleusercontent.com';

// EmailJS configuration
const emailJsConfig = {
    service_id: 'service_n844fiv',
    template_id: 'template_a6qb2tb',
    public_key: 'yTowpQuz0iMmDl3'
};

// Initialize EmailJS
(emailJS) => {
    emailJS.init(emailJsConfig.public_key);
};

// Your existing code here...