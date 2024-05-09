export interface IBaitStationTermiteAgreementPrefill {
    date: string,
    estimated_by: string
    customer_name: string
    customer_phone: string
    customer_service_address: string
    customer_service_address_2: string
    customer_email: string
    customer_phone_alt: string
    customer_subdivision: string
    customer_referal: string
    tp_number_of_bait_station: string
    tp_lineat_ft: string
    tp_structure_include: string
    tp_special_note: string
    tp_special_note_2: string
    initial_treatment_cost: string
    annual_renewal_cost: string
    total_cost: string
}

export interface ITermiteEstimateForm {
    completed: string,
    email: string,
    role: string,
    first: string,
    last: string,
    title: string,
    company: string,
    'Address 1': string,
    'Address 2': string,
    'Company Name': string,
    'Contact notes': string,
    Date: string,
    'Date Sent': string,
    Email: string,
    'Estimate Taker': string,
    'Estimated Price': string,
    Estimator: string,
    'Linear Feet': string,
    Name: string,
    'Phone home': string,
    Referral: string,
    'Send Estimate': string,
    Subdivision: string,
    agreementId: string,
    cell: string,
    'email verified': string,
    'subterranean termite': string,
    type: string,
    'web form signed/approved': string
}