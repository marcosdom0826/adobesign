import { ITermiteEstimateForm } from "./type"
import { formTemplates } from "./constant"
import axios from "axios"

export const createTermiteAgreementWorkFlow = async (data: ITermiteEstimateForm, { participantUserEmail }: { participantUserEmail: string }) => {
    const url = `${process.env.BASE_URL}/agreements?x-api-user=${participantUserEmail}&x-on-behalf-of-user=${participantUserEmail}`
    const body = getTermiteAgreementPrefillData(data, { participantUserEmail })
    const response = await axios.post(url, body, {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Accept": "application/json"
        },
    })
}


export const getTermiteAgreementPrefillData = (data: ITermiteEstimateForm, { participantUserEmail }: { participantUserEmail: string }) => {
    const mergeFieldInfo = [
        {
            "fieldName": "date",
            "defaultValue": data.Date
        },
        {
            "fieldName": "estimated_by",
            "defaultValue": data.Estimator
        },
        {
            "fieldName": "customer_name",
            "defaultValue": data.Name
        },
        {
            "fieldName": "customer_phone",
            "defaultValue": data["Phone home"]
        },
        {
            "fieldName": "customer_service_address",
            "defaultValue": data["Address 1"]
        },
        {
            "fieldName": "customer_email",
            "defaultValue": data.Email
        },
        {
            "fieldName": "customer_phone_alt",
            "defaultValue": data.cell
        },
        {
            "fieldName": "customer_service_address_2",
            "defaultValue": data["Address 2"]
        },
        {
            "fieldName": "customer_subdivision",
            "defaultValue": data.Subdivision
        },
        {
            "fieldName": "customer_referal",
            "defaultValue": data.Referral
        },
        {
            "fieldName": "tp_number_of_bait_station",
            "defaultValue": "1" // TODO: need to map
        },
        {
            "fieldName": "tp_lineat_ft",
            "defaultValue": data["Linear Feet"]
        },
        {
            "fieldName": "tp_lineat_ft",
            "defaultValue": data["Linear Feet"]
        },
        {
            "fieldName": "tp_structure_include",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
        {
            "fieldName": "tp_special_note",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
        {
            "fieldName": "tp_special_note_2",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
        {
            "fieldName": "initial_treatment_cost",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
        {
            "fieldName": "annual_renewal_cost",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
        {
            "fieldName": "total_cost",
            "defaultValue": "MAPING REQUIRED" // TODO: need to map
        },
    ]
    return {
        "workflowId": formTemplates.termiateAgreementTemplate.workflowId,
        "state": "IN_PROCESS",
        "name": "Testing - API - Version - 2",
        "signatureType": "ESIGN",
        "fileInfos": [
            {
                "libraryDocumentId": formTemplates.termiateAgreementTemplate.id,
                "label": formTemplates.termiateAgreementTemplate.name
            }
        ],
        "participantSetsInfo": [
            {
                "order": 1,
                "role": "SIGNER",
                "label": "Signer",
                "memberInfos": [
                    {
                        "email": data.Email
                    }
                ]
            },
            {
                "order": 2,
                "role": "APPROVER",
                "label": "Sales",
                "memberInfos": [
                    {
                        "email": participantUserEmail
                    }
                ]
            }
        ],
        "mergeFieldInfo": mergeFieldInfo,
    }
}