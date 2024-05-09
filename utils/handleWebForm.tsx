import { getAgreementFormData } from "./getAggrementDetail"
import { ITermiteEstimateForm } from "./type"
import { formTemplates } from "./constant"
import { createTermiteAgreementWorkFlow } from "./createCustomWorkFlow"
const fs = require('fs');
export const handleWebForm = async (data:any)=>{
    const agreement =  data.agreement
    const agreement_id = agreement.id
    const participantUserEmail = data.participantUserEmail

    // ===== Getting document info =====
    const documentsInfo = agreement.documentsInfo.documents[0]
    const document_name = documentsInfo.name
    if([formTemplates.termiteEstimateFormTemplates.name].includes(document_name)){
        // fs.writeFileSync(`./${document_name}.json`, JSON.stringify(req.body))
        const agrement_detail = await getAgreementFormData(agreement_id)
        const formDataList = agrement_detail.formDataList as ITermiteEstimateForm
        // ===== creating agreement =====
        await createTermiteAgreementWorkFlow(formDataList,{participantUserEmail})
    }
}   