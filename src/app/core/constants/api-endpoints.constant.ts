export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: 'users/authenticate',
        SIGNUP: 'users/sign_up',
        FORGOT_PASSWORD: 'users/password_resets',
        CONFIRM_USER: 'users/confirmation',
        RESET_PASSWORD: 'users/password_resets',
        INSTAGRAM_PHOTOS: 'instagram_photos'
    },
    SIGNUP_STEPPER: {
        SET_UP_ROLE: 'users',
        SERVICE: 'services',
        CATEGORY: 'categories',
        ADDRESSES: 'addresses',
        CITY: 'cities',
        AVAILABILITIES: 'availabilities',
        AVAILABILITIES_BULK_UPDATE: 'availabilities/bulk_update',
        USER_CATEGORIES: 'user_categories',
        PAYMENT_SETUP: 'bank_accounts',
        VERIFY_IDENTITY: 'users'
    },
    COLLEAGES_UNIVERSITY: {
        COLLEAGES: 'colleges'
    },
    CONTACT_US: {
        CONTACTS: 'contacts'
    },
    SERVICE_PROVIDER: {
        EVENTS: 'events',
        EVENTS_GET_CITIES: 'cities',
        SPACE_BOOKING: 'space_bookings',
        APPROVED_SERVICE_BOOKING: 'service_bookings/approved_bookings',
        SERVICE_PAYMENT: 'service_bookings/service_payment',
        SERVICE_BOOKINGS_COUNT: 'service_bookings_count'
    },
    SPACE_PROVIDER: {
        SPACES: 'spaces',
        ADDRESSES: 'addresses',
        SPACE_BOOKING: 'space_bookings',
        SPACE_BOOKINGS_COUNT: 'space_bookings_count'
    },
    PROFILE: {
        GENERAL_INFORMATION_FORM: 'users',
        CARDS: 'cards',
        CHANGE_RESTE_PASSWORD: 'update_password',
        DELETE_IMAGE: 'delete_image',
        // REFUND_LIST_SPACE_OWNER: 'space_bookings/cancelled_bookings',
        // SPACE_BOOKING_REFUND: 'space_bookings/refund_booking',
        REFUND_LIST_SERVICE_PROVIDER: 'space_bookings/cancelled_bookings',
        // REFUND_LIST_CUSTOMER: 'service_bookings/cancelled_bookings',
        // SERVICE_BOOKING_REFUND: 'service_bookings/refund_booking',
        SPACE_BOOKING_REFUND: 'space_bookings/refund_booking',
        NOTIFICATION: 'notifications'
    },
    ADMIN: {
        PROFESSIONS: 'admin/users',
        SPACES: 'admin/spaces',
        NOTIFICATIONS: 'notifications',
        CITIES: 'cities',
        USER: 'users',
        GET_SERVICES: 'get_services',
        UPCOMING_EVENTS: 'admin/upcoming_events',
        PROFESSIONAL_EVENTS: 'admin/service_professional_events',
        ADMIN_PROGRESS_COUNT: 'admin/counts',
        RECENT_BOOKING: 'admin/recent_booking'
    },
    PAYMENT_MODE: {
        PAYMENT: 'charges',
        SET_STRIPE_ID: 'users/set_stripe_id',
        DEPOSIT_PAYMENT: 'service_bookings/deposit_payment',
        CONFIRM_DEPOSIT: 'service_bookings/confirm_deposit',
        // PAYMENT_INDENT: 'service_bookings/service_payment',
        // TRANSFER_ON_SUCCESS: 'service_bookings/transfer_on_success',
        SPACE_BOOKING_DETAILS: 'space_bookings',
        SERVICE_BOOKING_DETAILS: 'service_bookings/order_summary',
        SPACE_PAYMENT_INDENT: 'space_bookings/space_payment',
        SPACE_TRANSFER_DETAILS: 'space_bookings/transfer_on_success'
    },
    MY_CHAT: {
        MESSAGES: 'messages',
        GET_MESSAGE_LISTING: 'messages/get_message_listing',
        SEARCH_CHAT_USER: 'messages/get_all_users',
        MARK_AS_READ: 'mark_as_read',
        UNREAD_COUNT: 'messages/unread_count'
    },
    EVENTS: {
        SEARCH_EVENTS: 'events/search_events',
        SERVICES_LIST: 'services/services_list',
        SERVICES_BOOKING: 'service_bookings',
        SUBSCRIBE_NEWSLETTER: 'subscribers'
    }
};
