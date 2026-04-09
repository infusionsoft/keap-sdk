import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AchieveGoalRequest } from '../models/AchieveGoalRequest';
import { AchieveGoalResponse } from '../models/AchieveGoalResponse';
import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
import { AddProductInterestRequest } from '../models/AddProductInterestRequest';
import { AddToAutomationSequenceRequest } from '../models/AddToAutomationSequenceRequest';
import { AddToAutomationSequenceResponse } from '../models/AddToAutomationSequenceResponse';
import { Address } from '../models/Address';
import { AddressDetail } from '../models/AddressDetail';
import { AddressInformation } from '../models/AddressInformation';
import { AddressRequestDetail } from '../models/AddressRequestDetail';
import { AffiliateAddToProgramRequest } from '../models/AffiliateAddToProgramRequest';
import { AffiliateCommission } from '../models/AffiliateCommission';
import { AffiliateCommissionEarned } from '../models/AffiliateCommissionEarned';
import { AffiliateCommissionProgramResponse } from '../models/AffiliateCommissionProgramResponse';
import { AffiliateLink } from '../models/AffiliateLink';
import { AffiliateProgramResource } from '../models/AffiliateProgramResource';
import { AffiliateProgramV2 } from '../models/AffiliateProgramV2';
import { AffiliateRemoveFromProgramRequest } from '../models/AffiliateRemoveFromProgramRequest';
import { AffiliateSummaryRecord } from '../models/AffiliateSummaryRecord';
import { ApplicationCompany } from '../models/ApplicationCompany';
import { ApplicationConfigurationModuleAffiliate } from '../models/ApplicationConfigurationModuleAffiliate';
import { ApplicationConfigurationModuleAffiliateCommission } from '../models/ApplicationConfigurationModuleAffiliateCommission';
import { ApplicationConfigurationModuleApplication } from '../models/ApplicationConfigurationModuleApplication';
import { ApplicationConfigurationModuleAppointment } from '../models/ApplicationConfigurationModuleAppointment';
import { ApplicationConfigurationModuleContact } from '../models/ApplicationConfigurationModuleContact';
import { ApplicationConfigurationModuleContactAddressLabels } from '../models/ApplicationConfigurationModuleContactAddressLabels';
import { ApplicationConfigurationModuleEcommerce } from '../models/ApplicationConfigurationModuleEcommerce';
import { ApplicationConfigurationModuleEmail } from '../models/ApplicationConfigurationModuleEmail';
import { ApplicationConfigurationModuleForms } from '../models/ApplicationConfigurationModuleForms';
import { ApplicationConfigurationModuleFulfillment } from '../models/ApplicationConfigurationModuleFulfillment';
import { ApplicationConfigurationModuleInvoice } from '../models/ApplicationConfigurationModuleInvoice';
import { ApplicationConfigurationModuleNote } from '../models/ApplicationConfigurationModuleNote';
import { ApplicationConfigurationModuleOpportunity } from '../models/ApplicationConfigurationModuleOpportunity';
import { ApplicationConfigurationModuleOpportunityStates } from '../models/ApplicationConfigurationModuleOpportunityStates';
import { ApplicationConfigurationModuleOpportunityStatesActive } from '../models/ApplicationConfigurationModuleOpportunityStatesActive';
import { ApplicationConfigurationModuleOpportunityStatesLoss } from '../models/ApplicationConfigurationModuleOpportunityStatesLoss';
import { ApplicationConfigurationModuleOpportunityStatesWin } from '../models/ApplicationConfigurationModuleOpportunityStatesWin';
import { ApplicationConfigurationModuleTask } from '../models/ApplicationConfigurationModuleTask';
import { ApplicationConfigurationModuleTemplate } from '../models/ApplicationConfigurationModuleTemplate';
import { ApplicationFeaturesEnabled } from '../models/ApplicationFeaturesEnabled';
import { AppliedTag } from '../models/AppliedTag';
import { ApplyCommissionRequest } from '../models/ApplyCommissionRequest';
import { ApplyRemoveTagRequest } from '../models/ApplyRemoveTagRequest';
import { ApplyTagsResponse } from '../models/ApplyTagsResponse';
import { AssignAutomationCategoryRequest } from '../models/AssignAutomationCategoryRequest';
import { AssignProductsRequest } from '../models/AssignProductsRequest';
import { Automation } from '../models/Automation';
import { AutomationCategory } from '../models/AutomationCategory';
import { AutomationLockStatus } from '../models/AutomationLockStatus';
import { BasicCompany } from '../models/BasicCompany';
import { BasicContact } from '../models/BasicContact';
import { BasicUser } from '../models/BasicUser';
import { BatchUnpublishAutomationRequest } from '../models/BatchUnpublishAutomationRequest';
import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
import { Campaign } from '../models/Campaign';
import { CancelSubscriptionRequest } from '../models/CancelSubscriptionRequest';
import { CardInfo } from '../models/CardInfo';
import { CategoryDiscount } from '../models/CategoryDiscount';
import { CategoryDiscountCriteriaRequest } from '../models/CategoryDiscountCriteriaRequest';
import { CategoryDiscountCriteriaResponse } from '../models/CategoryDiscountCriteriaResponse';
import { CategoryReference } from '../models/CategoryReference';
import { CheckListItemDetails } from '../models/CheckListItemDetails';
import { ChecklistItem } from '../models/ChecklistItem';
import { Company } from '../models/Company';
import { Contact } from '../models/Contact';
import { ContactLink } from '../models/ContactLink';
import { ContactLinkType } from '../models/ContactLinkType';
import { ContactUtmResponse } from '../models/ContactUtmResponse';
import { Country } from '../models/Country';
import { CountryCodes } from '../models/CountryCodes';
import { CreateAffiliateRequest } from '../models/CreateAffiliateRequest';
import { CreateAutomationCategoryRequest } from '../models/CreateAutomationCategoryRequest';
import { CreateCategoryDiscountRequest } from '../models/CreateCategoryDiscountRequest';
import { CreateCommissionProgramRequest } from '../models/CreateCommissionProgramRequest';
import { CreateCompanyRequest } from '../models/CreateCompanyRequest';
import { CreateContactLinkTypeRequest } from '../models/CreateContactLinkTypeRequest';
import { CreateContactUtmPropertiesRequest } from '../models/CreateContactUtmPropertiesRequest';
import { CreateCustomFieldOptionRequest } from '../models/CreateCustomFieldOptionRequest';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateCustomFieldResponse } from '../models/CreateCustomFieldResponse';
import { CreateDefaultCommissionProgramRequest } from '../models/CreateDefaultCommissionProgramRequest';
import { CreateEmailSentRequest } from '../models/CreateEmailSentRequest';
import { CreateEmailsSentRequest } from '../models/CreateEmailsSentRequest';
import { CreateFreeTrialDiscountRequest } from '../models/CreateFreeTrialDiscountRequest';
import { CreateIntegrationsWordPressOptInOption } from '../models/CreateIntegrationsWordPressOptInOption';
import { CreateLeadSourceExpenseRequest } from '../models/CreateLeadSourceExpenseRequest';
import { CreateLeadSourceRecurringExpenseRequest } from '../models/CreateLeadSourceRecurringExpenseRequest';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { CreateNoteRequest } from '../models/CreateNoteRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageChecklistItem } from '../models/CreateOpportunityStageChecklistItem';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CreateOrUpdateAffiliateLinkRequest } from '../models/CreateOrUpdateAffiliateLinkRequest';
import { CreateOrderItemRequest } from '../models/CreateOrderItemRequest';
import { CreateOrderTotalDiscountRequest } from '../models/CreateOrderTotalDiscountRequest';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { CreateProductCategoryRequest } from '../models/CreateProductCategoryRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateProductDiscountRequest } from '../models/CreateProductDiscountRequest';
import { CreateProductInterestBundleRequest } from '../models/CreateProductInterestBundleRequest';
import { CreateProductOptionListOption } from '../models/CreateProductOptionListOption';
import { CreateProductOptionRequest } from '../models/CreateProductOptionRequest';
import { CreateProductOptionTextOption } from '../models/CreateProductOptionTextOption';
import { CreateProductRequestDetail } from '../models/CreateProductRequestDetail';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateShippingDiscountRequest } from '../models/CreateShippingDiscountRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateSubscriptionPlanRequest } from '../models/CreateSubscriptionPlanRequest';
import { CreateSubscriptionRequestDetail } from '../models/CreateSubscriptionRequestDetail';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CreateUpdateContactRequest } from '../models/CreateUpdateContactRequest';
import { CreateUpdateLeadSourceCategoryRequest } from '../models/CreateUpdateLeadSourceCategoryRequest';
import { CreateUpdateTagCategoryRequest } from '../models/CreateUpdateTagCategoryRequest';
import { CreateUpdateTagRequest } from '../models/CreateUpdateTagRequest';
import { CreateUpdateTaskRequest } from '../models/CreateUpdateTaskRequest';
import { CurrencyValue } from '../models/CurrencyValue';
import { CurrencyValueDetail } from '../models/CurrencyValueDetail';
import { CurrencyValueList } from '../models/CurrencyValueList';
import { CustomField } from '../models/CustomField';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { CustomFieldOption } from '../models/CustomFieldOption';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { DefaultCommission } from '../models/DefaultCommission';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteProgramCommissionRequest } from '../models/DeleteProgramCommissionRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { Discount } from '../models/Discount';
import { DiscountCriteria } from '../models/DiscountCriteria';
import { EmailAddress } from '../models/EmailAddress';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { EmailSendTemplateRequest } from '../models/EmailSendTemplateRequest';
import { EmailSent } from '../models/EmailSent';
import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailTemplate } from '../models/EmailTemplate';
import { EmailsSentList } from '../models/EmailsSentList';
import { ErrorDetails } from '../models/ErrorDetails';
import { FaxNumber } from '../models/FaxNumber';
import { FileMetadata } from '../models/FileMetadata';
import { FileOperationRequest } from '../models/FileOperationRequest';
import { FlowEventResultDTO } from '../models/FlowEventResultDTO';
import { FreeTrialDiscount } from '../models/FreeTrialDiscount';
import { GetApplicationEnabledStatusResponse } from '../models/GetApplicationEnabledStatusResponse';
import { GetBusinessProfileResponse } from '../models/GetBusinessProfileResponse';
import { GetContactOptionTypesResponse } from '../models/GetContactOptionTypesResponse';
import { GetNoteResponse } from '../models/GetNoteResponse';
import { GetRestCommissionProgram } from '../models/GetRestCommissionProgram';
import { GetSettingsResponse } from '../models/GetSettingsResponse';
import { GetTagCategoryResponse } from '../models/GetTagCategoryResponse';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { Goal } from '../models/Goal';
import { GoalEventResultDTO } from '../models/GoalEventResultDTO';
import { HistoricalCounts } from '../models/HistoricalCounts';
import { InvoiceFile } from '../models/InvoiceFile';
import { InvoiceOrderPayment } from '../models/InvoiceOrderPayment';
import { Item } from '../models/Item';
import { LeadScore } from '../models/LeadScore';
import { LeadSource } from '../models/LeadSource';
import { LeadSourceCategory } from '../models/LeadSourceCategory';
import { LeadSourceExpense } from '../models/LeadSourceExpense';
import { LeadSourceRecurringExpense } from '../models/LeadSourceRecurringExpense';
import { LeadSourceRecurringExpenseUpdateRequest } from '../models/LeadSourceRecurringExpenseUpdateRequest';
import { Link } from '../models/Link';
import { LinkContactsRequest } from '../models/LinkContactsRequest';
import { ListAffiliateCommissionProgramsResponse } from '../models/ListAffiliateCommissionProgramsResponse';
import { ListAffiliateCommissionsResponse } from '../models/ListAffiliateCommissionsResponse';
import { ListAffiliateLinksResponse } from '../models/ListAffiliateLinksResponse';
import { ListAffiliatePaymentsResponse } from '../models/ListAffiliatePaymentsResponse';
import { ListAffiliateReferralsResponse } from '../models/ListAffiliateReferralsResponse';
import { ListAffiliateSummariesResponse } from '../models/ListAffiliateSummariesResponse';
import { ListAffiliatesResponse } from '../models/ListAffiliatesResponse';
import { ListAutomationCategoryResponse } from '../models/ListAutomationCategoryResponse';
import { ListAutomationIdsResponse } from '../models/ListAutomationIdsResponse';
import { ListAutomationResponse } from '../models/ListAutomationResponse';
import { ListCampaignGoalsResponse } from '../models/ListCampaignGoalsResponse';
import { ListCampaignSequenceResponse } from '../models/ListCampaignSequenceResponse';
import { ListCampaignsResponse } from '../models/ListCampaignsResponse';
import { ListCategoryDiscountsResponse } from '../models/ListCategoryDiscountsResponse';
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactTagsResponse } from '../models/ListContactTagsResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListEmailsSentResponse } from '../models/ListEmailsSentResponse';
import { ListFilesResponse } from '../models/ListFilesResponse';
import { ListFreeTrialDiscountsResponse } from '../models/ListFreeTrialDiscountsResponse';
import { ListLeadSourceCategoriesResponse } from '../models/ListLeadSourceCategoriesResponse';
import { ListLeadSourceExpensesResponse } from '../models/ListLeadSourceExpensesResponse';
import { ListLeadSourceRecurringExpensesResponse } from '../models/ListLeadSourceRecurringExpensesResponse';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListMerchantAccountResponse } from '../models/ListMerchantAccountResponse';
import { ListMerchantsResponse } from '../models/ListMerchantsResponse';
import { ListNoteTemplateResponse } from '../models/ListNoteTemplateResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOption } from '../models/ListOption';
import { ListOrderPaymentsResponse } from '../models/ListOrderPaymentsResponse';
import { ListOrderTotalDiscountsResponse } from '../models/ListOrderTotalDiscountsResponse';
import { ListOrders } from '../models/ListOrders';
import { ListPaymentMethodsResponse } from '../models/ListPaymentMethodsResponse';
import { ListPayments } from '../models/ListPayments';
import { ListProductCategoriesResponse } from '../models/ListProductCategoriesResponse';
import { ListProductDiscountsResponse } from '../models/ListProductDiscountsResponse';
import { ListProductInterestBundleResponse } from '../models/ListProductInterestBundleResponse';
import { ListProductOptionsResponse } from '../models/ListProductOptionsResponse';
import { ListProductsResponseList } from '../models/ListProductsResponseList';
import { ListProgramResourcesResponse } from '../models/ListProgramResourcesResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListShippingDiscountsResponse } from '../models/ListShippingDiscountsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListSubscriptionsResponseList } from '../models/ListSubscriptionsResponseList';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListTransactions } from '../models/ListTransactions';
import { ListUserGroupsResponse } from '../models/ListUserGroupsResponse';
import { ListUsersPaginatedResponse } from '../models/ListUsersPaginatedResponse';
import { ListWebformsResponse } from '../models/ListWebformsResponse';
import { ModelError } from '../models/ModelError';
import { Note } from '../models/Note';
import { NoteTemplate } from '../models/NoteTemplate';
import { ObjectModel } from '../models/ObjectModel';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { OrderItem } from '../models/OrderItem';
import { OrderItemProduct } from '../models/OrderItemProduct';
import { OrderTotalDiscount } from '../models/OrderTotalDiscount';
import { OrderV2 } from '../models/OrderV2';
import { Origin } from '../models/Origin';
import { OriginRequest } from '../models/OriginRequest';
import { PatchAutomationCategoryRequest } from '../models/PatchAutomationCategoryRequest';
import { Payment } from '../models/Payment';
import { PaymentMethod } from '../models/PaymentMethod';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
import { PaymentPlan } from '../models/PaymentPlan';
import { PaymentPlanItem } from '../models/PaymentPlanItem';
import { PaymentResult } from '../models/PaymentResult';
import { PhoneNumber } from '../models/PhoneNumber';
import { ProductCategory } from '../models/ProductCategory';
import { ProductCommission } from '../models/ProductCommission';
import { ProductCommissionProgram } from '../models/ProductCommissionProgram';
import { ProductDiscount } from '../models/ProductDiscount';
import { ProductFixedOptionDetail } from '../models/ProductFixedOptionDetail';
import { ProductFixedOptionList } from '../models/ProductFixedOptionList';
import { ProductInterest } from '../models/ProductInterest';
import { ProductInterestBundle } from '../models/ProductInterestBundle';
import { ProductInventoryDetail } from '../models/ProductInventoryDetail';
import { ProductInventoryList } from '../models/ProductInventoryList';
import { ProductOption } from '../models/ProductOption';
import { ProductOptionsDetail } from '../models/ProductOptionsDetail';
import { ProductOptionsList } from '../models/ProductOptionsList';
import { ProductVariableSettingDetail } from '../models/ProductVariableSettingDetail';
import { ProductVariableSettingList } from '../models/ProductVariableSettingList';
import { Province } from '../models/Province';
import { Referral } from '../models/Referral';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
import { Report } from '../models/Report';
import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { ReportEntryValue } from '../models/ReportEntryValue';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { ResourceCommissionProgram } from '../models/ResourceCommissionProgram';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestAffiliatePayment } from '../models/RestAffiliatePayment';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestCreatePaymentRequest } from '../models/RestCreatePaymentRequest';
import { RestEmailAddressStatus } from '../models/RestEmailAddressStatus';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2ProductDetail } from '../models/RestV2ProductDetail';
import { RestV2ProductList } from '../models/RestV2ProductList';
import { RestV2User } from '../models/RestV2User';
import { RunReportRequest } from '../models/RunReportRequest';
import { Sequence } from '../models/Sequence';
import { SequencePath } from '../models/SequencePath';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { ShippingDiscount } from '../models/ShippingDiscount';
import { ShippingInformation } from '../models/ShippingInformation';
import { ShippingMethod } from '../models/ShippingMethod';
import { SocialAccount } from '../models/SocialAccount';
import { StageDetails } from '../models/StageDetails';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { SubscriptionDetail } from '../models/SubscriptionDetail';
import { SubscriptionList } from '../models/SubscriptionList';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { SubscriptionPlanDetail } from '../models/SubscriptionPlanDetail';
import { SubscriptionPlanList } from '../models/SubscriptionPlanList';
import { Tag } from '../models/Tag';
import { TagCategory } from '../models/TagCategory';
import { TaggedCompany } from '../models/TaggedCompany';
import { TaggedContact } from '../models/TaggedContact';
import { Task } from '../models/Task';
import { TextOption } from '../models/TextOption';
import { TransactionV2 } from '../models/TransactionV2';
import { UnpublishAutomationRequest } from '../models/UnpublishAutomationRequest';
import { UpdateAffiliateRequest } from '../models/UpdateAffiliateRequest';
import { UpdateBusinessProfileRequest } from '../models/UpdateBusinessProfileRequest';
import { UpdateCategoryDiscountRequest } from '../models/UpdateCategoryDiscountRequest';
import { UpdateCommissionProgramRequest } from '../models/UpdateCommissionProgramRequest';
import { UpdateCompanyRequest } from '../models/UpdateCompanyRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateDefaultCommissionProgramRequest } from '../models/UpdateDefaultCommissionProgramRequest';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
import { UpdateFreeTrialDiscountRequest } from '../models/UpdateFreeTrialDiscountRequest';
import { UpdateLeadSourceExpenseRequest } from '../models/UpdateLeadSourceExpenseRequest';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
import { UpdateOpportunityRequestV2 } from '../models/UpdateOpportunityRequestV2';
import { UpdateOpportunityStageChecklistItem } from '../models/UpdateOpportunityStageChecklistItem';
import { UpdateOpportunityStageRequest } from '../models/UpdateOpportunityStageRequest';
import { UpdateOrderItemRequest } from '../models/UpdateOrderItemRequest';
import { UpdateOrderRequest } from '../models/UpdateOrderRequest';
import { UpdateOrderTotalDiscountRequest } from '../models/UpdateOrderTotalDiscountRequest';
import { UpdateProductCategoryRequest } from '../models/UpdateProductCategoryRequest';
import { UpdateProductCommissionProgramRequest } from '../models/UpdateProductCommissionProgramRequest';
import { UpdateProductDiscountRequest } from '../models/UpdateProductDiscountRequest';
import { UpdateProductInterestBundleRequest } from '../models/UpdateProductInterestBundleRequest';
import { UpdateProductInterestRequest } from '../models/UpdateProductInterestRequest';
import { UpdateProductInventoryRequestDetail } from '../models/UpdateProductInventoryRequestDetail';
import { UpdateProductOptionListOption } from '../models/UpdateProductOptionListOption';
import { UpdateProductOptionRequest } from '../models/UpdateProductOptionRequest';
import { UpdateProductRequestDetail } from '../models/UpdateProductRequestDetail';
import { UpdateShippingDiscountRequest } from '../models/UpdateShippingDiscountRequest';
import { UpdateSubscriptionCommissionProgramRequest } from '../models/UpdateSubscriptionCommissionProgramRequest';
import { UpdateSubscriptionPlanRequest } from '../models/UpdateSubscriptionPlanRequest';
import { UpdateSubscriptionRequestDetail } from '../models/UpdateSubscriptionRequestDetail';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { UpdatedPaymentPlan } from '../models/UpdatedPaymentPlan';
import { User } from '../models/User';
import { UserGroup } from '../models/UserGroup';
import { Webform } from '../models/Webform';
import { WordPressOptInOption } from '../models/WordPressOptInOption';

import { ObservableAffiliateApi } from "./ObservableAPI";
import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";

export interface AffiliateApiAddAffiliateRequest {
    /**
     * 
     * @type CreateAffiliateRequest
     * @memberof AffiliateApiaddAffiliate
     */
    createAffiliateRequest: CreateAffiliateRequest
}

export interface AffiliateApiAddAffiliateToProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiaddAffiliateToProgram
     */
    id: string
    /**
     * 
     * @type AffiliateAddToProgramRequest
     * @memberof AffiliateApiaddAffiliateToProgram
     */
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest
}

export interface AffiliateApiAddCommissionProgramRequest {
    /**
     * 
     * @type CreateCommissionProgramRequest
     * @memberof AffiliateApiaddCommissionProgram
     */
    createCommissionProgramRequest: CreateCommissionProgramRequest
}

export interface AffiliateApiAssignProductCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignProductCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type CreateProductCommissionProgramRequest
     * @memberof AffiliateApiassignProductCommissionProgram
     */
    createProductCommissionProgramRequest: CreateProductCommissionProgramRequest
}

export interface AffiliateApiAssignSubscriptionCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignSubscriptionCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type CreateSubscriptionCommissionProgramRequest
     * @memberof AffiliateApiassignSubscriptionCommissionProgram
     */
    createSubscriptionCommissionProgramRequest: CreateSubscriptionCommissionProgramRequest
}

export interface AffiliateApiCreateAffiliateCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof AffiliateApicreateAffiliateCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface AffiliateApiCreateDefaultCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApicreateDefaultCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type CreateDefaultCommissionProgramRequest
     * @memberof AffiliateApicreateDefaultCommissionProgram
     */
    createDefaultCommissionProgramRequest: CreateDefaultCommissionProgramRequest
}

export interface AffiliateApiCreateRedirectLinkRequest {
    /**
     * 
     * @type CreateOrUpdateAffiliateLinkRequest
     * @memberof AffiliateApicreateRedirectLink
     */
    createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest
}

export interface AffiliateApiDeleteAffiliateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliate
     */
    id: string
}

export interface AffiliateApiDeleteAffiliateCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateCommissionProgram
     */
    commissionProgramId: string
}

export interface AffiliateApiDeleteAffiliateCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateCustomField
     */
    customFieldId: string
}

export interface AffiliateApiDeleteRedirectLinkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteRedirectLink
     */
    redirectId: string
}

export interface AffiliateApiGetAffiliateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliate
     */
    id: string
}

export interface AffiliateApiGetAffiliateCommissionTotalRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionTotal
     */
    affiliateId: string
}

export interface AffiliateApiGetAffiliateCommissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissions
     */
    affiliateId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissions
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissions
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApigetAffiliateCommissions
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissions
     */
    pageToken?: string
}

export interface AffiliateApiGetAffiliateCustomFieldsRequest {
}

export interface AffiliateApiGetCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetCommissionProgram
     */
    commissionProgramId: string
}

export interface AffiliateApiGetRedirectLinkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetRedirectLink
     */
    redirectId: string
}

export interface AffiliateApiGetReferralsByAffiliateIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetReferralsByAffiliateId
     */
    affiliateId: string
}

export interface AffiliateApiListAffiliateRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliate
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliate
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliate
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliate
     */
    pageToken?: string
}

export interface AffiliateApiListAffiliateCommissionProgramsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionPrograms
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionPrograms
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateCommissionPrograms
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionPrograms
     */
    pageToken?: string
}

export interface AffiliateApiListAffiliateLinksRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinks
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinks
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateLinks
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinks
     */
    pageToken?: string
}

export interface AffiliateApiListAffiliatePaymentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliatePayments
     */
    affiliateId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliatePayments
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliatePayments
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliatePayments
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliatePayments
     */
    pageToken?: string
}

export interface AffiliateApiListCommissionProgramResourcesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistCommissionProgramResources
     */
    commissionProgramId: string
}

export interface AffiliateApiListSummariesRequest {
    /**
     * Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummaries
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummaries
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistSummaries
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummaries
     */
    pageToken?: string
}

export interface AffiliateApiRemoveAffiliateFromProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveAffiliateFromProgram
     */
    id: string
    /**
     * 
     * @type AffiliateRemoveFromProgramRequest
     * @memberof AffiliateApiremoveAffiliateFromProgram
     */
    affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest
}

export interface AffiliateApiRemoveProductCommissionFromCommissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveProductCommissionFromCommissions
     */
    commissionId: string
    /**
     * 
     * @type DeleteProgramCommissionRequest
     * @memberof AffiliateApiremoveProductCommissionFromCommissions
     */
    deleteProgramCommissionRequest: DeleteProgramCommissionRequest
}

export interface AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissions
     */
    commissionId: string
    /**
     * 
     * @type DeleteSubscriptionPlanCommissionRequest
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissions
     */
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest
}

export interface AffiliateApiUpdateAffiliateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateAffiliate
     */
    id: string
    /**
     * 
     * @type UpdateAffiliateRequest
     * @memberof AffiliateApiupdateAffiliate
     */
    updateAffiliateRequest: UpdateAffiliateRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof AffiliateApiupdateAffiliate
     */
    updateMask?: any
}

export interface AffiliateApiUpdateAffiliateCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateAffiliateCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof AffiliateApiupdateAffiliateCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof AffiliateApiupdateAffiliateCustomField
     */
    updateMask?: any
}

export interface AffiliateApiUpdateCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type UpdateCommissionProgramRequest
     * @memberof AffiliateApiupdateCommissionProgram
     */
    updateCommissionProgramRequest: UpdateCommissionProgramRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof AffiliateApiupdateCommissionProgram
     */
    updateMask?: any
}

export interface AffiliateApiUpdateDefaultCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateDefaultCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type UpdateDefaultCommissionProgramRequest
     * @memberof AffiliateApiupdateDefaultCommissionProgram
     */
    updateDefaultCommissionProgramRequest: UpdateDefaultCommissionProgramRequest
    /**
     * 
     * Defaults to: undefined
     * @type Set&lt;string&gt;
     * @memberof AffiliateApiupdateDefaultCommissionProgram
     */
    updateMask?: Set<string>
}

export interface AffiliateApiUpdateProductCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateProductCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type UpdateProductCommissionProgramRequest
     * @memberof AffiliateApiupdateProductCommissionProgram
     */
    updateProductCommissionProgramRequest: UpdateProductCommissionProgramRequest
    /**
     * 
     * Defaults to: undefined
     * @type Set&lt;string&gt;
     * @memberof AffiliateApiupdateProductCommissionProgram
     */
    updateMask?: Set<string>
}

export interface AffiliateApiUpdateRedirectLinkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateRedirectLink
     */
    redirectId: string
    /**
     * 
     * @type CreateOrUpdateAffiliateLinkRequest
     * @memberof AffiliateApiupdateRedirectLink
     */
    createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest
}

export interface AffiliateApiUpdateSubscriptionCommissionProgramRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateSubscriptionCommissionProgram
     */
    commissionProgramId: string
    /**
     * 
     * @type UpdateSubscriptionCommissionProgramRequest
     * @memberof AffiliateApiupdateSubscriptionCommissionProgram
     */
    updateSubscriptionCommissionProgramRequest: UpdateSubscriptionCommissionProgramRequest
    /**
     * 
     * Defaults to: undefined
     * @type Set&lt;string&gt;
     * @memberof AffiliateApiupdateSubscriptionCommissionProgram
     */
    updateMask?: Set<string>
}

export class ObjectAffiliateApi {
    private api: ObservableAffiliateApi

    public constructor(configuration: Configuration, requestFactory?: AffiliateApiRequestFactory, responseProcessor?: AffiliateApiResponseProcessor) {
        this.api = new ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateWithHttpInfo(param: AffiliateApiAddAffiliateRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.addAffiliateWithHttpInfo(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliate(param: AffiliateApiAddAffiliateRequest, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.addAffiliate(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramWithHttpInfo(param: AffiliateApiAddAffiliateToProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.addAffiliateToProgramWithHttpInfo(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgram(param: AffiliateApiAddAffiliateToProgramRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.addAffiliateToProgram(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramWithHttpInfo(param: AffiliateApiAddCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.addCommissionProgramWithHttpInfo(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgram(param: AffiliateApiAddCommissionProgramRequest, options?: ConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        return this.api.addCommissionProgram(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramWithHttpInfo(param: AffiliateApiAssignProductCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.assignProductCommissionProgramWithHttpInfo(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgram(param: AffiliateApiAssignProductCommissionProgramRequest, options?: ConfigurationOptions): Promise<ProductCommissionProgram> {
        return this.api.assignProductCommissionProgram(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramWithHttpInfo(param: AffiliateApiAssignSubscriptionCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.assignSubscriptionCommissionProgramWithHttpInfo(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgram(param: AffiliateApiAssignSubscriptionCommissionProgramRequest, options?: ConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        return this.api.assignSubscriptionCommissionProgram(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomFieldWithHttpInfo(param: AffiliateApiCreateAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createAffiliateCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomField(param: AffiliateApiCreateAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createAffiliateCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramWithHttpInfo(param: AffiliateApiCreateDefaultCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.createDefaultCommissionProgramWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgram(param: AffiliateApiCreateDefaultCommissionProgramRequest, options?: ConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.createDefaultCommissionProgram(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkWithHttpInfo(param: AffiliateApiCreateRedirectLinkRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.createRedirectLinkWithHttpInfo(param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLink(param: AffiliateApiCreateRedirectLinkRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.createRedirectLink(param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateWithHttpInfo(param: AffiliateApiDeleteAffiliateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliate(param: AffiliateApiDeleteAffiliateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAffiliate(param.id,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramWithHttpInfo(param: AffiliateApiDeleteAffiliateCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateCommissionProgramWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgram(param: AffiliateApiDeleteAffiliateCommissionProgramRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAffiliateCommissionProgram(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteAffiliateCustomFieldWithHttpInfo(param: AffiliateApiDeleteAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateCustomFieldWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteAffiliateCustomField(param: AffiliateApiDeleteAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAffiliateCustomField(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkWithHttpInfo(param: AffiliateApiDeleteRedirectLinkRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRedirectLinkWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLink(param: AffiliateApiDeleteRedirectLinkRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRedirectLink(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateWithHttpInfo(param: AffiliateApiGetAffiliateRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.getAffiliateWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliate(param: AffiliateApiGetAffiliateRequest, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.getAffiliate(param.id,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalWithHttpInfo(param: AffiliateApiGetAffiliateCommissionTotalRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionEarned>> {
        return this.api.getAffiliateCommissionTotalWithHttpInfo(param.affiliateId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotal(param: AffiliateApiGetAffiliateCommissionTotalRequest, options?: ConfigurationOptions): Promise<AffiliateCommissionEarned> {
        return this.api.getAffiliateCommissionTotal(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions
     * Retrieve Affiliate Commissions
     * @param param the request object
     */
    public getAffiliateCommissionsWithHttpInfo(param: AffiliateApiGetAffiliateCommissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionsResponse>> {
        return this.api.getAffiliateCommissionsWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions
     * Retrieve Affiliate Commissions
     * @param param the request object
     */
    public getAffiliateCommissions(param: AffiliateApiGetAffiliateCommissionsRequest, options?: ConfigurationOptions): Promise<ListAffiliateCommissionsResponse> {
        return this.api.getAffiliateCommissions(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFieldsWithHttpInfo(param: AffiliateApiGetAffiliateCustomFieldsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.getAffiliateCustomFieldsWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFields(param: AffiliateApiGetAffiliateCustomFieldsRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.getAffiliateCustomFields( options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramWithHttpInfo(param: AffiliateApiGetCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetRestCommissionProgram>> {
        return this.api.getCommissionProgramWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgram(param: AffiliateApiGetCommissionProgramRequest, options?: ConfigurationOptions): Promise<GetRestCommissionProgram> {
        return this.api.getCommissionProgram(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkWithHttpInfo(param: AffiliateApiGetRedirectLinkRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.getRedirectLinkWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLink(param: AffiliateApiGetRedirectLinkRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.getRedirectLink(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param param the request object
     */
    public getReferralsByAffiliateIdWithHttpInfo(param: AffiliateApiGetReferralsByAffiliateIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateReferralsResponse>> {
        return this.api.getReferralsByAffiliateIdWithHttpInfo(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param param the request object
     */
    public getReferralsByAffiliateId(param: AffiliateApiGetReferralsByAffiliateIdRequest, options?: ConfigurationOptions): Promise<ListAffiliateReferralsResponse> {
        return this.api.getReferralsByAffiliateId(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param param the request object
     */
    public listAffiliateWithHttpInfo(param: AffiliateApiListAffiliateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliatesResponse>> {
        return this.api.listAffiliateWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param param the request object
     */
    public listAffiliate(param: AffiliateApiListAffiliateRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliatesResponse> {
        return this.api.listAffiliate(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsWithHttpInfo(param: AffiliateApiListAffiliateCommissionProgramsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        return this.api.listAffiliateCommissionProgramsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionPrograms(param: AffiliateApiListAffiliateCommissionProgramsRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliateCommissionProgramsResponse> {
        return this.api.listAffiliateCommissionPrograms(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksWithHttpInfo(param: AffiliateApiListAffiliateLinksRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        return this.api.listAffiliateLinksWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinks(param: AffiliateApiListAffiliateLinksRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliateLinksResponse> {
        return this.api.listAffiliateLinks(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of affiliate payments
     * List Affiliate Payments
     * @param param the request object
     */
    public listAffiliatePaymentsWithHttpInfo(param: AffiliateApiListAffiliatePaymentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliatePaymentsResponse>> {
        return this.api.listAffiliatePaymentsWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of affiliate payments
     * List Affiliate Payments
     * @param param the request object
     */
    public listAffiliatePayments(param: AffiliateApiListAffiliatePaymentsRequest, options?: ConfigurationOptions): Promise<ListAffiliatePaymentsResponse> {
        return this.api.listAffiliatePayments(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param param the request object
     */
    public listCommissionProgramResourcesWithHttpInfo(param: AffiliateApiListCommissionProgramResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListProgramResourcesResponse>> {
        return this.api.listCommissionProgramResourcesWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param param the request object
     */
    public listCommissionProgramResources(param: AffiliateApiListCommissionProgramResourcesRequest, options?: ConfigurationOptions): Promise<ListProgramResourcesResponse> {
        return this.api.listCommissionProgramResources(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesWithHttpInfo(param: AffiliateApiListSummariesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        return this.api.listSummariesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummaries(param: AffiliateApiListSummariesRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliateSummariesResponse> {
        return this.api.listSummaries(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramWithHttpInfo(param: AffiliateApiRemoveAffiliateFromProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeAffiliateFromProgramWithHttpInfo(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgram(param: AffiliateApiRemoveAffiliateFromProgramRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeAffiliateFromProgram(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param param the request object
     */
    public removeProductCommissionFromCommissionsWithHttpInfo(param: AffiliateApiRemoveProductCommissionFromCommissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeProductCommissionFromCommissionsWithHttpInfo(param.commissionId, param.deleteProgramCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param param the request object
     */
    public removeProductCommissionFromCommissions(param: AffiliateApiRemoveProductCommissionFromCommissionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeProductCommissionFromCommissions(param.commissionId, param.deleteProgramCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissions(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeSubscriptionPlanCommissionFromCommissions(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateWithHttpInfo(param: AffiliateApiUpdateAffiliateRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.updateAffiliateWithHttpInfo(param.id, param.updateAffiliateRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliate(param: AffiliateApiUpdateAffiliateRequest, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.updateAffiliate(param.id, param.updateAffiliateRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomFieldWithHttpInfo(param: AffiliateApiUpdateAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateAffiliateCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomField(param: AffiliateApiUpdateAffiliateCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateAffiliateCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgramWithHttpInfo(param: AffiliateApiUpdateCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.updateCommissionProgramWithHttpInfo(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgram(param: AffiliateApiUpdateCommissionProgramRequest, options?: ConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        return this.api.updateCommissionProgram(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public updateDefaultCommissionProgramWithHttpInfo(param: AffiliateApiUpdateDefaultCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.updateDefaultCommissionProgramWithHttpInfo(param.commissionProgramId, param.updateDefaultCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public updateDefaultCommissionProgram(param: AffiliateApiUpdateDefaultCommissionProgramRequest, options?: ConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.updateDefaultCommissionProgram(param.commissionProgramId, param.updateDefaultCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public updateProductCommissionProgramWithHttpInfo(param: AffiliateApiUpdateProductCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.updateProductCommissionProgramWithHttpInfo(param.commissionProgramId, param.updateProductCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public updateProductCommissionProgram(param: AffiliateApiUpdateProductCommissionProgramRequest, options?: ConfigurationOptions): Promise<ProductCommissionProgram> {
        return this.api.updateProductCommissionProgram(param.commissionProgramId, param.updateProductCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkWithHttpInfo(param: AffiliateApiUpdateRedirectLinkRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.updateRedirectLinkWithHttpInfo(param.redirectId, param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLink(param: AffiliateApiUpdateRedirectLinkRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.updateRedirectLink(param.redirectId, param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public updateSubscriptionCommissionProgramWithHttpInfo(param: AffiliateApiUpdateSubscriptionCommissionProgramRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.updateSubscriptionCommissionProgramWithHttpInfo(param.commissionProgramId, param.updateSubscriptionCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public updateSubscriptionCommissionProgram(param: AffiliateApiUpdateSubscriptionCommissionProgramRequest, options?: ConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        return this.api.updateSubscriptionCommissionProgram(param.commissionProgramId, param.updateSubscriptionCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableAutomationApi } from "./ObservableAPI";
import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";

export interface AutomationApiAchieveGoalRequest {
    /**
     * 
     * @type AchieveGoalRequest
     * @memberof AutomationApiachieveGoal
     */
    achieveGoalRequest: AchieveGoalRequest
}

export interface AutomationApiAddContactsToAutomationSequenceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequence
     */
    automationId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequence
     */
    sequenceId: string
    /**
     * 
     * @type AddToAutomationSequenceRequest
     * @memberof AutomationApiaddContactsToAutomationSequence
     */
    addToAutomationSequenceRequest: AddToAutomationSequenceRequest
}

export interface AutomationApiBulkAssignmentAutomationsCategoriesRequest {
    /**
     * 
     * @type AssignAutomationCategoryRequest
     * @memberof AutomationApibulkAssignmentAutomationsCategories
     */
    assignAutomationCategoryRequest: AssignAutomationCategoryRequest
}

export interface AutomationApiBulkUnpublishAutomationsRequest {
    /**
     * 
     * @type BatchUnpublishAutomationRequest
     * @memberof AutomationApibulkUnpublishAutomations
     */
    batchUnpublishAutomationRequest: BatchUnpublishAutomationRequest
}

export interface AutomationApiDeleteAutomationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationApideleteAutomation
     */
    automationIds: Array<number>
}

export interface AutomationApiGetAutomationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApigetAutomation
     */
    automationId: string
}

export interface AutomationApiListAllAutomationIdsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIds
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIds
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 25
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAllAutomationIds
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIds
     */
    pageToken?: string
}

export interface AutomationApiListAutomationsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomations
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomations
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 25
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAutomations
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomations
     */
    pageToken?: string
}

export interface AutomationApiUnpublishAutomationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiunpublishAutomation
     */
    automationId: string
    /**
     * 
     * @type UnpublishAutomationRequest
     * @memberof AutomationApiunpublishAutomation
     */
    unpublishAutomationRequest: UnpublishAutomationRequest
}

export class ObjectAutomationApi {
    private api: ObservableAutomationApi

    public constructor(configuration: Configuration, requestFactory?: AutomationApiRequestFactory, responseProcessor?: AutomationApiResponseProcessor) {
        this.api = new ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param param the request object
     */
    public achieveGoalWithHttpInfo(param: AutomationApiAchieveGoalRequest, options?: ConfigurationOptions): Promise<HttpInfo<AchieveGoalResponse>> {
        return this.api.achieveGoalWithHttpInfo(param.achieveGoalRequest,  options).toPromise();
    }

    /**
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param param the request object
     */
    public achieveGoal(param: AutomationApiAchieveGoalRequest, options?: ConfigurationOptions): Promise<AchieveGoalResponse> {
        return this.api.achieveGoal(param.achieveGoalRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceWithHttpInfo(param: AutomationApiAddContactsToAutomationSequenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        return this.api.addContactsToAutomationSequenceWithHttpInfo(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequence(param: AutomationApiAddContactsToAutomationSequenceRequest, options?: ConfigurationOptions): Promise<AddToAutomationSequenceResponse> {
        return this.api.addContactsToAutomationSequence(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param param the request object
     */
    public bulkAssignmentAutomationsCategoriesWithHttpInfo(param: AutomationApiBulkAssignmentAutomationsCategoriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.bulkAssignmentAutomationsCategoriesWithHttpInfo(param.assignAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param param the request object
     */
    public bulkAssignmentAutomationsCategories(param: AutomationApiBulkAssignmentAutomationsCategoriesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.bulkAssignmentAutomationsCategories(param.assignAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param param the request object
     */
    public bulkUnpublishAutomationsWithHttpInfo(param: AutomationApiBulkUnpublishAutomationsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.bulkUnpublishAutomationsWithHttpInfo(param.batchUnpublishAutomationRequest,  options).toPromise();
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param param the request object
     */
    public bulkUnpublishAutomations(param: AutomationApiBulkUnpublishAutomationsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.bulkUnpublishAutomations(param.batchUnpublishAutomationRequest,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationWithHttpInfo(param: AutomationApiDeleteAutomationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAutomationWithHttpInfo(param.automationIds,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomation(param: AutomationApiDeleteAutomationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAutomation(param.automationIds,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationWithHttpInfo(param: AutomationApiGetAutomationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Automation>> {
        return this.api.getAutomationWithHttpInfo(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomation(param: AutomationApiGetAutomationRequest, options?: ConfigurationOptions): Promise<Automation> {
        return this.api.getAutomation(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsWithHttpInfo(param: AutomationApiListAllAutomationIdsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationIdsResponse>> {
        return this.api.listAllAutomationIdsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIds(param: AutomationApiListAllAutomationIdsRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationIdsResponse> {
        return this.api.listAllAutomationIds(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomationsWithHttpInfo(param: AutomationApiListAutomationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationResponse>> {
        return this.api.listAutomationsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomations(param: AutomationApiListAutomationsRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationResponse> {
        return this.api.listAutomations(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param param the request object
     */
    public unpublishAutomationWithHttpInfo(param: AutomationApiUnpublishAutomationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unpublishAutomationWithHttpInfo(param.automationId, param.unpublishAutomationRequest,  options).toPromise();
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param param the request object
     */
    public unpublishAutomation(param: AutomationApiUnpublishAutomationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unpublishAutomation(param.automationId, param.unpublishAutomationRequest,  options).toPromise();
    }

}

import { ObservableAutomationCategoryApi } from "./ObservableAPI";
import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";

export interface AutomationCategoryApiCreateCategoryRequest {
    /**
     * 
     * @type CreateAutomationCategoryRequest
     * @memberof AutomationCategoryApicreateCategory
     */
    createAutomationCategoryRequest: CreateAutomationCategoryRequest
}

export interface AutomationCategoryApiDeleteCategoriesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationCategoryApideleteCategories
     */
    ids: Array<number>
}

export interface AutomationCategoryApiListCategoriesRequest {
}

export interface AutomationCategoryApiPatchCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationCategoryApipatchCategory
     */
    id: string
    /**
     * 
     * @type PatchAutomationCategoryRequest
     * @memberof AutomationCategoryApipatchCategory
     */
    patchAutomationCategoryRequest: PatchAutomationCategoryRequest
}

export class ObjectAutomationCategoryApi {
    private api: ObservableAutomationCategoryApi

    public constructor(configuration: Configuration, requestFactory?: AutomationCategoryApiRequestFactory, responseProcessor?: AutomationCategoryApiResponseProcessor) {
        this.api = new ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategoryWithHttpInfo(param: AutomationCategoryApiCreateCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        return this.api.createCategoryWithHttpInfo(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategory(param: AutomationCategoryApiCreateCategoryRequest, options?: ConfigurationOptions): Promise<AutomationCategory> {
        return this.api.createCategory(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesWithHttpInfo(param: AutomationCategoryApiDeleteCategoriesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCategoriesWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategories(param: AutomationCategoryApiDeleteCategoriesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCategories(param.ids,  options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategoriesWithHttpInfo(param: AutomationCategoryApiListCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        return this.api.listCategoriesWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategories(param: AutomationCategoryApiListCategoriesRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationCategoryResponse> {
        return this.api.listCategories( options).toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param param the request object
     */
    public patchCategoryWithHttpInfo(param: AutomationCategoryApiPatchCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        return this.api.patchCategoryWithHttpInfo(param.id, param.patchAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param param the request object
     */
    public patchCategory(param: AutomationCategoryApiPatchCategoryRequest, options?: ConfigurationOptions): Promise<AutomationCategory> {
        return this.api.patchCategory(param.id, param.patchAutomationCategoryRequest,  options).toPromise();
    }

}

import { ObservableBusinessProfileApi } from "./ObservableAPI";
import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";

export interface BusinessProfileApiGetBusinessProfileRequest {
}

export interface BusinessProfileApiUpdateBusinessProfileRequest {
    /**
     * 
     * @type UpdateBusinessProfileRequest
     * @memberof BusinessProfileApiupdateBusinessProfile
     */
    updateBusinessProfileRequest: UpdateBusinessProfileRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof BusinessProfileApiupdateBusinessProfile
     */
    updateMask?: any
}

export class ObjectBusinessProfileApi {
    private api: ObservableBusinessProfileApi

    public constructor(configuration: Configuration, requestFactory?: BusinessProfileApiRequestFactory, responseProcessor?: BusinessProfileApiResponseProcessor) {
        this.api = new ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfileWithHttpInfo(param: BusinessProfileApiGetBusinessProfileRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.getBusinessProfileWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfile(param: BusinessProfileApiGetBusinessProfileRequest = {}, options?: ConfigurationOptions): Promise<GetBusinessProfileResponse> {
        return this.api.getBusinessProfile( options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfileWithHttpInfo(param: BusinessProfileApiUpdateBusinessProfileRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.updateBusinessProfileWithHttpInfo(param.updateBusinessProfileRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfile(param: BusinessProfileApiUpdateBusinessProfileRequest, options?: ConfigurationOptions): Promise<GetBusinessProfileResponse> {
        return this.api.updateBusinessProfile(param.updateBusinessProfileRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableCampaignApi } from "./ObservableAPI";
import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";

export interface CampaignApiAddContactsToCampaignSequenceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequence
     */
    campaignId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequence
     */
    sequenceId: string
    /**
     * 
     * @type AddContactsToSequenceRequest
     * @memberof CampaignApiaddContactsToCampaignSequence
     */
    addContactsToSequenceRequest: AddContactsToSequenceRequest
}

export interface CampaignApiGetCampaignRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApigetCampaign
     */
    campaignId: string
}

export interface CampaignApiGetCampaignGoalsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApigetCampaignGoals
     */
    campaignId: string
}

export interface CampaignApiGetCampaignSequencesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApigetCampaignSequences
     */
    campaignId: string
}

export interface CampaignApiListCampaignsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaigns
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaigns
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CampaignApilistCampaigns
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaigns
     */
    pageToken?: string
}

export interface CampaignApiRemoveContactsFromCampaignSequenceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequence
     */
    campaignId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequence
     */
    sequenceId: string
    /**
     * 
     * @type RemoveContactsFromSequenceRequest
     * @memberof CampaignApiremoveContactsFromCampaignSequence
     */
    removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest
}

export class ObjectCampaignApi {
    private api: ObservableCampaignApi

    public constructor(configuration: Configuration, requestFactory?: CampaignApiRequestFactory, responseProcessor?: CampaignApiResponseProcessor) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequenceWithHttpInfo(param: CampaignApiAddContactsToCampaignSequenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        return this.api.addContactsToCampaignSequenceWithHttpInfo(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequence(param: CampaignApiAddContactsToCampaignSequenceRequest, options?: ConfigurationOptions): Promise<AddContactsToSequenceResponse> {
        return this.api.addContactsToCampaignSequence(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignWithHttpInfo(param: CampaignApiGetCampaignRequest, options?: ConfigurationOptions): Promise<HttpInfo<Campaign>> {
        return this.api.getCampaignWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaign(param: CampaignApiGetCampaignRequest, options?: ConfigurationOptions): Promise<Campaign> {
        return this.api.getCampaign(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param param the request object
     */
    public getCampaignGoalsWithHttpInfo(param: CampaignApiGetCampaignGoalsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListCampaignGoalsResponse>> {
        return this.api.getCampaignGoalsWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param param the request object
     */
    public getCampaignGoals(param: CampaignApiGetCampaignGoalsRequest, options?: ConfigurationOptions): Promise<ListCampaignGoalsResponse> {
        return this.api.getCampaignGoals(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param param the request object
     */
    public getCampaignSequencesWithHttpInfo(param: CampaignApiGetCampaignSequencesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListCampaignSequenceResponse>> {
        return this.api.getCampaignSequencesWithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param param the request object
     */
    public getCampaignSequences(param: CampaignApiGetCampaignSequencesRequest, options?: ConfigurationOptions): Promise<ListCampaignSequenceResponse> {
        return this.api.getCampaignSequences(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsWithHttpInfo(param: CampaignApiListCampaignsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCampaignsResponse>> {
        return this.api.listCampaignsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaigns(param: CampaignApiListCampaignsRequest = {}, options?: ConfigurationOptions): Promise<ListCampaignsResponse> {
        return this.api.listCampaigns(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceWithHttpInfo(param: CampaignApiRemoveContactsFromCampaignSequenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        return this.api.removeContactsFromCampaignSequenceWithHttpInfo(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequence(param: CampaignApiRemoveContactsFromCampaignSequenceRequest, options?: ConfigurationOptions): Promise<RemoveContactsFromSequenceResponse> {
        return this.api.removeContactsFromCampaignSequence(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

}

import { ObservableCategoryDiscountsApi } from "./ObservableAPI";
import { CategoryDiscountsApiRequestFactory, CategoryDiscountsApiResponseProcessor} from "../apis/CategoryDiscountsApi";

export interface CategoryDiscountsApiCreateCategoryDiscountRequest {
    /**
     * 
     * @type CreateCategoryDiscountRequest
     * @memberof CategoryDiscountsApicreateCategoryDiscount
     */
    createCategoryDiscountRequest: CreateCategoryDiscountRequest
}

export interface CategoryDiscountsApiDeleteCategoryDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApideleteCategoryDiscount
     */
    discountId: string
}

export interface CategoryDiscountsApiGetCategoryDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApigetCategoryDiscount
     */
    discountId: string
}

export interface CategoryDiscountsApiListCategoryDiscountsRequest {
    /**
     * Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApilistCategoryDiscounts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApilistCategoryDiscounts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CategoryDiscountsApilistCategoryDiscounts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApilistCategoryDiscounts
     */
    pageToken?: string
}

export interface CategoryDiscountsApiUpdateCategoryDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountsApiupdateCategoryDiscount
     */
    discountId: string
    /**
     * 
     * @type UpdateCategoryDiscountRequest
     * @memberof CategoryDiscountsApiupdateCategoryDiscount
     */
    updateCategoryDiscountRequest: UpdateCategoryDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof CategoryDiscountsApiupdateCategoryDiscount
     */
    updateMask?: any
}

export class ObjectCategoryDiscountsApi {
    private api: ObservableCategoryDiscountsApi

    public constructor(configuration: Configuration, requestFactory?: CategoryDiscountsApiRequestFactory, responseProcessor?: CategoryDiscountsApiResponseProcessor) {
        this.api = new ObservableCategoryDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param param the request object
     */
    public createCategoryDiscountWithHttpInfo(param: CategoryDiscountsApiCreateCategoryDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.createCategoryDiscountWithHttpInfo(param.createCategoryDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param param the request object
     */
    public createCategoryDiscount(param: CategoryDiscountsApiCreateCategoryDiscountRequest, options?: ConfigurationOptions): Promise<CategoryDiscount> {
        return this.api.createCategoryDiscount(param.createCategoryDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteCategoryDiscountWithHttpInfo(param: CategoryDiscountsApiDeleteCategoryDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCategoryDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteCategoryDiscount(param: CategoryDiscountsApiDeleteCategoryDiscountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCategoryDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getCategoryDiscountWithHttpInfo(param: CategoryDiscountsApiGetCategoryDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.getCategoryDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getCategoryDiscount(param: CategoryDiscountsApiGetCategoryDiscountRequest, options?: ConfigurationOptions): Promise<CategoryDiscount> {
        return this.api.getCategoryDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscountsWithHttpInfo(param: CategoryDiscountsApiListCategoryDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCategoryDiscountsResponse>> {
        return this.api.listCategoryDiscountsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscounts(param: CategoryDiscountsApiListCategoryDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ListCategoryDiscountsResponse> {
        return this.api.listCategoryDiscounts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param param the request object
     */
    public updateCategoryDiscountWithHttpInfo(param: CategoryDiscountsApiUpdateCategoryDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.updateCategoryDiscountWithHttpInfo(param.discountId, param.updateCategoryDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param param the request object
     */
    public updateCategoryDiscount(param: CategoryDiscountsApiUpdateCategoryDiscountRequest, options?: ConfigurationOptions): Promise<CategoryDiscount> {
        return this.api.updateCategoryDiscount(param.discountId, param.updateCategoryDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableCompanyApi } from "./ObservableAPI";
import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";

export interface CompanyApiCreateCompanyRequest {
    /**
     * 
     * @type CreateCompanyRequest
     * @memberof CompanyApicreateCompany
     */
    createCompanyRequest: CreateCompanyRequest
}

export interface CompanyApiCreateCompanyCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof CompanyApicreateCompanyCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface CompanyApiDeleteCompanyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApideleteCompany
     */
    companyId: string
}

export interface CompanyApiGetCompanyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApigetCompany
     */
    companyId: string
    /**
     * Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApigetCompany
     */
    fields?: Array<string>
}

export interface CompanyApiListCompaniesRequest {
    /**
     * Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;address&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApilistCompanies
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompanies
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompanies
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CompanyApilistCompanies
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompanies
     */
    pageToken?: string
}

export interface CompanyApiRetrieveCompanyCustomFieldModelRequest {
}

export interface CompanyApiUpdateCompanyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApiupdateCompany
     */
    companyId: string
    /**
     * 
     * @type UpdateCompanyRequest
     * @memberof CompanyApiupdateCompany
     */
    updateCompanyRequest: UpdateCompanyRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof CompanyApiupdateCompany
     */
    updateMask?: any
}

export interface CompanyApiUpdateCompanyCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApiupdateCompanyCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof CompanyApiupdateCompanyCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof CompanyApiupdateCompanyCustomField
     */
    updateMask?: any
}

export class ObjectCompanyApi {
    private api: ObservableCompanyApi

    public constructor(configuration: Configuration, requestFactory?: CompanyApiRequestFactory, responseProcessor?: CompanyApiResponseProcessor) {
        this.api = new ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompanyWithHttpInfo(param: CompanyApiCreateCompanyRequest, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.createCompanyWithHttpInfo(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompany(param: CompanyApiCreateCompanyRequest, options?: ConfigurationOptions): Promise<Company> {
        return this.api.createCompany(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param param the request object
     */
    public createCompanyCustomFieldWithHttpInfo(param: CompanyApiCreateCompanyCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createCompanyCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param param the request object
     */
    public createCompanyCustomField(param: CompanyApiCreateCompanyCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createCompanyCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyWithHttpInfo(param: CompanyApiDeleteCompanyRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCompanyWithHttpInfo(param.companyId,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompany(param: CompanyApiDeleteCompanyRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCompany(param.companyId,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyWithHttpInfo(param: CompanyApiGetCompanyRequest, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.getCompanyWithHttpInfo(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompany(param: CompanyApiGetCompanyRequest, options?: ConfigurationOptions): Promise<Company> {
        return this.api.getCompany(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies.<br/><br/>
     * List Companies
     * @param param the request object
     */
    public listCompaniesWithHttpInfo(param: CompanyApiListCompaniesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCompaniesResponse>> {
        return this.api.listCompaniesWithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies.<br/><br/>
     * List Companies
     * @param param the request object
     */
    public listCompanies(param: CompanyApiListCompaniesRequest = {}, options?: ConfigurationOptions): Promise<ListCompaniesResponse> {
        return this.api.listCompanies(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     * @param param the request object
     */
    public retrieveCompanyCustomFieldModelWithHttpInfo(param: CompanyApiRetrieveCompanyCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveCompanyCustomFieldModelWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     * @param param the request object
     */
    public retrieveCompanyCustomFieldModel(param: CompanyApiRetrieveCompanyCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveCompanyCustomFieldModel( options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompanyWithHttpInfo(param: CompanyApiUpdateCompanyRequest, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.updateCompanyWithHttpInfo(param.companyId, param.updateCompanyRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompany(param: CompanyApiUpdateCompanyRequest, options?: ConfigurationOptions): Promise<Company> {
        return this.api.updateCompany(param.companyId, param.updateCompanyRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param param the request object
     */
    public updateCompanyCustomFieldWithHttpInfo(param: CompanyApiUpdateCompanyCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateCompanyCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param param the request object
     */
    public updateCompanyCustomField(param: CompanyApiUpdateCompanyCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateCompanyCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableContactApi } from "./ObservableAPI";
import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";

export interface ContactApiCreateContactRequest {
    /**
     * 
     * @type CreateUpdateContactRequest
     * @memberof ContactApicreateContact
     */
    createUpdateContactRequest: CreateUpdateContactRequest
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApicreateContact
     */
    fields?: Array<string>
    /**
     * Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
     * Defaults to: undefined
     * @type &#39;Email&#39; | &#39;EmailAndName&#39; | &#39;EmailAndNameAndCompany&#39;
     * @memberof ContactApicreateContact
     */
    duplicateOption?: 'Email' | 'EmailAndName' | 'EmailAndNameAndCompany'
}

export interface ContactApiCreateContactCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof ContactApicreateContactCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface ContactApiCreateContactLinkTypeRequest {
    /**
     * 
     * @type CreateContactLinkTypeRequest
     * @memberof ContactApicreateContactLinkType
     */
    createContactLinkTypeRequest: CreateContactLinkTypeRequest
}

export interface ContactApiDeleteContactRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApideleteContact
     */
    contactId: string
}

export interface ContactApiGetContactRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContact
     */
    contactId: string
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApigetContact
     */
    fields?: Array<string>
}

export interface ContactApiLinkContactsRequest {
    /**
     * 
     * @type LinkContactsRequest
     * @memberof ContactApilinkContacts
     */
    linkContactsRequest: LinkContactsRequest
}

export interface ContactApiListContactLinkTypesRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypes
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypes
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactLinkTypes
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypes
     */
    pageToken?: string
}

export interface ContactApiListContactLinksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinks
     */
    contactId: string
}

export interface ContactApiListContactsRequest {
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApilistContacts
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContacts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContacts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContacts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContacts
     */
    pageToken?: string
}

export interface ContactApiListTagsForContactRequest {
    /**
     * Contact identifier
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistTagsForContact
     */
    contactId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistTagsForContact
     */
    filter?: string
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistTagsForContact
     */
    pageToken?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistTagsForContact
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistTagsForContact
     */
    pageSize?: number
}

export interface ContactApiRetrieveContactModelRequest {
}

export interface ContactApiUnlinkContactsRequest {
    /**
     * 
     * @type LinkContactsRequest
     * @memberof ContactApiunlinkContacts
     */
    linkContactsRequest: LinkContactsRequest
}

export interface ContactApiUpdateContactRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiupdateContact
     */
    contactId: string
    /**
     * 
     * @type CreateUpdateContactRequest
     * @memberof ContactApiupdateContact
     */
    createUpdateContactRequest: CreateUpdateContactRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ContactApiupdateContact
     */
    updateMask?: any
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website,account_id,assistant_name,assistant_phone, billing_information,created_by,groups,last_updated_by)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApiupdateContact
     */
    fields?: Array<string>
}

export class ObjectContactApi {
    private api: ObservableContactApi

    public constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param param the request object
     */
    public createContactWithHttpInfo(param: ContactApiCreateContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.createContactWithHttpInfo(param.createUpdateContactRequest, param.fields, param.duplicateOption,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param param the request object
     */
    public createContact(param: ContactApiCreateContactRequest, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.createContact(param.createUpdateContactRequest, param.fields, param.duplicateOption,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param param the request object
     */
    public createContactCustomFieldWithHttpInfo(param: ContactApiCreateContactCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createContactCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param param the request object
     */
    public createContactCustomField(param: ContactApiCreateContactCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createContactCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeWithHttpInfo(param: ContactApiCreateContactLinkTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactLinkType>> {
        return this.api.createContactLinkTypeWithHttpInfo(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkType(param: ContactApiCreateContactLinkTypeRequest, options?: ConfigurationOptions): Promise<ContactLinkType> {
        return this.api.createContactLinkType(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactWithHttpInfo(param: ContactApiDeleteContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteContactWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContact(param: ContactApiDeleteContactRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteContact(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactWithHttpInfo(param: ContactApiGetContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.getContactWithHttpInfo(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContact(param: ContactApiGetContactRequest, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.getContact(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsWithHttpInfo(param: ContactApiLinkContactsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactLink>> {
        return this.api.linkContactsWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContacts(param: ContactApiLinkContactsRequest, options?: ConfigurationOptions): Promise<ContactLink> {
        return this.api.linkContacts(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesWithHttpInfo(param: ContactApiListContactLinkTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        return this.api.listContactLinkTypesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypes(param: ContactApiListContactLinkTypesRequest = {}, options?: ConfigurationOptions): Promise<ListContactLinkTypesResponse> {
        return this.api.listContactLinkTypes(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksWithHttpInfo(param: ContactApiListContactLinksRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListContactLinksResponse>> {
        return this.api.listContactLinksWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinks(param: ContactApiListContactLinksRequest, options?: ConfigurationOptions): Promise<ListContactLinksResponse> {
        return this.api.listContactLinks(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsWithHttpInfo(param: ContactApiListContactsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListContactsResponse>> {
        return this.api.listContactsWithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContacts(param: ContactApiListContactsRequest = {}, options?: ConfigurationOptions): Promise<ListContactsResponse> {
        return this.api.listContacts(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of tags applied to the specified Contact
     * List Applied Tags
     * @param param the request object
     */
    public listTagsForContactWithHttpInfo(param: ContactApiListTagsForContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListContactTagsResponse>> {
        return this.api.listTagsForContactWithHttpInfo(param.contactId, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of tags applied to the specified Contact
     * List Applied Tags
     * @param param the request object
     */
    public listTagsForContact(param: ContactApiListTagsForContactRequest, options?: ConfigurationOptions): Promise<ListContactTagsResponse> {
        return this.api.listTagsForContact(param.contactId, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelWithHttpInfo(param: ContactApiRetrieveContactModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveContactModelWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModel(param: ContactApiRetrieveContactModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveContactModel( options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsWithHttpInfo(param: ContactApiUnlinkContactsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unlinkContactsWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContacts(param: ContactApiUnlinkContactsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unlinkContacts(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContactWithHttpInfo(param: ContactApiUpdateContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.updateContactWithHttpInfo(param.contactId, param.createUpdateContactRequest, param.updateMask, param.fields,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContact(param: ContactApiUpdateContactRequest, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.updateContact(param.contactId, param.createUpdateContactRequest, param.updateMask, param.fields,  options).toPromise();
    }

}

import { ObservableEmailApi } from "./ObservableAPI";
import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";

export interface EmailApiCreateEmailRequest {
    /**
     * 
     * @type CreateEmailSentRequest
     * @memberof EmailApicreateEmail
     */
    createEmailSentRequest: CreateEmailSentRequest
}

export interface EmailApiCreateEmailsRequest {
    /**
     * 
     * @type CreateEmailsSentRequest
     * @memberof EmailApicreateEmails
     */
    createEmailsSentRequest: CreateEmailsSentRequest
}

export interface EmailApiDeleteEmailRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailApideleteEmail
     */
    id: string
}

export interface EmailApiDeleteEmailsRequest {
    /**
     * 
     * @type DeleteEmailsRequest
     * @memberof EmailApideleteEmails
     */
    deleteEmailsRequest: DeleteEmailsRequest
}

export interface EmailApiGetEmailRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmail
     */
    id: string
}

export interface EmailApiGetEmailTemplateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmailTemplate
     */
    emailTemplateId: string
}

export interface EmailApiListEmailsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time 
     * Defaults to: undefined
     * @type string
     * @memberof EmailApilistEmails
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof EmailApilistEmails
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof EmailApilistEmails
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof EmailApilistEmails
     */
    pageToken?: string
}

export interface EmailApiSendEmailRequest {
    /**
     * 
     * @type EmailSendRequest
     * @memberof EmailApisendEmail
     */
    emailSendRequest: EmailSendRequest
}

export interface EmailApiSendEmailTemplateRequest {
    /**
     * 
     * @type EmailSendTemplateRequest
     * @memberof EmailApisendEmailTemplate
     */
    emailSendTemplateRequest: EmailSendTemplateRequest
}

export class ObjectEmailApi {
    private api: ObservableEmailApi

    public constructor(configuration: Configuration, requestFactory?: EmailApiRequestFactory, responseProcessor?: EmailApiResponseProcessor) {
        this.api = new ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmailWithHttpInfo(param: EmailApiCreateEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.createEmailWithHttpInfo(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmail(param: EmailApiCreateEmailRequest, options?: ConfigurationOptions): Promise<EmailSentWithContent> {
        return this.api.createEmail(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsWithHttpInfo(param: EmailApiCreateEmailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailsSentList>> {
        return this.api.createEmailsWithHttpInfo(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmails(param: EmailApiCreateEmailsRequest, options?: ConfigurationOptions): Promise<EmailsSentList> {
        return this.api.createEmails(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailWithHttpInfo(param: EmailApiDeleteEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteEmailWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmail(param: EmailApiDeleteEmailRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteEmail(param.id,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsWithHttpInfo(param: EmailApiDeleteEmailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteEmailsResponse>> {
        return this.api.deleteEmailsWithHttpInfo(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmails(param: EmailApiDeleteEmailsRequest, options?: ConfigurationOptions): Promise<DeleteEmailsResponse> {
        return this.api.deleteEmails(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailWithHttpInfo(param: EmailApiGetEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.getEmailWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmail(param: EmailApiGetEmailRequest, options?: ConfigurationOptions): Promise<EmailSentWithContent> {
        return this.api.getEmail(param.id,  options).toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param param the request object
     */
    public getEmailTemplateWithHttpInfo(param: EmailApiGetEmailTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailTemplate>> {
        return this.api.getEmailTemplateWithHttpInfo(param.emailTemplateId,  options).toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param param the request object
     */
    public getEmailTemplate(param: EmailApiGetEmailTemplateRequest, options?: ConfigurationOptions): Promise<EmailTemplate> {
        return this.api.getEmailTemplate(param.emailTemplateId,  options).toPromise();
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param param the request object
     */
    public listEmailsWithHttpInfo(param: EmailApiListEmailsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListEmailsSentResponse>> {
        return this.api.listEmailsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param param the request object
     */
    public listEmails(param: EmailApiListEmailsRequest = {}, options?: ConfigurationOptions): Promise<ListEmailsSentResponse> {
        return this.api.listEmails(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailWithHttpInfo(param: EmailApiSendEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendEmailWithHttpInfo(param.emailSendRequest,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmail(param: EmailApiSendEmailRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.sendEmail(param.emailSendRequest,  options).toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param param the request object
     */
    public sendEmailTemplateWithHttpInfo(param: EmailApiSendEmailTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendEmailTemplateWithHttpInfo(param.emailSendTemplateRequest,  options).toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param param the request object
     */
    public sendEmailTemplate(param: EmailApiSendEmailTemplateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.sendEmailTemplate(param.emailSendTemplateRequest,  options).toPromise();
    }

}

import { ObservableEmailAddressApi } from "./ObservableAPI";
import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";

export interface EmailAddressApiGetEmailAddressStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApigetEmailAddressStatus
     */
    email: string
}

export interface EmailAddressApiUpdateEmailAddressOptStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApiupdateEmailAddressOptStatus
     */
    email: string
    /**
     * 
     * @type UpdateEmailAddress
     * @memberof EmailAddressApiupdateEmailAddressOptStatus
     */
    updateEmailAddress: UpdateEmailAddress
}

export class ObjectEmailAddressApi {
    private api: ObservableEmailAddressApi

    public constructor(configuration: Configuration, requestFactory?: EmailAddressApiRequestFactory, responseProcessor?: EmailAddressApiResponseProcessor) {
        this.api = new ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatusWithHttpInfo(param: EmailAddressApiGetEmailAddressStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestEmailAddressStatus>> {
        return this.api.getEmailAddressStatusWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatus(param: EmailAddressApiGetEmailAddressStatusRequest, options?: ConfigurationOptions): Promise<RestEmailAddressStatus> {
        return this.api.getEmailAddressStatus(param.email,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatusWithHttpInfo(param: EmailAddressApiUpdateEmailAddressOptStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestEmailAddressStatus>> {
        return this.api.updateEmailAddressOptStatusWithHttpInfo(param.email, param.updateEmailAddress,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatus(param: EmailAddressApiUpdateEmailAddressOptStatusRequest, options?: ConfigurationOptions): Promise<RestEmailAddressStatus> {
        return this.api.updateEmailAddressOptStatus(param.email, param.updateEmailAddress,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiCreateFileRequest {
    /**
     * File to upload. This is a file sent as multi-part (not a string)
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApicreateFile
     */
    file: HttpFile
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    fileName: string
    /**
     * Is public
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApicreateFile
     */
    isPublic: boolean
    /**
     * File association
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    fileAssociation: string
    /**
     * File to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApicreateFile
     */
    file2: HttpFile
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    fileName2: string
    /**
     * Is public
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    isPublic2: string
    /**
     * File association
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    fileAssociation2: string
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    contactId?: string
    /**
     * Contact ID. Required if the &#x60;file_association&#x60; is CONTACT
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFile
     */
    contactId2?: string
}

export interface FilesApiDeleteFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApideleteFile
     */
    fileId: string
}

export interface FilesApiGetFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFile
     */
    fileId: string
}

export interface FilesApiGetFileDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFileData
     */
    fileId: string
}

export interface FilesApiListFilesRequest {
    /**
     * Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFiles
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFiles
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof FilesApilistFiles
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFiles
     */
    pageToken?: string
}

export interface FilesApiUpdateFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFile
     */
    fileId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof FilesApiupdateFile
     */
    updateMask?: any
    /**
     * File to upload. This is a file sent as multi-part (not a string)
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApiupdateFile
     */
    file?: HttpFile
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFile
     */
    fileName?: string
    /**
     * Is public
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApiupdateFile
     */
    isPublic?: boolean
    /**
     * File to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApiupdateFile
     */
    file2?: HttpFile
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFile
     */
    fileName2?: string
    /**
     * Is public
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApiupdateFile
     */
    isPublic2?: boolean
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileWithHttpInfo(param: FilesApiCreateFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.createFileWithHttpInfo(param.file, param.fileName, param.isPublic, param.fileAssociation, param.file2, param.fileName2, param.isPublic2, param.fileAssociation2, param.contactId, param.contactId2,  options).toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFile(param: FilesApiCreateFileRequest, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.createFile(param.file, param.fileName, param.isPublic, param.fileAssociation, param.file2, param.fileName2, param.isPublic2, param.fileAssociation2, param.contactId, param.contactId2,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileWithHttpInfo(param: FilesApiDeleteFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFileWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFile(param: FilesApiDeleteFileRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFile(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileWithHttpInfo(param: FilesApiGetFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.getFileWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFile(param: FilesApiGetFileRequest, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.getFile(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataWithHttpInfo(param: FilesApiGetFileDataRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getFileDataWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileData(param: FilesApiGetFileDataRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.getFileData(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param param the request object
     */
    public listFilesWithHttpInfo(param: FilesApiListFilesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListFilesResponse>> {
        return this.api.listFilesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param param the request object
     */
    public listFiles(param: FilesApiListFilesRequest = {}, options?: ConfigurationOptions): Promise<ListFilesResponse> {
        return this.api.listFiles(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param param the request object
     */
    public updateFileWithHttpInfo(param: FilesApiUpdateFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.updateFileWithHttpInfo(param.fileId, param.updateMask, param.file, param.fileName, param.isPublic, param.file2, param.fileName2, param.isPublic2,  options).toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param param the request object
     */
    public updateFile(param: FilesApiUpdateFileRequest, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.updateFile(param.fileId, param.updateMask, param.file, param.fileName, param.isPublic, param.file2, param.fileName2, param.isPublic2,  options).toPromise();
    }

}

import { ObservableFreeTrialDiscountsApi } from "./ObservableAPI";
import { FreeTrialDiscountsApiRequestFactory, FreeTrialDiscountsApiResponseProcessor} from "../apis/FreeTrialDiscountsApi";

export interface FreeTrialDiscountsApiCreateFreeTrialDiscountRequest {
    /**
     * 
     * @type CreateFreeTrialDiscountRequest
     * @memberof FreeTrialDiscountsApicreateFreeTrialDiscount
     */
    createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest
}

export interface FreeTrialDiscountsApiDeleteFreeTrialDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApideleteFreeTrialDiscount
     */
    discountId: string
}

export interface FreeTrialDiscountsApiGetFreeTrialDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApigetFreeTrialDiscount
     */
    discountId: string
}

export interface FreeTrialDiscountsApiListFreeTrialDiscountsRequest {
    /**
     * Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApilistFreeTrialDiscounts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApilistFreeTrialDiscounts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof FreeTrialDiscountsApilistFreeTrialDiscounts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApilistFreeTrialDiscounts
     */
    pageToken?: string
}

export interface FreeTrialDiscountsApiUpdateFreeTrialDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountsApiupdateFreeTrialDiscount
     */
    discountId: string
    /**
     * 
     * @type UpdateFreeTrialDiscountRequest
     * @memberof FreeTrialDiscountsApiupdateFreeTrialDiscount
     */
    updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof FreeTrialDiscountsApiupdateFreeTrialDiscount
     */
    updateMask?: any
}

export class ObjectFreeTrialDiscountsApi {
    private api: ObservableFreeTrialDiscountsApi

    public constructor(configuration: Configuration, requestFactory?: FreeTrialDiscountsApiRequestFactory, responseProcessor?: FreeTrialDiscountsApiResponseProcessor) {
        this.api = new ObservableFreeTrialDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param param the request object
     */
    public createFreeTrialDiscountWithHttpInfo(param: FreeTrialDiscountsApiCreateFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        return this.api.createFreeTrialDiscountWithHttpInfo(param.createFreeTrialDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param param the request object
     */
    public createFreeTrialDiscount(param: FreeTrialDiscountsApiCreateFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<FreeTrialDiscount> {
        return this.api.createFreeTrialDiscount(param.createFreeTrialDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param param the request object
     */
    public deleteFreeTrialDiscountWithHttpInfo(param: FreeTrialDiscountsApiDeleteFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFreeTrialDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param param the request object
     */
    public deleteFreeTrialDiscount(param: FreeTrialDiscountsApiDeleteFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFreeTrialDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param param the request object
     */
    public getFreeTrialDiscountWithHttpInfo(param: FreeTrialDiscountsApiGetFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        return this.api.getFreeTrialDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param param the request object
     */
    public getFreeTrialDiscount(param: FreeTrialDiscountsApiGetFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<FreeTrialDiscount> {
        return this.api.getFreeTrialDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param param the request object
     */
    public listFreeTrialDiscountsWithHttpInfo(param: FreeTrialDiscountsApiListFreeTrialDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListFreeTrialDiscountsResponse>> {
        return this.api.listFreeTrialDiscountsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param param the request object
     */
    public listFreeTrialDiscounts(param: FreeTrialDiscountsApiListFreeTrialDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ListFreeTrialDiscountsResponse> {
        return this.api.listFreeTrialDiscounts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param param the request object
     */
    public updateFreeTrialDiscountWithHttpInfo(param: FreeTrialDiscountsApiUpdateFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        return this.api.updateFreeTrialDiscountWithHttpInfo(param.discountId, param.updateFreeTrialDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param param the request object
     */
    public updateFreeTrialDiscount(param: FreeTrialDiscountsApiUpdateFreeTrialDiscountRequest, options?: ConfigurationOptions): Promise<FreeTrialDiscount> {
        return this.api.updateFreeTrialDiscount(param.discountId, param.updateFreeTrialDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableIntegrationsApi } from "./ObservableAPI";
import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor} from "../apis/IntegrationsApi";

export interface IntegrationsApiAddIntegrationsWordPressOptInRequest {
    /**
     * 
     * @type CreateIntegrationsWordPressOptInOption
     * @memberof IntegrationsApiaddIntegrationsWordPressOptIn
     */
    createIntegrationsWordPressOptInOption: CreateIntegrationsWordPressOptInOption
}

export interface IntegrationsApiDeleteIntegrationsWordPressOptInRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof IntegrationsApideleteIntegrationsWordPressOptIn
     */
    optionKey: string
}

export class ObjectIntegrationsApi {
    private api: ObservableIntegrationsApi

    public constructor(configuration: Configuration, requestFactory?: IntegrationsApiRequestFactory, responseProcessor?: IntegrationsApiResponseProcessor) {
        this.api = new ObservableIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param param the request object
     */
    public addIntegrationsWordPressOptInWithHttpInfo(param: IntegrationsApiAddIntegrationsWordPressOptInRequest, options?: ConfigurationOptions): Promise<HttpInfo<WordPressOptInOption>> {
        return this.api.addIntegrationsWordPressOptInWithHttpInfo(param.createIntegrationsWordPressOptInOption,  options).toPromise();
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param param the request object
     */
    public addIntegrationsWordPressOptIn(param: IntegrationsApiAddIntegrationsWordPressOptInRequest, options?: ConfigurationOptions): Promise<WordPressOptInOption> {
        return this.api.addIntegrationsWordPressOptIn(param.createIntegrationsWordPressOptInOption,  options).toPromise();
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param param the request object
     */
    public deleteIntegrationsWordPressOptInWithHttpInfo(param: IntegrationsApiDeleteIntegrationsWordPressOptInRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteIntegrationsWordPressOptInWithHttpInfo(param.optionKey,  options).toPromise();
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param param the request object
     */
    public deleteIntegrationsWordPressOptIn(param: IntegrationsApiDeleteIntegrationsWordPressOptInRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteIntegrationsWordPressOptIn(param.optionKey,  options).toPromise();
    }

}

import { ObservableLeadScoreApi } from "./ObservableAPI";
import { LeadScoreApiRequestFactory, LeadScoreApiResponseProcessor} from "../apis/LeadScoreApi";

export interface LeadScoreApiGetLeadScoreDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LeadScoreApigetLeadScoreDetails
     */
    contactId: string
}

export class ObjectLeadScoreApi {
    private api: ObservableLeadScoreApi

    public constructor(configuration: Configuration, requestFactory?: LeadScoreApiRequestFactory, responseProcessor?: LeadScoreApiResponseProcessor) {
        this.api = new ObservableLeadScoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetailsWithHttpInfo(param: LeadScoreApiGetLeadScoreDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadScore>> {
        return this.api.getLeadScoreDetailsWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetails(param: LeadScoreApiGetLeadScoreDetailsRequest, options?: ConfigurationOptions): Promise<LeadScore> {
        return this.api.getLeadScoreDetails(param.contactId,  options).toPromise();
    }

}

import { ObservableLeadSourceCategoriesApi } from "./ObservableAPI";
import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";

export interface LeadSourceCategoriesApiCreateLeadSourceCategoryRequest {
    /**
     * 
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof LeadSourceCategoriesApicreateLeadSourceCategory
     */
    createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest
}

export interface LeadSourceCategoriesApiDeleteLeadSourceCategoryRequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApideleteLeadSourceCategory
     */
    leadSourceCategoryId: string
}

export interface LeadSourceCategoriesApiGetLeadSourceCategoryRequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApigetLeadSourceCategory
     */
    leadSourceCategoryId: string
}

export interface LeadSourceCategoriesApiListLeadSourceCategoriesRequest {
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistLeadSourceCategories
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistLeadSourceCategories
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceCategoriesApilistLeadSourceCategories
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistLeadSourceCategories
     */
    pageToken?: string
}

export interface LeadSourceCategoriesApiUpdateLeadSourceCategoryRequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategory
     */
    leadSourceCategoryId: string
    /**
     * 
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategory
     */
    createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategory
     */
    updateMask?: any
}

export class ObjectLeadSourceCategoriesApi {
    private api: ObservableLeadSourceCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourceCategoriesApiRequestFactory, responseProcessor?: LeadSourceCategoriesApiResponseProcessor) {
        this.api = new ObservableLeadSourceCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryWithHttpInfo(param: LeadSourceCategoriesApiCreateLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.createLeadSourceCategoryWithHttpInfo(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategory(param: LeadSourceCategoriesApiCreateLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.createLeadSourceCategory(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryWithHttpInfo(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceCategoryWithHttpInfo(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategory(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceCategory(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryWithHttpInfo(param: LeadSourceCategoriesApiGetLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.getLeadSourceCategoryWithHttpInfo(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategory(param: LeadSourceCategoriesApiGetLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.getLeadSourceCategory(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param param the request object
     */
    public listLeadSourceCategoriesWithHttpInfo(param: LeadSourceCategoriesApiListLeadSourceCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceCategoriesResponse>> {
        return this.api.listLeadSourceCategoriesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param param the request object
     */
    public listLeadSourceCategories(param: LeadSourceCategoriesApiListLeadSourceCategoriesRequest = {}, options?: ConfigurationOptions): Promise<ListLeadSourceCategoriesResponse> {
        return this.api.listLeadSourceCategories(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param param the request object
     */
    public updateLeadSourceCategoryWithHttpInfo(param: LeadSourceCategoriesApiUpdateLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.updateLeadSourceCategoryWithHttpInfo(param.leadSourceCategoryId, param.createUpdateLeadSourceCategoryRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param param the request object
     */
    public updateLeadSourceCategory(param: LeadSourceCategoriesApiUpdateLeadSourceCategoryRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.updateLeadSourceCategory(param.leadSourceCategoryId, param.createUpdateLeadSourceCategoryRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourceExpensesApi } from "./ObservableAPI";
import { LeadSourceExpensesApiRequestFactory, LeadSourceExpensesApiResponseProcessor} from "../apis/LeadSourceExpensesApi";

export interface LeadSourceExpensesApiCreateLeadSourceExpenseRequest {
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApicreateLeadSourceExpense
     */
    leadSourceId: string
    /**
     * 
     * @type CreateLeadSourceExpenseRequest
     * @memberof LeadSourceExpensesApicreateLeadSourceExpense
     */
    createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest
}

export interface LeadSourceExpensesApiDeleteLeadSourceExpenseRequest {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApideleteLeadSourceExpense
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApideleteLeadSourceExpense
     */
    leadSourceId: string
}

export interface LeadSourceExpensesApiGetLeadSourceExpenseRequest {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApigetLeadSourceExpense
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApigetLeadSourceExpense
     */
    leadSourceId: string
}

export interface LeadSourceExpensesApiListLeadSourceExpensesRequest {
    /**
     * The ID of the lead source this expense belongs to. Use \&#39;-\&#39; as a wildcard (e.g. /v2/leadSources/-/expenses).
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpenses
     */
    leadSourceId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpenses
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpenses
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceExpensesApilistLeadSourceExpenses
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpenses
     */
    pageToken?: string
}

export interface LeadSourceExpensesApiUpdateLeadSourceExpenseRequest {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpense
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpense
     */
    leadSourceId: string
    /**
     * 
     * @type UpdateLeadSourceExpenseRequest
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpense
     */
    updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpense
     */
    updateMask?: any
}

export class ObjectLeadSourceExpensesApi {
    private api: ObservableLeadSourceExpensesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourceExpensesApiRequestFactory, responseProcessor?: LeadSourceExpensesApiResponseProcessor) {
        this.api = new ObservableLeadSourceExpensesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param param the request object
     */
    public createLeadSourceExpenseWithHttpInfo(param: LeadSourceExpensesApiCreateLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.createLeadSourceExpenseWithHttpInfo(param.leadSourceId, param.createLeadSourceExpenseRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param param the request object
     */
    public createLeadSourceExpense(param: LeadSourceExpensesApiCreateLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.createLeadSourceExpense(param.leadSourceId, param.createLeadSourceExpenseRequest,  options).toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param param the request object
     */
    public deleteLeadSourceExpenseWithHttpInfo(param: LeadSourceExpensesApiDeleteLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceExpenseWithHttpInfo(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param param the request object
     */
    public deleteLeadSourceExpense(param: LeadSourceExpensesApiDeleteLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceExpense(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param param the request object
     */
    public getLeadSourceExpenseWithHttpInfo(param: LeadSourceExpensesApiGetLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.getLeadSourceExpenseWithHttpInfo(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param param the request object
     */
    public getLeadSourceExpense(param: LeadSourceExpensesApiGetLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.getLeadSourceExpense(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param param the request object
     */
    public listLeadSourceExpensesWithHttpInfo(param: LeadSourceExpensesApiListLeadSourceExpensesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        return this.api.listLeadSourceExpensesWithHttpInfo(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param param the request object
     */
    public listLeadSourceExpenses(param: LeadSourceExpensesApiListLeadSourceExpensesRequest, options?: ConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        return this.api.listLeadSourceExpenses(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param param the request object
     */
    public updateLeadSourceExpenseWithHttpInfo(param: LeadSourceExpensesApiUpdateLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.updateLeadSourceExpenseWithHttpInfo(param.leadSourceExpenseId, param.leadSourceId, param.updateLeadSourceExpenseRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param param the request object
     */
    public updateLeadSourceExpense(param: LeadSourceExpensesApiUpdateLeadSourceExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.updateLeadSourceExpense(param.leadSourceExpenseId, param.leadSourceId, param.updateLeadSourceExpenseRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourceRecurringExpensesApi } from "./ObservableAPI";
import { LeadSourceRecurringExpensesApiRequestFactory, LeadSourceRecurringExpensesApiResponseProcessor} from "../apis/LeadSourceRecurringExpensesApi";

export interface LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApicreateLeadSourceRecurringExpense
     */
    leadSourceId: string
    /**
     * 
     * @type CreateLeadSourceRecurringExpenseRequest
     * @memberof LeadSourceRecurringExpensesApicreateLeadSourceRecurringExpense
     */
    createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest
}

export interface LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApideleteLeadSourceRecurringExpense
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApideleteLeadSourceRecurringExpense
     */
    leadSourceRecurringExpenseId: string
}

export interface LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApigetLeadSourceRecurringExpense
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApigetLeadSourceRecurringExpense
     */
    leadSourceRecurringExpenseId: string
}

export interface LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    leadSourceRecurringExpenseId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpense
     */
    pageToken?: string
}

export interface LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpenses
     */
    leadSourceId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpenses
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpenses
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpenses
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpenses
     */
    pageToken?: string
}

export interface LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpense
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpense
     */
    leadSourceRecurringExpenseId: string
    /**
     * 
     * @type LeadSourceRecurringExpenseUpdateRequest
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpense
     */
    leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpense
     */
    updateMask?: any
}

export class ObjectLeadSourceRecurringExpensesApi {
    private api: ObservableLeadSourceRecurringExpensesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourceRecurringExpensesApiRequestFactory, responseProcessor?: LeadSourceRecurringExpensesApiResponseProcessor) {
        this.api = new ObservableLeadSourceRecurringExpensesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param param the request object
     */
    public createLeadSourceRecurringExpenseWithHttpInfo(param: LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.createLeadSourceRecurringExpenseWithHttpInfo(param.leadSourceId, param.createLeadSourceRecurringExpenseRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param param the request object
     */
    public createLeadSourceRecurringExpense(param: LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.createLeadSourceRecurringExpense(param.leadSourceId, param.createLeadSourceRecurringExpenseRequest,  options).toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param param the request object
     */
    public deleteLeadSourceRecurringExpenseWithHttpInfo(param: LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceRecurringExpenseWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param param the request object
     */
    public deleteLeadSourceRecurringExpense(param: LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceRecurringExpense(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param param the request object
     */
    public getLeadSourceRecurringExpenseWithHttpInfo(param: LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.getLeadSourceRecurringExpenseWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param param the request object
     */
    public getLeadSourceRecurringExpense(param: LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.getLeadSourceRecurringExpense(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param param the request object
     */
    public listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(param: LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        return this.api.listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param param the request object
     */
    public listExpensesIncurredFromLeadSourceRecurringExpense(param: LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        return this.api.listExpensesIncurredFromLeadSourceRecurringExpense(param.leadSourceId, param.leadSourceRecurringExpenseId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param param the request object
     */
    public listLeadSourceRecurringExpensesWithHttpInfo(param: LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        return this.api.listLeadSourceRecurringExpensesWithHttpInfo(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param param the request object
     */
    public listLeadSourceRecurringExpenses(param: LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesRequest, options?: ConfigurationOptions): Promise<ListLeadSourceRecurringExpensesResponse> {
        return this.api.listLeadSourceRecurringExpenses(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param param the request object
     */
    public updateLeadSourceRecurringExpenseWithHttpInfo(param: LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.updateLeadSourceRecurringExpenseWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId, param.leadSourceRecurringExpenseUpdateRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param param the request object
     */
    public updateLeadSourceRecurringExpense(param: LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.updateLeadSourceRecurringExpense(param.leadSourceId, param.leadSourceRecurringExpenseId, param.leadSourceRecurringExpenseUpdateRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourcesApi } from "./ObservableAPI";
import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";

export interface LeadSourcesApiCreateLeadSourceRequest {
    /**
     * 
     * @type CreateLeadSourceRequest
     * @memberof LeadSourcesApicreateLeadSource
     */
    createLeadSourceRequest: CreateLeadSourceRequest
}

export interface LeadSourcesApiDeleteLeadSourceRequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApideleteLeadSource
     */
    leadSourceId: string
}

export interface LeadSourcesApiGetLeadSourceRequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApigetLeadSource
     */
    leadSourceId: string
}

export interface LeadSourcesApiListLeadSourcesRequest {
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSources
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSources
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourcesApilistLeadSources
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSources
     */
    pageToken?: string
}

export interface LeadSourcesApiUpdateLeadSourceRequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApiupdateLeadSource
     */
    leadSourceId: string
    /**
     * 
     * @type CreateLeadSourceRequest
     * @memberof LeadSourcesApiupdateLeadSource
     */
    createLeadSourceRequest: CreateLeadSourceRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof LeadSourcesApiupdateLeadSource
     */
    updateMask?: any
}

export class ObjectLeadSourcesApi {
    private api: ObservableLeadSourcesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourcesApiRequestFactory, responseProcessor?: LeadSourcesApiResponseProcessor) {
        this.api = new ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceWithHttpInfo(param: LeadSourcesApiCreateLeadSourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.createLeadSourceWithHttpInfo(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSource(param: LeadSourcesApiCreateLeadSourceRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.createLeadSource(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param param the request object
     */
    public deleteLeadSourceWithHttpInfo(param: LeadSourcesApiDeleteLeadSourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceWithHttpInfo(param.leadSourceId,  options).toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param param the request object
     */
    public deleteLeadSource(param: LeadSourcesApiDeleteLeadSourceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSource(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param param the request object
     */
    public getLeadSourceWithHttpInfo(param: LeadSourcesApiGetLeadSourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.getLeadSourceWithHttpInfo(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param param the request object
     */
    public getLeadSource(param: LeadSourcesApiGetLeadSourceRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.getLeadSource(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesWithHttpInfo(param: LeadSourcesApiListLeadSourcesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourcesResponse>> {
        return this.api.listLeadSourcesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSources(param: LeadSourcesApiListLeadSourcesRequest = {}, options?: ConfigurationOptions): Promise<ListLeadSourcesResponse> {
        return this.api.listLeadSources(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param param the request object
     */
    public updateLeadSourceWithHttpInfo(param: LeadSourcesApiUpdateLeadSourceRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.updateLeadSourceWithHttpInfo(param.leadSourceId, param.createLeadSourceRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param param the request object
     */
    public updateLeadSource(param: LeadSourcesApiUpdateLeadSourceRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.updateLeadSource(param.leadSourceId, param.createLeadSourceRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLocaleApi } from "./ObservableAPI";
import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";

export interface LocaleApiGetCountryByCodeRequest {
    /**
     * The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * Defaults to: undefined
     * @type string
     * @memberof LocaleApigetCountryByCode
     */
    countryCode: string
}

export interface LocaleApiGetProvinceByCodeRequest {
    /**
     * The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * Defaults to: undefined
     * @type string
     * @memberof LocaleApigetProvinceByCode
     */
    countryCode: string
    /**
     * The ISO 3166-2 code or name of the province to be retrieved
     * Defaults to: undefined
     * @type string
     * @memberof LocaleApigetProvinceByCode
     */
    provinceCode: string
}

export interface LocaleApiListCountriesRequest {
}

export interface LocaleApiListProvincesForCountryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LocaleApilistProvincesForCountry
     */
    countryCode: string
}

export class ObjectLocaleApi {
    private api: ObservableLocaleApi

    public constructor(configuration: Configuration, requestFactory?: LocaleApiRequestFactory, responseProcessor?: LocaleApiResponseProcessor) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param param the request object
     */
    public getCountryByCodeWithHttpInfo(param: LocaleApiGetCountryByCodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<Country>> {
        return this.api.getCountryByCodeWithHttpInfo(param.countryCode,  options).toPromise();
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param param the request object
     */
    public getCountryByCode(param: LocaleApiGetCountryByCodeRequest, options?: ConfigurationOptions): Promise<Country> {
        return this.api.getCountryByCode(param.countryCode,  options).toPromise();
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param param the request object
     */
    public getProvinceByCodeWithHttpInfo(param: LocaleApiGetProvinceByCodeRequest, options?: ConfigurationOptions): Promise<HttpInfo<Province>> {
        return this.api.getProvinceByCodeWithHttpInfo(param.countryCode, param.provinceCode,  options).toPromise();
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param param the request object
     */
    public getProvinceByCode(param: LocaleApiGetProvinceByCodeRequest, options?: ConfigurationOptions): Promise<Province> {
        return this.api.getProvinceByCode(param.countryCode, param.provinceCode,  options).toPromise();
    }

    /**
     * Retrieves a list of countries
     * List Countries
     * @param param the request object
     */
    public listCountriesWithHttpInfo(param: LocaleApiListCountriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCountriesResponse>> {
        return this.api.listCountriesWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of countries
     * List Countries
     * @param param the request object
     */
    public listCountries(param: LocaleApiListCountriesRequest = {}, options?: ConfigurationOptions): Promise<ListCountriesResponse> {
        return this.api.listCountries( options).toPromise();
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountryWithHttpInfo(param: LocaleApiListProvincesForCountryRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListProvincesResponse>> {
        return this.api.listProvincesForCountryWithHttpInfo(param.countryCode,  options).toPromise();
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountry(param: LocaleApiListProvincesForCountryRequest, options?: ConfigurationOptions): Promise<ListProvincesResponse> {
        return this.api.listProvincesForCountry(param.countryCode,  options).toPromise();
    }

}

import { ObservableMerchantsApi } from "./ObservableAPI";
import { MerchantsApiRequestFactory, MerchantsApiResponseProcessor} from "../apis/MerchantsApi";

export interface MerchantsApiListMerchantsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof MerchantsApilistMerchants
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof MerchantsApilistMerchants
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof MerchantsApilistMerchants
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof MerchantsApilistMerchants
     */
    pageToken?: string
}

export class ObjectMerchantsApi {
    private api: ObservableMerchantsApi

    public constructor(configuration: Configuration, requestFactory?: MerchantsApiRequestFactory, responseProcessor?: MerchantsApiResponseProcessor) {
        this.api = new ObservableMerchantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchantsWithHttpInfo(param: MerchantsApiListMerchantsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListMerchantsResponse>> {
        return this.api.listMerchantsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchants(param: MerchantsApiListMerchantsRequest = {}, options?: ConfigurationOptions): Promise<ListMerchantsResponse> {
        return this.api.listMerchants(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableNoteApi } from "./ObservableAPI";
import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";

export interface NoteApiCreateNoteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApicreateNote
     */
    contactId: string
    /**
     * 
     * @type CreateNoteRequest
     * @memberof NoteApicreateNote
     */
    createNoteRequest: CreateNoteRequest
}

export interface NoteApiCreateNoteCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof NoteApicreateNoteCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface NoteApiDeleteNoteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNote
     */
    contactId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNote
     */
    noteId: string
}

export interface NoteApiGetNoteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNote
     */
    contactId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNote
     */
    noteId: string
}

export interface NoteApiListNoteTemplatesRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplates
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplates
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof NoteApilistNoteTemplates
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplates
     */
    pageToken?: string
}

export interface NoteApiListNotesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotes
     */
    contactId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotes
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotes
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof NoteApilistNotes
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotes
     */
    pageToken?: string
}

export interface NoteApiRetrieveNoteModelRequest {
}

export interface NoteApiUpdateNoteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNote
     */
    contactId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNote
     */
    noteId: string
    /**
     * 
     * @type UpdateNoteRequest
     * @memberof NoteApiupdateNote
     */
    updateNoteRequest: UpdateNoteRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof NoteApiupdateNote
     */
    updateMask?: any
}

export interface NoteApiUpdateNotesCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNotesCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof NoteApiupdateNotesCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof NoteApiupdateNotesCustomField
     */
    updateMask?: any
}

export class ObjectNoteApi {
    private api: ObservableNoteApi

    public constructor(configuration: Configuration, requestFactory?: NoteApiRequestFactory, responseProcessor?: NoteApiResponseProcessor) {
        this.api = new ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNoteWithHttpInfo(param: NoteApiCreateNoteRequest, options?: ConfigurationOptions): Promise<HttpInfo<Note>> {
        return this.api.createNoteWithHttpInfo(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNote(param: NoteApiCreateNoteRequest, options?: ConfigurationOptions): Promise<Note> {
        return this.api.createNote(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomFieldWithHttpInfo(param: NoteApiCreateNoteCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createNoteCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomField(param: NoteApiCreateNoteCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createNoteCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteWithHttpInfo(param: NoteApiDeleteNoteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNoteWithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNote(param: NoteApiDeleteNoteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNote(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteWithHttpInfo(param: NoteApiGetNoteRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetNoteResponse>> {
        return this.api.getNoteWithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNote(param: NoteApiGetNoteRequest, options?: ConfigurationOptions): Promise<GetNoteResponse> {
        return this.api.getNote(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplatesWithHttpInfo(param: NoteApiListNoteTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListNoteTemplateResponse>> {
        return this.api.listNoteTemplatesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplates(param: NoteApiListNoteTemplatesRequest = {}, options?: ConfigurationOptions): Promise<ListNoteTemplateResponse> {
        return this.api.listNoteTemplates(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesWithHttpInfo(param: NoteApiListNotesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListNotesResponse>> {
        return this.api.listNotesWithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotes(param: NoteApiListNotesRequest, options?: ConfigurationOptions): Promise<ListNotesResponse> {
        return this.api.listNotes(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModelWithHttpInfo(param: NoteApiRetrieveNoteModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveNoteModelWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModel(param: NoteApiRetrieveNoteModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveNoteModel( options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteWithHttpInfo(param: NoteApiUpdateNoteRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateNoteResponse>> {
        return this.api.updateNoteWithHttpInfo(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNote(param: NoteApiUpdateNoteRequest, options?: ConfigurationOptions): Promise<UpdateNoteResponse> {
        return this.api.updateNote(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomFieldWithHttpInfo(param: NoteApiUpdateNotesCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateNotesCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomField(param: NoteApiUpdateNotesCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateNotesCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOpportunityApi } from "./ObservableAPI";
import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";

export interface OpportunityApiCreateOpportunityRequest {
    /**
     * 
     * @type CreateOpportunityRequest
     * @memberof OpportunityApicreateOpportunity
     */
    createOpportunityRequest: CreateOpportunityRequest
}

export interface OpportunityApiCreateOpportunityCustomFieldsRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof OpportunityApicreateOpportunityCustomFields
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface OpportunityApiCreateOpportunityStageRequest {
    /**
     * 
     * @type CreateOpportunityStageRequest
     * @memberof OpportunityApicreateOpportunityStage
     */
    createOpportunityStageRequest: CreateOpportunityStageRequest
}

export interface OpportunityApiDeleteOpportunityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApideleteOpportunity
     */
    opportunityId: string
}

export interface OpportunityApiDeleteOpportunityStageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApideleteOpportunityStage
     */
    stageId: string
}

export interface OpportunityApiGetOpportunityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApigetOpportunity
     */
    opportunityId: string
}

export interface OpportunityApiGetOpportunityStageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApigetOpportunityStage
     */
    stageId: string
}

export interface OpportunityApiListOpportunitiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Set&lt;string&gt;
     * @memberof OpportunityApilistOpportunities
     */
    fields?: Set<string>
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunities
     */
    filter?: string
    /**
     * Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunities
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunityApilistOpportunities
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunities
     */
    pageToken?: string
}

export interface OpportunityApiListOpportunityStagesRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStages
     */
    filter?: string
    /**
     * Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStages
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunityApilistOpportunityStages
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStages
     */
    pageToken?: string
}

export interface OpportunityApiUpdateOpportunityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunity
     */
    opportunityId: string
    /**
     * 
     * @type UpdateOpportunityRequestV2
     * @memberof OpportunityApiupdateOpportunity
     */
    updateOpportunityRequestV2: UpdateOpportunityRequestV2
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OpportunityApiupdateOpportunity
     */
    updateMask?: any
}

export interface OpportunityApiUpdateOpportunityCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunityCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof OpportunityApiupdateOpportunityCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OpportunityApiupdateOpportunityCustomField
     */
    updateMask?: any
}

export interface OpportunityApiUpdateOpportunityStageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunityStage
     */
    stageId: string
    /**
     * 
     * @type UpdateOpportunityStageRequest
     * @memberof OpportunityApiupdateOpportunityStage
     */
    updateOpportunityStageRequest: UpdateOpportunityStageRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OpportunityApiupdateOpportunityStage
     */
    updateMask?: any
}

export class ObjectOpportunityApi {
    private api: ObservableOpportunityApi

    public constructor(configuration: Configuration, requestFactory?: OpportunityApiRequestFactory, responseProcessor?: OpportunityApiResponseProcessor) {
        this.api = new ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunityWithHttpInfo(param: OpportunityApiCreateOpportunityRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.createOpportunityWithHttpInfo(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunity(param: OpportunityApiCreateOpportunityRequest, options?: ConfigurationOptions): Promise<RestV2Opportunity> {
        return this.api.createOpportunity(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFieldsWithHttpInfo(param: OpportunityApiCreateOpportunityCustomFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOpportunityCustomFieldsWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFields(param: OpportunityApiCreateOpportunityCustomFieldsRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createOpportunityCustomFields(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStageWithHttpInfo(param: OpportunityApiCreateOpportunityStageRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.createOpportunityStageWithHttpInfo(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStage(param: OpportunityApiCreateOpportunityStageRequest, options?: ConfigurationOptions): Promise<RestOpportunityStage> {
        return this.api.createOpportunityStage(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunityWithHttpInfo(param: OpportunityApiDeleteOpportunityRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityWithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunity(param: OpportunityApiDeleteOpportunityRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOpportunity(param.opportunityId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStageWithHttpInfo(param: OpportunityApiDeleteOpportunityStageRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityStageWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStage(param: OpportunityApiDeleteOpportunityStageRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOpportunityStage(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunityWithHttpInfo(param: OpportunityApiGetOpportunityRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.getOpportunityWithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunity(param: OpportunityApiGetOpportunityRequest, options?: ConfigurationOptions): Promise<RestV2Opportunity> {
        return this.api.getOpportunity(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStageWithHttpInfo(param: OpportunityApiGetOpportunityStageRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.getOpportunityStageWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStage(param: OpportunityApiGetOpportunityStageRequest, options?: ConfigurationOptions): Promise<RestOpportunityStage> {
        return this.api.getOpportunityStage(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunitiesWithHttpInfo(param: OpportunityApiListOpportunitiesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListOpportunitiesResponse>> {
        return this.api.listOpportunitiesWithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunities(param: OpportunityApiListOpportunitiesRequest = {}, options?: ConfigurationOptions): Promise<ListOpportunitiesResponse> {
        return this.api.listOpportunities(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStagesWithHttpInfo(param: OpportunityApiListOpportunityStagesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        return this.api.listOpportunityStagesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStages(param: OpportunityApiListOpportunityStagesRequest = {}, options?: ConfigurationOptions): Promise<ListOpportunityStagesResponse> {
        return this.api.listOpportunityStages(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunityWithHttpInfo(param: OpportunityApiUpdateOpportunityRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.updateOpportunityWithHttpInfo(param.opportunityId, param.updateOpportunityRequestV2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunity(param: OpportunityApiUpdateOpportunityRequest, options?: ConfigurationOptions): Promise<RestV2Opportunity> {
        return this.api.updateOpportunity(param.opportunityId, param.updateOpportunityRequestV2, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomFieldWithHttpInfo(param: OpportunityApiUpdateOpportunityCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOpportunityCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomField(param: OpportunityApiUpdateOpportunityCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateOpportunityCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStageWithHttpInfo(param: OpportunityApiUpdateOpportunityStageRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.updateOpportunityStageWithHttpInfo(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStage(param: OpportunityApiUpdateOpportunityStageRequest, options?: ConfigurationOptions): Promise<RestOpportunityStage> {
        return this.api.updateOpportunityStage(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOrderTotalDiscountsApi } from "./ObservableAPI";
import { OrderTotalDiscountsApiRequestFactory, OrderTotalDiscountsApiResponseProcessor} from "../apis/OrderTotalDiscountsApi";

export interface OrderTotalDiscountsApiCreateOrderTotalDiscountRequest {
    /**
     * 
     * @type CreateOrderTotalDiscountRequest
     * @memberof OrderTotalDiscountsApicreateOrderTotalDiscount
     */
    createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest
}

export interface OrderTotalDiscountsApiDeleteOrderTotalDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApideleteOrderTotalDiscount
     */
    discountId: string
}

export interface OrderTotalDiscountsApiGetOrderTotalDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApigetOrderTotalDiscount
     */
    discountId: string
}

export interface OrderTotalDiscountsApiListOrderTotalDiscountsRequest {
    /**
     * Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApilistOrderTotalDiscounts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApilistOrderTotalDiscounts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrderTotalDiscountsApilistOrderTotalDiscounts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApilistOrderTotalDiscounts
     */
    pageToken?: string
}

export interface OrderTotalDiscountsApiUpdateOrderTotalDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountsApiupdateOrderTotalDiscount
     */
    discountId: string
    /**
     * 
     * @type UpdateOrderTotalDiscountRequest
     * @memberof OrderTotalDiscountsApiupdateOrderTotalDiscount
     */
    updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OrderTotalDiscountsApiupdateOrderTotalDiscount
     */
    updateMask?: any
}

export class ObjectOrderTotalDiscountsApi {
    private api: ObservableOrderTotalDiscountsApi

    public constructor(configuration: Configuration, requestFactory?: OrderTotalDiscountsApiRequestFactory, responseProcessor?: OrderTotalDiscountsApiResponseProcessor) {
        this.api = new ObservableOrderTotalDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscountWithHttpInfo(param: OrderTotalDiscountsApiCreateOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.createOrderTotalDiscountWithHttpInfo(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscount(param: OrderTotalDiscountsApiCreateOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<OrderTotalDiscount> {
        return this.api.createOrderTotalDiscount(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscountWithHttpInfo(param: OrderTotalDiscountsApiDeleteOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOrderTotalDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscount(param: OrderTotalDiscountsApiDeleteOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOrderTotalDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscountWithHttpInfo(param: OrderTotalDiscountsApiGetOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.getOrderTotalDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscount(param: OrderTotalDiscountsApiGetOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<OrderTotalDiscount> {
        return this.api.getOrderTotalDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscountsWithHttpInfo(param: OrderTotalDiscountsApiListOrderTotalDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListOrderTotalDiscountsResponse>> {
        return this.api.listOrderTotalDiscountsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscounts(param: OrderTotalDiscountsApiListOrderTotalDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ListOrderTotalDiscountsResponse> {
        return this.api.listOrderTotalDiscounts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscountWithHttpInfo(param: OrderTotalDiscountsApiUpdateOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.updateOrderTotalDiscountWithHttpInfo(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscount(param: OrderTotalDiscountsApiUpdateOrderTotalDiscountRequest, options?: ConfigurationOptions): Promise<OrderTotalDiscount> {
        return this.api.updateOrderTotalDiscount(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOrdersApi } from "./ObservableAPI";
import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";

export interface OrdersApiApplyCommissionOnOrderItemsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiapplyCommissionOnOrderItems
     */
    orderId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiapplyCommissionOnOrderItems
     */
    orderItemId: string
    /**
     * 
     * @type ApplyCommissionRequest
     * @memberof OrdersApiapplyCommissionOnOrderItems
     */
    applyCommissionRequest: ApplyCommissionRequest
}

export interface OrdersApiApplyTaxRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiapplyTax
     */
    orderId: string
}

export interface OrdersApiAttachFileToOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiattachFileToOrder
     */
    orderId: string
    /**
     * 
     * @type FileOperationRequest
     * @memberof OrdersApiattachFileToOrder
     */
    fileOperationRequest: FileOperationRequest
}

export interface OrdersApiCreateOrderRequest {
    /**
     * 
     * @type RestCreateOrderRequest
     * @memberof OrdersApicreateOrder
     */
    restCreateOrderRequest: RestCreateOrderRequest
}

export interface OrdersApiCreateOrderCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof OrdersApicreateOrderCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface OrdersApiCreateOrderItemRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApicreateOrderItem
     */
    orderId: string
    /**
     * 
     * @type CreateOrderItemRequest
     * @memberof OrdersApicreateOrderItem
     */
    createOrderItemRequest: CreateOrderItemRequest
}

export interface OrdersApiCreatePaymentForAnOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApicreatePaymentForAnOrder
     */
    orderId: string
    /**
     * 
     * @type RestCreatePaymentRequest
     * @memberof OrdersApicreatePaymentForAnOrder
     */
    restCreatePaymentRequest: RestCreatePaymentRequest
}

export interface OrdersApiDeleteOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrder
     */
    orderId: string
}

export interface OrdersApiDeleteOrderCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrderCustomField
     */
    customFieldId: string
}

export interface OrdersApiDeleteOrderItemRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrderItem
     */
    orderId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrderItem
     */
    orderItemId: string
}

export interface OrdersApiDetachFileFromOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApidetachFileFromOrder
     */
    orderId: string
    /**
     * 
     * @type FileOperationRequest
     * @memberof OrdersApidetachFileFromOrder
     */
    fileOperationRequest: FileOperationRequest
}

export interface OrdersApiGetOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApigetOrder
     */
    orderId: string
}

export interface OrdersApiListOrderPaymentsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPayments
     */
    orderId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPayments
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPayments
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrderPayments
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPayments
     */
    pageToken?: string
}

export interface OrdersApiListOrdersRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_locality&#x60; - (String) &#x60;shipping_region_code&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_locality%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region_code%3D%3DIN-MH&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DIND&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrders
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrders
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrders
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrders
     */
    pageToken?: string
}

export interface OrdersApiRetrieveOrderCustomFieldModelRequest {
}

export interface OrdersApiUpdateOrderRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrder
     */
    orderId: string
    /**
     * 
     * @type UpdateOrderRequest
     * @memberof OrdersApiupdateOrder
     */
    updateOrderRequest: UpdateOrderRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OrdersApiupdateOrder
     */
    updateMask?: any
}

export interface OrdersApiUpdateOrderCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrderCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof OrdersApiupdateOrderCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OrdersApiupdateOrderCustomField
     */
    updateMask?: any
}

export interface OrdersApiUpdateOrderItemRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrderItem
     */
    orderId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrderItem
     */
    orderItemId: string
    /**
     * 
     * @type UpdateOrderItemRequest
     * @memberof OrdersApiupdateOrderItem
     */
    updateOrderItemRequest: UpdateOrderItemRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof OrdersApiupdateOrderItem
     */
    updateMask?: any
}

export class ObjectOrdersApi {
    private api: ObservableOrdersApi

    public constructor(configuration: Configuration, requestFactory?: OrdersApiRequestFactory, responseProcessor?: OrdersApiResponseProcessor) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param param the request object
     */
    public applyCommissionOnOrderItemsWithHttpInfo(param: OrdersApiApplyCommissionOnOrderItemsRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        return this.api.applyCommissionOnOrderItemsWithHttpInfo(param.orderId, param.orderItemId, param.applyCommissionRequest,  options).toPromise();
    }

    /**
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param param the request object
     */
    public applyCommissionOnOrderItems(param: OrdersApiApplyCommissionOnOrderItemsRequest, options?: ConfigurationOptions): Promise<OrderItem> {
        return this.api.applyCommissionOnOrderItems(param.orderId, param.orderItemId, param.applyCommissionRequest,  options).toPromise();
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param param the request object
     */
    public applyTaxWithHttpInfo(param: OrdersApiApplyTaxRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.applyTaxWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param param the request object
     */
    public applyTax(param: OrdersApiApplyTaxRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.applyTax(param.orderId,  options).toPromise();
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param param the request object
     */
    public attachFileToOrderWithHttpInfo(param: OrdersApiAttachFileToOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.attachFileToOrderWithHttpInfo(param.orderId, param.fileOperationRequest,  options).toPromise();
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param param the request object
     */
    public attachFileToOrder(param: OrdersApiAttachFileToOrderRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.attachFileToOrder(param.orderId, param.fileOperationRequest,  options).toPromise();
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param param the request object
     */
    public createOrderWithHttpInfo(param: OrdersApiCreateOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.createOrderWithHttpInfo(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param param the request object
     */
    public createOrder(param: OrdersApiCreateOrderRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.createOrder(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param param the request object
     */
    public createOrderCustomFieldWithHttpInfo(param: OrdersApiCreateOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOrderCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param param the request object
     */
    public createOrderCustomField(param: OrdersApiCreateOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createOrderCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItemWithHttpInfo(param: OrdersApiCreateOrderItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        return this.api.createOrderItemWithHttpInfo(param.orderId, param.createOrderItemRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItem(param: OrdersApiCreateOrderItemRequest, options?: ConfigurationOptions): Promise<OrderItem> {
        return this.api.createOrderItem(param.orderId, param.createOrderItemRequest,  options).toPromise();
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param param the request object
     */
    public createPaymentForAnOrderWithHttpInfo(param: OrdersApiCreatePaymentForAnOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentResult>> {
        return this.api.createPaymentForAnOrderWithHttpInfo(param.orderId, param.restCreatePaymentRequest,  options).toPromise();
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param param the request object
     */
    public createPaymentForAnOrder(param: OrdersApiCreatePaymentForAnOrderRequest, options?: ConfigurationOptions): Promise<PaymentResult> {
        return this.api.createPaymentForAnOrder(param.orderId, param.restCreatePaymentRequest,  options).toPromise();
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrderWithHttpInfo(param: OrdersApiDeleteOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOrderWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrder(param: OrdersApiDeleteOrderRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOrder(param.orderId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param param the request object
     */
    public deleteOrderCustomFieldWithHttpInfo(param: OrdersApiDeleteOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOrderCustomFieldWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param param the request object
     */
    public deleteOrderCustomField(param: OrdersApiDeleteOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOrderCustomField(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param param the request object
     */
    public deleteOrderItemWithHttpInfo(param: OrdersApiDeleteOrderItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOrderItemWithHttpInfo(param.orderId, param.orderItemId,  options).toPromise();
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param param the request object
     */
    public deleteOrderItem(param: OrdersApiDeleteOrderItemRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOrderItem(param.orderId, param.orderItemId,  options).toPromise();
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param param the request object
     */
    public detachFileFromOrderWithHttpInfo(param: OrdersApiDetachFileFromOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.detachFileFromOrderWithHttpInfo(param.orderId, param.fileOperationRequest,  options).toPromise();
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param param the request object
     */
    public detachFileFromOrder(param: OrdersApiDetachFileFromOrderRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.detachFileFromOrder(param.orderId, param.fileOperationRequest,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrderWithHttpInfo(param: OrdersApiGetOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.getOrderWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrder(param: OrdersApiGetOrderRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.getOrder(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPaymentsWithHttpInfo(param: OrdersApiListOrderPaymentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListOrderPaymentsResponse>> {
        return this.api.listOrderPaymentsWithHttpInfo(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPayments(param: OrdersApiListOrderPaymentsRequest, options?: ConfigurationOptions): Promise<ListOrderPaymentsResponse> {
        return this.api.listOrderPayments(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrdersWithHttpInfo(param: OrdersApiListOrdersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListOrders>> {
        return this.api.listOrdersWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrders(param: OrdersApiListOrdersRequest = {}, options?: ConfigurationOptions): Promise<ListOrders> {
        return this.api.listOrders(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModelWithHttpInfo(param: OrdersApiRetrieveOrderCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveOrderCustomFieldModelWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModel(param: OrdersApiRetrieveOrderCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveOrderCustomFieldModel( options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public updateOrderWithHttpInfo(param: OrdersApiUpdateOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        return this.api.updateOrderWithHttpInfo(param.orderId, param.updateOrderRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public updateOrder(param: OrdersApiUpdateOrderRequest, options?: ConfigurationOptions): Promise<OrderV2> {
        return this.api.updateOrder(param.orderId, param.updateOrderRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param param the request object
     */
    public updateOrderCustomFieldWithHttpInfo(param: OrdersApiUpdateOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOrderCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param param the request object
     */
    public updateOrderCustomField(param: OrdersApiUpdateOrderCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateOrderCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param param the request object
     */
    public updateOrderItemWithHttpInfo(param: OrdersApiUpdateOrderItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        return this.api.updateOrderItemWithHttpInfo(param.orderId, param.orderItemId, param.updateOrderItemRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param param the request object
     */
    public updateOrderItem(param: OrdersApiUpdateOrderItemRequest, options?: ConfigurationOptions): Promise<OrderItem> {
        return this.api.updateOrderItem(param.orderId, param.orderItemId, param.updateOrderItemRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservablePaymentMethodConfigsApi } from "./ObservableAPI";
import { PaymentMethodConfigsApiRequestFactory, PaymentMethodConfigsApiResponseProcessor} from "../apis/PaymentMethodConfigsApi";

export interface PaymentMethodConfigsApiCreatePaymentMethodConfigRequest {
    /**
     * 
     * @type CreatePaymentMethodConfigRequest
     * @memberof PaymentMethodConfigsApicreatePaymentMethodConfig
     */
    createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest
}

export class ObjectPaymentMethodConfigsApi {
    private api: ObservablePaymentMethodConfigsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentMethodConfigsApiRequestFactory, responseProcessor?: PaymentMethodConfigsApiResponseProcessor) {
        this.api = new ObservablePaymentMethodConfigsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigWithHttpInfo(param: PaymentMethodConfigsApiCreatePaymentMethodConfigRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentMethodConfig>> {
        return this.api.createPaymentMethodConfigWithHttpInfo(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfig(param: PaymentMethodConfigsApiCreatePaymentMethodConfigRequest, options?: ConfigurationOptions): Promise<PaymentMethodConfig> {
        return this.api.createPaymentMethodConfig(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

}

import { ObservablePaymentMethodsApi } from "./ObservableAPI";
import { PaymentMethodsApiRequestFactory, PaymentMethodsApiResponseProcessor} from "../apis/PaymentMethodsApi";

export interface PaymentMethodsApiDeactivatePaymentMethodRequest {
    /**
     * ID of the contact to which the payment method belongs.
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApideactivatePaymentMethod
     */
    contactId: string
    /**
     * ID of the payment method to be deactivated.
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApideactivatePaymentMethod
     */
    paymentMethodId: string
}

export interface PaymentMethodsApiDeletePaymentMethodRequest {
    /**
     * ID of the contact to which the payment method belongs.
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApideletePaymentMethod
     */
    contactId: string
    /**
     * ID of the payment method to be deleted.
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApideletePaymentMethod
     */
    paymentMethodId: string
}

export interface PaymentMethodsApiListPaymentMethodsRequest {
    /**
     * ID of the contact to which the payment method belongs.
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApilistPaymentMethods
     */
    contactId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field. 
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApilistPaymentMethods
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApilistPaymentMethods
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PaymentMethodsApilistPaymentMethods
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PaymentMethodsApilistPaymentMethods
     */
    pageToken?: string
}

export class ObjectPaymentMethodsApi {
    private api: ObservablePaymentMethodsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentMethodsApiRequestFactory, responseProcessor?: PaymentMethodsApiResponseProcessor) {
        this.api = new ObservablePaymentMethodsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param param the request object
     */
    public deactivatePaymentMethodWithHttpInfo(param: PaymentMethodsApiDeactivatePaymentMethodRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deactivatePaymentMethodWithHttpInfo(param.contactId, param.paymentMethodId,  options).toPromise();
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param param the request object
     */
    public deactivatePaymentMethod(param: PaymentMethodsApiDeactivatePaymentMethodRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deactivatePaymentMethod(param.contactId, param.paymentMethodId,  options).toPromise();
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param param the request object
     */
    public deletePaymentMethodWithHttpInfo(param: PaymentMethodsApiDeletePaymentMethodRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deletePaymentMethodWithHttpInfo(param.contactId, param.paymentMethodId,  options).toPromise();
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param param the request object
     */
    public deletePaymentMethod(param: PaymentMethodsApiDeletePaymentMethodRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deletePaymentMethod(param.contactId, param.paymentMethodId,  options).toPromise();
    }

    /**
     * Retrieves a list of Payment Methods
     * List of Payment Methods
     * @param param the request object
     */
    public listPaymentMethodsWithHttpInfo(param: PaymentMethodsApiListPaymentMethodsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListPaymentMethodsResponse>> {
        return this.api.listPaymentMethodsWithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Payment Methods
     * List of Payment Methods
     * @param param the request object
     */
    public listPaymentMethods(param: PaymentMethodsApiListPaymentMethodsRequest, options?: ConfigurationOptions): Promise<ListPaymentMethodsResponse> {
        return this.api.listPaymentMethods(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableProductCategoriesApi } from "./ObservableAPI";
import { ProductCategoriesApiRequestFactory, ProductCategoriesApiResponseProcessor} from "../apis/ProductCategoriesApi";

export interface ProductCategoriesApiAssignProductsToCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApiassignProductsToCategory
     */
    categoryId: string
    /**
     * 
     * @type AssignProductsRequest
     * @memberof ProductCategoriesApiassignProductsToCategory
     */
    assignProductsRequest: AssignProductsRequest
}

export interface ProductCategoriesApiCreateImageFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApicreateImageFile
     */
    categoryId: string
    /**
     * File to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ProductCategoriesApicreateImageFile
     */
    file: HttpFile
}

export interface ProductCategoriesApiCreateProductCategoryRequest {
    /**
     * 
     * @type CreateProductCategoryRequest
     * @memberof ProductCategoriesApicreateProductCategory
     */
    createProductCategoryRequest: CreateProductCategoryRequest
}

export interface ProductCategoriesApiDeleteImageFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApideleteImageFile
     */
    categoryId: string
}

export interface ProductCategoriesApiDeleteProductCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApideleteProductCategory
     */
    categoryId: string
}

export interface ProductCategoriesApiGetProductCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApigetProductCategory
     */
    categoryId: string
}

export interface ProductCategoriesApiListProductCategoriesRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApilistProductCategories
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApilistProductCategories
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductCategoriesApilistProductCategories
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApilistProductCategories
     */
    pageToken?: string
}

export interface ProductCategoriesApiUpdateProductCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCategoriesApiupdateProductCategory
     */
    categoryId: string
    /**
     * 
     * @type UpdateProductCategoryRequest
     * @memberof ProductCategoriesApiupdateProductCategory
     */
    updateProductCategoryRequest: UpdateProductCategoryRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductCategoriesApiupdateProductCategory
     */
    updateMask?: any
}

export class ObjectProductCategoriesApi {
    private api: ObservableProductCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: ProductCategoriesApiRequestFactory, responseProcessor?: ProductCategoriesApiResponseProcessor) {
        this.api = new ObservableProductCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param param the request object
     */
    public assignProductsToCategoryWithHttpInfo(param: ProductCategoriesApiAssignProductsToCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.assignProductsToCategoryWithHttpInfo(param.categoryId, param.assignProductsRequest,  options).toPromise();
    }

    /**
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param param the request object
     */
    public assignProductsToCategory(param: ProductCategoriesApiAssignProductsToCategoryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.assignProductsToCategory(param.categoryId, param.assignProductsRequest,  options).toPromise();
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param param the request object
     */
    public createImageFileWithHttpInfo(param: ProductCategoriesApiCreateImageFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createImageFileWithHttpInfo(param.categoryId, param.file,  options).toPromise();
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param param the request object
     */
    public createImageFile(param: ProductCategoriesApiCreateImageFileRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createImageFile(param.categoryId, param.file,  options).toPromise();
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param param the request object
     */
    public createProductCategoryWithHttpInfo(param: ProductCategoriesApiCreateProductCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        return this.api.createProductCategoryWithHttpInfo(param.createProductCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param param the request object
     */
    public createProductCategory(param: ProductCategoriesApiCreateProductCategoryRequest, options?: ConfigurationOptions): Promise<ProductCategory> {
        return this.api.createProductCategory(param.createProductCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param param the request object
     */
    public deleteImageFileWithHttpInfo(param: ProductCategoriesApiDeleteImageFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteImageFileWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param param the request object
     */
    public deleteImageFile(param: ProductCategoriesApiDeleteImageFileRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteImageFile(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param param the request object
     */
    public deleteProductCategoryWithHttpInfo(param: ProductCategoriesApiDeleteProductCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param param the request object
     */
    public deleteProductCategory(param: ProductCategoriesApiDeleteProductCategoryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param param the request object
     */
    public getProductCategoryWithHttpInfo(param: ProductCategoriesApiGetProductCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        return this.api.getProductCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param param the request object
     */
    public getProductCategory(param: ProductCategoriesApiGetProductCategoryRequest, options?: ConfigurationOptions): Promise<ProductCategory> {
        return this.api.getProductCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param param the request object
     */
    public listProductCategoriesWithHttpInfo(param: ProductCategoriesApiListProductCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListProductCategoriesResponse>> {
        return this.api.listProductCategoriesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param param the request object
     */
    public listProductCategories(param: ProductCategoriesApiListProductCategoriesRequest = {}, options?: ConfigurationOptions): Promise<ListProductCategoriesResponse> {
        return this.api.listProductCategories(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param param the request object
     */
    public updateProductCategoryWithHttpInfo(param: ProductCategoriesApiUpdateProductCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        return this.api.updateProductCategoryWithHttpInfo(param.categoryId, param.updateProductCategoryRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param param the request object
     */
    public updateProductCategory(param: ProductCategoriesApiUpdateProductCategoryRequest, options?: ConfigurationOptions): Promise<ProductCategory> {
        return this.api.updateProductCategory(param.categoryId, param.updateProductCategoryRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableProductDiscountsApi } from "./ObservableAPI";
import { ProductDiscountsApiRequestFactory, ProductDiscountsApiResponseProcessor} from "../apis/ProductDiscountsApi";

export interface ProductDiscountsApiCreateProductDiscountRequest {
    /**
     * 
     * @type CreateProductDiscountRequest
     * @memberof ProductDiscountsApicreateProductDiscount
     */
    createProductDiscountRequest: CreateProductDiscountRequest
}

export interface ProductDiscountsApiDeleteProductDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApideleteProductDiscount
     */
    discountId: string
}

export interface ProductDiscountsApiGetProductDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApigetProductDiscount
     */
    discountId: string
}

export interface ProductDiscountsApiListProductDiscountsRequest {
    /**
     * Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApilistProductDiscounts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApilistProductDiscounts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductDiscountsApilistProductDiscounts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApilistProductDiscounts
     */
    pageToken?: string
}

export interface ProductDiscountsApiUpdateProductDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductDiscountsApiupdateProductDiscount
     */
    discountId: string
    /**
     * 
     * @type UpdateProductDiscountRequest
     * @memberof ProductDiscountsApiupdateProductDiscount
     */
    updateProductDiscountRequest: UpdateProductDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductDiscountsApiupdateProductDiscount
     */
    updateMask?: any
}

export class ObjectProductDiscountsApi {
    private api: ObservableProductDiscountsApi

    public constructor(configuration: Configuration, requestFactory?: ProductDiscountsApiRequestFactory, responseProcessor?: ProductDiscountsApiResponseProcessor) {
        this.api = new ObservableProductDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param param the request object
     */
    public createProductDiscountWithHttpInfo(param: ProductDiscountsApiCreateProductDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        return this.api.createProductDiscountWithHttpInfo(param.createProductDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param param the request object
     */
    public createProductDiscount(param: ProductDiscountsApiCreateProductDiscountRequest, options?: ConfigurationOptions): Promise<ProductDiscount> {
        return this.api.createProductDiscount(param.createProductDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param param the request object
     */
    public deleteProductDiscountWithHttpInfo(param: ProductDiscountsApiDeleteProductDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param param the request object
     */
    public deleteProductDiscount(param: ProductDiscountsApiDeleteProductDiscountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param param the request object
     */
    public getProductDiscountWithHttpInfo(param: ProductDiscountsApiGetProductDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        return this.api.getProductDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param param the request object
     */
    public getProductDiscount(param: ProductDiscountsApiGetProductDiscountRequest, options?: ConfigurationOptions): Promise<ProductDiscount> {
        return this.api.getProductDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param param the request object
     */
    public listProductDiscountsWithHttpInfo(param: ProductDiscountsApiListProductDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListProductDiscountsResponse>> {
        return this.api.listProductDiscountsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param param the request object
     */
    public listProductDiscounts(param: ProductDiscountsApiListProductDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ListProductDiscountsResponse> {
        return this.api.listProductDiscounts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param param the request object
     */
    public updateProductDiscountWithHttpInfo(param: ProductDiscountsApiUpdateProductDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        return this.api.updateProductDiscountWithHttpInfo(param.discountId, param.updateProductDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param param the request object
     */
    public updateProductDiscount(param: ProductDiscountsApiUpdateProductDiscountRequest, options?: ConfigurationOptions): Promise<ProductDiscount> {
        return this.api.updateProductDiscount(param.discountId, param.updateProductDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableProductInterestBundlesApi } from "./ObservableAPI";
import { ProductInterestBundlesApiRequestFactory, ProductInterestBundlesApiResponseProcessor} from "../apis/ProductInterestBundlesApi";

export interface ProductInterestBundlesApiAddProductInterestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiaddProductInterest
     */
    id: string
    /**
     * 
     * @type AddProductInterestRequest
     * @memberof ProductInterestBundlesApiaddProductInterest
     */
    addProductInterestRequest: AddProductInterestRequest
}

export interface ProductInterestBundlesApiCreateProductInterestBundleRequest {
    /**
     * 
     * @type CreateProductInterestBundleRequest
     * @memberof ProductInterestBundlesApicreateProductInterestBundle
     */
    createProductInterestBundleRequest: CreateProductInterestBundleRequest
}

export interface ProductInterestBundlesApiDeleteProductInterestBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApideleteProductInterestBundle
     */
    id: string
}

export interface ProductInterestBundlesApiGetProductInterestBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApigetProductInterestBundle
     */
    id: string
}

export interface ProductInterestBundlesApiListProductInterestBundlesRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundles
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundles
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductInterestBundlesApilistProductInterestBundles
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundles
     */
    pageToken?: string
}

export interface ProductInterestBundlesApiRemoveProductInterestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiremoveProductInterest
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiremoveProductInterest
     */
    interestId: string
}

export interface ProductInterestBundlesApiUpdateProductInterestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterest
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterest
     */
    interestId: string
    /**
     * 
     * @type UpdateProductInterestRequest
     * @memberof ProductInterestBundlesApiupdateProductInterest
     */
    updateProductInterestRequest: UpdateProductInterestRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductInterestBundlesApiupdateProductInterest
     */
    updateMask?: any
}

export interface ProductInterestBundlesApiUpdateProductInterestBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterestBundle
     */
    id: string
    /**
     * 
     * @type UpdateProductInterestBundleRequest
     * @memberof ProductInterestBundlesApiupdateProductInterestBundle
     */
    updateProductInterestBundleRequest: UpdateProductInterestBundleRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductInterestBundlesApiupdateProductInterestBundle
     */
    updateMask?: any
}

export class ObjectProductInterestBundlesApi {
    private api: ObservableProductInterestBundlesApi

    public constructor(configuration: Configuration, requestFactory?: ProductInterestBundlesApiRequestFactory, responseProcessor?: ProductInterestBundlesApiResponseProcessor) {
        this.api = new ObservableProductInterestBundlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param param the request object
     */
    public addProductInterestWithHttpInfo(param: ProductInterestBundlesApiAddProductInterestRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        return this.api.addProductInterestWithHttpInfo(param.id, param.addProductInterestRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param param the request object
     */
    public addProductInterest(param: ProductInterestBundlesApiAddProductInterestRequest, options?: ConfigurationOptions): Promise<ProductInterest> {
        return this.api.addProductInterest(param.id, param.addProductInterestRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param param the request object
     */
    public createProductInterestBundleWithHttpInfo(param: ProductInterestBundlesApiCreateProductInterestBundleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.createProductInterestBundleWithHttpInfo(param.createProductInterestBundleRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param param the request object
     */
    public createProductInterestBundle(param: ProductInterestBundlesApiCreateProductInterestBundleRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.createProductInterestBundle(param.createProductInterestBundleRequest,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param param the request object
     */
    public deleteProductInterestBundleWithHttpInfo(param: ProductInterestBundlesApiDeleteProductInterestBundleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductInterestBundleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param param the request object
     */
    public deleteProductInterestBundle(param: ProductInterestBundlesApiDeleteProductInterestBundleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductInterestBundle(param.id,  options).toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param param the request object
     */
    public getProductInterestBundleWithHttpInfo(param: ProductInterestBundlesApiGetProductInterestBundleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.getProductInterestBundleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param param the request object
     */
    public getProductInterestBundle(param: ProductInterestBundlesApiGetProductInterestBundleRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.getProductInterestBundle(param.id,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param param the request object
     */
    public listProductInterestBundlesWithHttpInfo(param: ProductInterestBundlesApiListProductInterestBundlesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListProductInterestBundleResponse>> {
        return this.api.listProductInterestBundlesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param param the request object
     */
    public listProductInterestBundles(param: ProductInterestBundlesApiListProductInterestBundlesRequest = {}, options?: ConfigurationOptions): Promise<ListProductInterestBundleResponse> {
        return this.api.listProductInterestBundles(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param param the request object
     */
    public removeProductInterestWithHttpInfo(param: ProductInterestBundlesApiRemoveProductInterestRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeProductInterestWithHttpInfo(param.id, param.interestId,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param param the request object
     */
    public removeProductInterest(param: ProductInterestBundlesApiRemoveProductInterestRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeProductInterest(param.id, param.interestId,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param param the request object
     */
    public updateProductInterestWithHttpInfo(param: ProductInterestBundlesApiUpdateProductInterestRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        return this.api.updateProductInterestWithHttpInfo(param.id, param.interestId, param.updateProductInterestRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param param the request object
     */
    public updateProductInterest(param: ProductInterestBundlesApiUpdateProductInterestRequest, options?: ConfigurationOptions): Promise<ProductInterest> {
        return this.api.updateProductInterest(param.id, param.interestId, param.updateProductInterestRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param param the request object
     */
    public updateProductInterestBundleWithHttpInfo(param: ProductInterestBundlesApiUpdateProductInterestBundleRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.updateProductInterestBundleWithHttpInfo(param.id, param.updateProductInterestBundleRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param param the request object
     */
    public updateProductInterestBundle(param: ProductInterestBundlesApiUpdateProductInterestBundleRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.updateProductInterestBundle(param.id, param.updateProductInterestBundleRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiAddProductOptionListOptionValueRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiaddProductOptionListOptionValue
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiaddProductOptionListOptionValue
     */
    productOptionId: string
    /**
     * 
     * @type Array&lt;CreateProductOptionListOption&gt;
     * @memberof ProductsApiaddProductOptionListOptionValue
     */
    createProductOptionListOption: Array<CreateProductOptionListOption>
}

export interface ProductsApiAdjustInventoryRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiadjustInventory
     */
    productId: string
    /**
     * 
     * @type UpdateProductInventoryRequestDetail
     * @memberof ProductsApiadjustInventory
     */
    updateProductInventoryRequestDetail: UpdateProductInventoryRequestDetail
}

export interface ProductsApiCreateProductRequest {
    /**
     * 
     * @type CreateProductRequestDetail
     * @memberof ProductsApicreateProduct
     */
    createProductRequestDetail: CreateProductRequestDetail
}

export interface ProductsApiCreateProductImageRequest {
    /**
     * The product ID
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateProductImage
     */
    productId: string
    /**
     * The image file to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ProductsApicreateProductImage
     */
    file: HttpFile
    /**
     * Set to \&#39;true\&#39; if the product image should also be used in legacy cart features. Only one image is allowed. If an image already exists, it will be replaced by the current image.
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductsApicreateProductImage
     */
    legacy?: boolean
}

export interface ProductsApiCreateProductOptionRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateProductOption
     */
    productId: string
    /**
     * 
     * @type CreateProductOptionRequest
     * @memberof ProductsApicreateProductOption
     */
    createProductOptionRequest: CreateProductOptionRequest
}

export interface ProductsApiDeleteProductRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProduct
     */
    productId: string
}

export interface ProductsApiDeleteProductImageRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductImage
     */
    productId: string
}

export interface ProductsApiDeleteProductOptionRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductOption
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductOption
     */
    productOptionId: string
}

export interface ProductsApiDeleteProductOptionListOptionValueRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductOptionListOptionValue
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductOptionListOptionValue
     */
    productOptionId: string
    /**
     * item_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductOptionListOptionValue
     */
    itemId: string
}

export interface ProductsApiGetFileDataRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetFileData
     */
    productId: string
}

export interface ProductsApiGetProductRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetProduct
     */
    productId: string
}

export interface ProductsApiGetProductOptionRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetProductOption
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetProductOption
     */
    productOptionId: string
}

export interface ProductsApiListProductOptionsRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProductOptions
     */
    productId: string
}

export interface ProductsApiListProductsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProducts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProducts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductsApilistProducts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProducts
     */
    pageToken?: string
}

export interface ProductsApiUpdateProductRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProduct
     */
    productId: string
    /**
     * 
     * @type UpdateProductRequestDetail
     * @memberof ProductsApiupdateProduct
     */
    updateProductRequestDetail: UpdateProductRequestDetail
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductsApiupdateProduct
     */
    updateMask?: any
}

export interface ProductsApiUpdateProductOptionRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductOption
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductOption
     */
    productOptionId: string
    /**
     * 
     * @type UpdateProductOptionRequest
     * @memberof ProductsApiupdateProductOption
     */
    updateProductOptionRequest: UpdateProductOptionRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductsApiupdateProductOption
     */
    updateMask?: any
}

export interface ProductsApiUpdateProductOptionListOptionValueRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductOptionListOptionValue
     */
    productId: string
    /**
     * product_option_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductOptionListOptionValue
     */
    productOptionId: string
    /**
     * item_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductOptionListOptionValue
     */
    itemId: string
    /**
     * 
     * @type UpdateProductOptionListOption
     * @memberof ProductsApiupdateProductOptionListOptionValue
     */
    updateProductOptionListOption: UpdateProductOptionListOption
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ProductsApiupdateProductOptionListOptionValue
     */
    updateMask?: any
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param param the request object
     */
    public addProductOptionListOptionValueWithHttpInfo(param: ProductsApiAddProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        return this.api.addProductOptionListOptionValueWithHttpInfo(param.productId, param.productOptionId, param.createProductOptionListOption,  options).toPromise();
    }

    /**
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param param the request object
     */
    public addProductOptionListOptionValue(param: ProductsApiAddProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<ProductOption> {
        return this.api.addProductOptionListOptionValue(param.productId, param.productOptionId, param.createProductOptionListOption,  options).toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventoryWithHttpInfo(param: ProductsApiAdjustInventoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        return this.api.adjustInventoryWithHttpInfo(param.productId, param.updateProductInventoryRequestDetail,  options).toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventory(param: ProductsApiAdjustInventoryRequest, options?: ConfigurationOptions): Promise<RestV2ProductDetail> {
        return this.api.adjustInventory(param.productId, param.updateProductInventoryRequestDetail,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductsApiCreateProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        return this.api.createProductWithHttpInfo(param.createProductRequestDetail,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProduct(param: ProductsApiCreateProductRequest, options?: ConfigurationOptions): Promise<RestV2ProductDetail> {
        return this.api.createProduct(param.createProductRequestDetail,  options).toPromise();
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param param the request object
     */
    public createProductImageWithHttpInfo(param: ProductsApiCreateProductImageRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createProductImageWithHttpInfo(param.productId, param.file, param.legacy,  options).toPromise();
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param param the request object
     */
    public createProductImage(param: ProductsApiCreateProductImageRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createProductImage(param.productId, param.file, param.legacy,  options).toPromise();
    }

    /**
     * Creates a new product option
     * Create a Product Option
     * @param param the request object
     */
    public createProductOptionWithHttpInfo(param: ProductsApiCreateProductOptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        return this.api.createProductOptionWithHttpInfo(param.productId, param.createProductOptionRequest,  options).toPromise();
    }

    /**
     * Creates a new product option
     * Create a Product Option
     * @param param the request object
     */
    public createProductOption(param: ProductsApiCreateProductOptionRequest, options?: ConfigurationOptions): Promise<ProductOption> {
        return this.api.createProductOption(param.productId, param.createProductOptionRequest,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProduct(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProduct(param.productId,  options).toPromise();
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param param the request object
     */
    public deleteProductImageWithHttpInfo(param: ProductsApiDeleteProductImageRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductImageWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param param the request object
     */
    public deleteProductImage(param: ProductsApiDeleteProductImageRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductImage(param.productId,  options).toPromise();
    }

    /**
     * Deletes a single product option
     * Delete a Product Option
     * @param param the request object
     */
    public deleteProductOptionWithHttpInfo(param: ProductsApiDeleteProductOptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductOptionWithHttpInfo(param.productId, param.productOptionId,  options).toPromise();
    }

    /**
     * Deletes a single product option
     * Delete a Product Option
     * @param param the request object
     */
    public deleteProductOption(param: ProductsApiDeleteProductOptionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductOption(param.productId, param.productOptionId,  options).toPromise();
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param param the request object
     */
    public deleteProductOptionListOptionValueWithHttpInfo(param: ProductsApiDeleteProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductOptionListOptionValueWithHttpInfo(param.productId, param.productOptionId, param.itemId,  options).toPromise();
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param param the request object
     */
    public deleteProductOptionListOptionValue(param: ProductsApiDeleteProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductOptionListOptionValue(param.productId, param.productOptionId, param.itemId,  options).toPromise();
    }

    /**
     * Retrieves the product\'s legacy image
     * Retrieve Product Legacy Image Data
     * @param param the request object
     */
    public getFileDataWithHttpInfo(param: ProductsApiGetFileDataRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getFileDataWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Retrieves the product\'s legacy image
     * Retrieve Product Legacy Image Data
     * @param param the request object
     */
    public getFileData(param: ProductsApiGetFileDataRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.getFileData(param.productId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        return this.api.getProductWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProduct(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<RestV2ProductDetail> {
        return this.api.getProduct(param.productId,  options).toPromise();
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param param the request object
     */
    public getProductOptionWithHttpInfo(param: ProductsApiGetProductOptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        return this.api.getProductOptionWithHttpInfo(param.productId, param.productOptionId,  options).toPromise();
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param param the request object
     */
    public getProductOption(param: ProductsApiGetProductOptionRequest, options?: ConfigurationOptions): Promise<ProductOption> {
        return this.api.getProductOption(param.productId, param.productOptionId,  options).toPromise();
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param param the request object
     */
    public listProductOptionsWithHttpInfo(param: ProductsApiListProductOptionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListProductOptionsResponse>> {
        return this.api.listProductOptionsWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param param the request object
     */
    public listProductOptions(param: ProductsApiListProductOptionsRequest, options?: ConfigurationOptions): Promise<ListProductOptionsResponse> {
        return this.api.listProductOptions(param.productId,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProductsWithHttpInfo(param: ProductsApiListProductsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListProductsResponseList>> {
        return this.api.listProductsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProducts(param: ProductsApiListProductsRequest = {}, options?: ConfigurationOptions): Promise<ListProductsResponseList> {
        return this.api.listProducts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        return this.api.updateProductWithHttpInfo(param.productId, param.updateProductRequestDetail, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param param the request object
     */
    public updateProduct(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<RestV2ProductDetail> {
        return this.api.updateProduct(param.productId, param.updateProductRequestDetail, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param param the request object
     */
    public updateProductOptionWithHttpInfo(param: ProductsApiUpdateProductOptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        return this.api.updateProductOptionWithHttpInfo(param.productId, param.productOptionId, param.updateProductOptionRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param param the request object
     */
    public updateProductOption(param: ProductsApiUpdateProductOptionRequest, options?: ConfigurationOptions): Promise<ProductOption> {
        return this.api.updateProductOption(param.productId, param.productOptionId, param.updateProductOptionRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a single product option value
     * Updates a Product Option List Option Value
     * @param param the request object
     */
    public updateProductOptionListOptionValueWithHttpInfo(param: ProductsApiUpdateProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        return this.api.updateProductOptionListOptionValueWithHttpInfo(param.productId, param.productOptionId, param.itemId, param.updateProductOptionListOption, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a single product option value
     * Updates a Product Option List Option Value
     * @param param the request object
     */
    public updateProductOptionListOptionValue(param: ProductsApiUpdateProductOptionListOptionValueRequest, options?: ConfigurationOptions): Promise<ProductOption> {
        return this.api.updateProductOptionListOptionValue(param.productId, param.productOptionId, param.itemId, param.updateProductOptionListOption, param.updateMask,  options).toPromise();
    }

}

import { ObservableReferralApi } from "./ObservableAPI";
import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";

export interface ReferralApiCreateReferralRequest {
    /**
     * 
     * @type CreateReferralRequest
     * @memberof ReferralApicreateReferral
     */
    createReferralRequest: CreateReferralRequest
}

export class ObjectReferralApi {
    private api: ObservableReferralApi

    public constructor(configuration: Configuration, requestFactory?: ReferralApiRequestFactory, responseProcessor?: ReferralApiResponseProcessor) {
        this.api = new ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferralWithHttpInfo(param: ReferralApiCreateReferralRequest, options?: ConfigurationOptions): Promise<HttpInfo<Referral>> {
        return this.api.createReferralWithHttpInfo(param.createReferralRequest,  options).toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferral(param: ReferralApiCreateReferralRequest, options?: ConfigurationOptions): Promise<Referral> {
        return this.api.createReferral(param.createReferralRequest,  options).toPromise();
    }

}

import { ObservableReportingApi } from "./ObservableAPI";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";

export interface ReportingApiListReportsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReports
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReports
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ReportingApilistReports
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReports
     */
    pageToken?: string
}

export interface ReportingApiRetrieveReportRequest {
    /**
     * The unique identifier of the report (Saved Search)
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApiretrieveReport
     */
    reportId: string
}

export interface ReportingApiRunReportRequest {
    /**
     * The unique identifier of the report (Saved Search) to execute
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReport
     */
    reportId: string
    /**
     * 
     * Defaults to: undefined
     * @type RunReportRequest
     * @memberof ReportingApirunReport
     */
    runReportRequest: RunReportRequest
}

export class ObjectReportingApi {
    private api: ObservableReportingApi

    public constructor(configuration: Configuration, requestFactory?: ReportingApiRequestFactory, responseProcessor?: ReportingApiResponseProcessor) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param param the request object
     */
    public listReportsWithHttpInfo(param: ReportingApiListReportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListReportsResponse>> {
        return this.api.listReportsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param param the request object
     */
    public listReports(param: ReportingApiListReportsRequest = {}, options?: ConfigurationOptions): Promise<ListReportsResponse> {
        return this.api.listReports(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param param the request object
     */
    public retrieveReportWithHttpInfo(param: ReportingApiRetrieveReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<Report>> {
        return this.api.retrieveReportWithHttpInfo(param.reportId,  options).toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param param the request object
     */
    public retrieveReport(param: ReportingApiRetrieveReportRequest, options?: ConfigurationOptions): Promise<Report> {
        return this.api.retrieveReport(param.reportId,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportWithHttpInfo(param: ReportingApiRunReportRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportExecutionResult>> {
        return this.api.runReportWithHttpInfo(param.reportId, param.runReportRequest,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReport(param: ReportingApiRunReportRequest, options?: ConfigurationOptions): Promise<ReportExecutionResult> {
        return this.api.runReport(param.reportId, param.runReportRequest,  options).toPromise();
    }

}

import { ObservableSalesApi } from "./ObservableAPI";
import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";

export interface SalesApiListPaymentsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistPayments
     */
    filter?: string
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistPayments
     */
    pageToken?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistPayments
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SalesApilistPayments
     */
    pageSize?: number
}

export interface SalesApiListTransactionsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistTransactions
     */
    filter?: string
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistTransactions
     */
    pageToken?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof SalesApilistTransactions
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SalesApilistTransactions
     */
    pageSize?: number
}

export interface SalesApiSetMerchantGatewayAsDefaultRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SalesApisetMerchantGatewayAsDefault
     */
    id: string
}

export class ObjectSalesApi {
    private api: ObservableSalesApi

    public constructor(configuration: Configuration, requestFactory?: SalesApiRequestFactory, responseProcessor?: SalesApiResponseProcessor) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of payments
     * List Payments
     * @param param the request object
     */
    public listPaymentsWithHttpInfo(param: SalesApiListPaymentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListPayments>> {
        return this.api.listPaymentsWithHttpInfo(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of payments
     * List Payments
     * @param param the request object
     */
    public listPayments(param: SalesApiListPaymentsRequest = {}, options?: ConfigurationOptions): Promise<ListPayments> {
        return this.api.listPayments(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param param the request object
     */
    public listTransactionsWithHttpInfo(param: SalesApiListTransactionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTransactions>> {
        return this.api.listTransactionsWithHttpInfo(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param param the request object
     */
    public listTransactions(param: SalesApiListTransactionsRequest = {}, options?: ConfigurationOptions): Promise<ListTransactions> {
        return this.api.listTransactions(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultWithHttpInfo(param: SalesApiSetMerchantGatewayAsDefaultRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setMerchantGatewayAsDefaultWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefault(param: SalesApiSetMerchantGatewayAsDefaultRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setMerchantGatewayAsDefault(param.id,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetApplicationConfigurationsRequest {
    /**
     * By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * Defaults to: undefined
     * @type any
     * @memberof SettingsApigetApplicationConfigurations
     */
    fields?: any
}

export interface SettingsApiGetContactOptionTypesRequest {
}

export interface SettingsApiIsApplicationEnabledRequest {
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurationsWithHttpInfo(param: SettingsApiGetApplicationConfigurationsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetSettingsResponse>> {
        return this.api.getApplicationConfigurationsWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurations(param: SettingsApiGetApplicationConfigurationsRequest = {}, options?: ConfigurationOptions): Promise<GetSettingsResponse> {
        return this.api.getApplicationConfigurations(param.fields,  options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesWithHttpInfo(param: SettingsApiGetContactOptionTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        return this.api.getContactOptionTypesWithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypes(param: SettingsApiGetContactOptionTypesRequest = {}, options?: ConfigurationOptions): Promise<GetContactOptionTypesResponse> {
        return this.api.getContactOptionTypes( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledWithHttpInfo(param: SettingsApiIsApplicationEnabledRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        return this.api.isApplicationEnabledWithHttpInfo( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabled(param: SettingsApiIsApplicationEnabledRequest = {}, options?: ConfigurationOptions): Promise<GetApplicationEnabledStatusResponse> {
        return this.api.isApplicationEnabled( options).toPromise();
    }

}

import { ObservableShippingApi } from "./ObservableAPI";
import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";

export interface ShippingApiListShippingMethodsRequest {
}

export class ObjectShippingApi {
    private api: ObservableShippingApi

    public constructor(configuration: Configuration, requestFactory?: ShippingApiRequestFactory, responseProcessor?: ShippingApiResponseProcessor) {
        this.api = new ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethodsWithHttpInfo(param: ShippingApiListShippingMethodsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        return this.api.listShippingMethodsWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethods(param: ShippingApiListShippingMethodsRequest = {}, options?: ConfigurationOptions): Promise<ListRestShippingMethodsResponse> {
        return this.api.listShippingMethods( options).toPromise();
    }

}

import { ObservableShippingDiscountsApi } from "./ObservableAPI";
import { ShippingDiscountsApiRequestFactory, ShippingDiscountsApiResponseProcessor} from "../apis/ShippingDiscountsApi";

export interface ShippingDiscountsApiCreateShippingDiscountRequest {
    /**
     * 
     * @type CreateShippingDiscountRequest
     * @memberof ShippingDiscountsApicreateShippingDiscount
     */
    createShippingDiscountRequest: CreateShippingDiscountRequest
}

export interface ShippingDiscountsApiDeleteShippingDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApideleteShippingDiscount
     */
    discountId: string
}

export interface ShippingDiscountsApiGetShippingDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApigetShippingDiscount
     */
    discountId: string
}

export interface ShippingDiscountsApiListShippingDiscountsRequest {
    /**
     * Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApilistShippingDiscounts
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApilistShippingDiscounts
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ShippingDiscountsApilistShippingDiscounts
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApilistShippingDiscounts
     */
    pageToken?: string
}

export interface ShippingDiscountsApiUpdateShippingDiscountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountsApiupdateShippingDiscount
     */
    discountId: string
    /**
     * 
     * @type UpdateShippingDiscountRequest
     * @memberof ShippingDiscountsApiupdateShippingDiscount
     */
    updateShippingDiscountRequest: UpdateShippingDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof ShippingDiscountsApiupdateShippingDiscount
     */
    updateMask?: any
}

export class ObjectShippingDiscountsApi {
    private api: ObservableShippingDiscountsApi

    public constructor(configuration: Configuration, requestFactory?: ShippingDiscountsApiRequestFactory, responseProcessor?: ShippingDiscountsApiResponseProcessor) {
        this.api = new ObservableShippingDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createShippingDiscountWithHttpInfo(param: ShippingDiscountsApiCreateShippingDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.createShippingDiscountWithHttpInfo(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createShippingDiscount(param: ShippingDiscountsApiCreateShippingDiscountRequest, options?: ConfigurationOptions): Promise<ShippingDiscount> {
        return this.api.createShippingDiscount(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteShippingDiscountWithHttpInfo(param: ShippingDiscountsApiDeleteShippingDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteShippingDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteShippingDiscount(param: ShippingDiscountsApiDeleteShippingDiscountRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteShippingDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getShippingDiscountWithHttpInfo(param: ShippingDiscountsApiGetShippingDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.getShippingDiscountWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getShippingDiscount(param: ShippingDiscountsApiGetShippingDiscountRequest, options?: ConfigurationOptions): Promise<ShippingDiscount> {
        return this.api.getShippingDiscount(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listShippingDiscountsWithHttpInfo(param: ShippingDiscountsApiListShippingDiscountsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListShippingDiscountsResponse>> {
        return this.api.listShippingDiscountsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listShippingDiscounts(param: ShippingDiscountsApiListShippingDiscountsRequest = {}, options?: ConfigurationOptions): Promise<ListShippingDiscountsResponse> {
        return this.api.listShippingDiscounts(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateShippingDiscountWithHttpInfo(param: ShippingDiscountsApiUpdateShippingDiscountRequest, options?: ConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.updateShippingDiscountWithHttpInfo(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateShippingDiscount(param: ShippingDiscountsApiUpdateShippingDiscountRequest, options?: ConfigurationOptions): Promise<ShippingDiscount> {
        return this.api.updateShippingDiscount(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableSubscriptionPlansApi } from "./ObservableAPI";
import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";

export interface SubscriptionPlansApiCreateSubscriptionPlansRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApicreateSubscriptionPlans
     */
    productId: string
    /**
     * 
     * @type CreateSubscriptionPlanRequest
     * @memberof SubscriptionPlansApicreateSubscriptionPlans
     */
    createSubscriptionPlanRequest: CreateSubscriptionPlanRequest
}

export interface SubscriptionPlansApiDeleteSubscriptionPlanRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApideleteSubscriptionPlan
     */
    productId: string
    /**
     * subscription_plan_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApideleteSubscriptionPlan
     */
    subscriptionPlanId: string
}

export interface SubscriptionPlansApiFetchSubscriptionPlanRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApifetchSubscriptionPlan
     */
    productId: string
    /**
     * subscription_plan_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApifetchSubscriptionPlan
     */
    subscriptionPlanId: string
}

export interface SubscriptionPlansApiListSubscriptionPlansRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlans
     */
    productId: string
    /**
     * Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlans
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlans
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionPlansApilistSubscriptionPlans
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlans
     */
    pageToken?: string
}

export interface SubscriptionPlansApiUpdateSubscriptionPlanRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApiupdateSubscriptionPlan
     */
    productId: string
    /**
     * subscription_plan_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApiupdateSubscriptionPlan
     */
    subscriptionPlanId: string
    /**
     * 
     * @type UpdateSubscriptionPlanRequest
     * @memberof SubscriptionPlansApiupdateSubscriptionPlan
     */
    updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof SubscriptionPlansApiupdateSubscriptionPlan
     */
    updateMask?: any
}

export class ObjectSubscriptionPlansApi {
    private api: ObservableSubscriptionPlansApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionPlansApiRequestFactory, responseProcessor?: SubscriptionPlansApiResponseProcessor) {
        this.api = new ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param param the request object
     */
    public createSubscriptionPlansWithHttpInfo(param: SubscriptionPlansApiCreateSubscriptionPlansRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        return this.api.createSubscriptionPlansWithHttpInfo(param.productId, param.createSubscriptionPlanRequest,  options).toPromise();
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param param the request object
     */
    public createSubscriptionPlans(param: SubscriptionPlansApiCreateSubscriptionPlansRequest, options?: ConfigurationOptions): Promise<SubscriptionPlan> {
        return this.api.createSubscriptionPlans(param.productId, param.createSubscriptionPlanRequest,  options).toPromise();
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param param the request object
     */
    public deleteSubscriptionPlanWithHttpInfo(param: SubscriptionPlansApiDeleteSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSubscriptionPlanWithHttpInfo(param.productId, param.subscriptionPlanId,  options).toPromise();
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param param the request object
     */
    public deleteSubscriptionPlan(param: SubscriptionPlansApiDeleteSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSubscriptionPlan(param.productId, param.subscriptionPlanId,  options).toPromise();
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param param the request object
     */
    public fetchSubscriptionPlanWithHttpInfo(param: SubscriptionPlansApiFetchSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        return this.api.fetchSubscriptionPlanWithHttpInfo(param.productId, param.subscriptionPlanId,  options).toPromise();
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param param the request object
     */
    public fetchSubscriptionPlan(param: SubscriptionPlansApiFetchSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<SubscriptionPlan> {
        return this.api.fetchSubscriptionPlan(param.productId, param.subscriptionPlanId,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlansWithHttpInfo(param: SubscriptionPlansApiListSubscriptionPlansRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        return this.api.listSubscriptionPlansWithHttpInfo(param.productId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlans(param: SubscriptionPlansApiListSubscriptionPlansRequest, options?: ConfigurationOptions): Promise<ListSubscriptionPlansResponse> {
        return this.api.listSubscriptionPlans(param.productId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param param the request object
     */
    public updateSubscriptionPlanWithHttpInfo(param: SubscriptionPlansApiUpdateSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        return this.api.updateSubscriptionPlanWithHttpInfo(param.productId, param.subscriptionPlanId, param.updateSubscriptionPlanRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param param the request object
     */
    public updateSubscriptionPlan(param: SubscriptionPlansApiUpdateSubscriptionPlanRequest, options?: ConfigurationOptions): Promise<SubscriptionPlan> {
        return this.api.updateSubscriptionPlan(param.productId, param.subscriptionPlanId, param.updateSubscriptionPlanRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiCancelSubscriptionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApicancelSubscription
     */
    subscriptionId: string
    /**
     * 
     * @type CancelSubscriptionRequest
     * @memberof SubscriptionsApicancelSubscription
     */
    cancelSubscriptionRequest: CancelSubscriptionRequest
}

export interface SubscriptionsApiCreateSubscriptionRequest {
    /**
     * 
     * @type CreateSubscriptionRequestDetail
     * @memberof SubscriptionsApicreateSubscription
     */
    createSubscriptionRequestDetail: CreateSubscriptionRequestDetail
}

export interface SubscriptionsApiCreateSubscriptionCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof SubscriptionsApicreateSubscriptionCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface SubscriptionsApiDeleteSubscriptionCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApideleteSubscriptionCustomField
     */
    customFieldId: string
}

export interface SubscriptionsApiGetSubscriptionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApigetSubscription
     */
    subscriptionId: string
}

export interface SubscriptionsApiListSubscriptionsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptions
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptions
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApilistSubscriptions
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptions
     */
    pageToken?: string
}

export interface SubscriptionsApiRetrieveSubscriptionCustomFieldModelRequest {
}

export interface SubscriptionsApiUpdateSubscriptionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApiupdateSubscription
     */
    subscriptionId: string
    /**
     * 
     * @type UpdateSubscriptionRequestDetail
     * @memberof SubscriptionsApiupdateSubscription
     */
    updateSubscriptionRequestDetail: UpdateSubscriptionRequestDetail
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof SubscriptionsApiupdateSubscription
     */
    updateMask?: any
}

export interface SubscriptionsApiUpdateSubscriptionCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApiupdateSubscriptionCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof SubscriptionsApiupdateSubscriptionCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof SubscriptionsApiupdateSubscriptionCustomField
     */
    updateMask?: any
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscriptionWithHttpInfo(param: SubscriptionsApiCancelSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelSubscriptionWithHttpInfo(param.subscriptionId, param.cancelSubscriptionRequest,  options).toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscription(param: SubscriptionsApiCancelSubscriptionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelSubscription(param.subscriptionId, param.cancelSubscriptionRequest,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionWithHttpInfo(param: SubscriptionsApiCreateSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        return this.api.createSubscriptionWithHttpInfo(param.createSubscriptionRequestDetail,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscription(param: SubscriptionsApiCreateSubscriptionRequest, options?: ConfigurationOptions): Promise<SubscriptionDetail> {
        return this.api.createSubscription(param.createSubscriptionRequestDetail,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldWithHttpInfo(param: SubscriptionsApiCreateSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createSubscriptionCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomField(param: SubscriptionsApiCreateSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createSubscriptionCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param param the request object
     */
    public deleteSubscriptionCustomFieldWithHttpInfo(param: SubscriptionsApiDeleteSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSubscriptionCustomFieldWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param param the request object
     */
    public deleteSubscriptionCustomField(param: SubscriptionsApiDeleteSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSubscriptionCustomField(param.customFieldId,  options).toPromise();
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param param the request object
     */
    public getSubscriptionWithHttpInfo(param: SubscriptionsApiGetSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        return this.api.getSubscriptionWithHttpInfo(param.subscriptionId,  options).toPromise();
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param param the request object
     */
    public getSubscription(param: SubscriptionsApiGetSubscriptionRequest, options?: ConfigurationOptions): Promise<SubscriptionDetail> {
        return this.api.getSubscription(param.subscriptionId,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptionsWithHttpInfo(param: SubscriptionsApiListSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListSubscriptionsResponseList>> {
        return this.api.listSubscriptionsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptions(param: SubscriptionsApiListSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<ListSubscriptionsResponseList> {
        return this.api.listSubscriptions(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelWithHttpInfo(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveSubscriptionCustomFieldModelWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModel(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveSubscriptionCustomFieldModel( options).toPromise();
    }

    /**
     * Updates a Subscription
     * Update a Subscription
     * @param param the request object
     */
    public updateSubscriptionWithHttpInfo(param: SubscriptionsApiUpdateSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        return this.api.updateSubscriptionWithHttpInfo(param.subscriptionId, param.updateSubscriptionRequestDetail, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Subscription
     * Update a Subscription
     * @param param the request object
     */
    public updateSubscription(param: SubscriptionsApiUpdateSubscriptionRequest, options?: ConfigurationOptions): Promise<SubscriptionDetail> {
        return this.api.updateSubscription(param.subscriptionId, param.updateSubscriptionRequestDetail, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldWithHttpInfo(param: SubscriptionsApiUpdateSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateSubscriptionCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomField(param: SubscriptionsApiUpdateSubscriptionCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateSubscriptionCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiApplyTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiapplyTags
     */
    tagId: string
    /**
     * 
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiapplyTags
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export interface TagsApiCreateTagRequest {
    /**
     * 
     * @type CreateUpdateTagRequest
     * @memberof TagsApicreateTag
     */
    createUpdateTagRequest: CreateUpdateTagRequest
}

export interface TagsApiCreateTagCategoryRequest {
    /**
     * 
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApicreateTagCategory
     */
    createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest
}

export interface TagsApiDeleteTagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTag
     */
    tagId: string
}

export interface TagsApiDeleteTagCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTagCategory
     */
    tagCategoryId: string
}

export interface TagsApiGetCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetCategory
     */
    tagCategoryId: string
}

export interface TagsApiGetTagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetTag
     */
    tagId: string
}

export interface TagsApiListCompaniesForTagIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagId
     */
    tagId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagId
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagId
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistCompaniesForTagId
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagId
     */
    pageToken?: string
}

export interface TagsApiListContactsWithTagIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagId
     */
    tagId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagId
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagId
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistContactsWithTagId
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagId
     */
    pageToken?: string
}

export interface TagsApiListTagCategoriesRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategories
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategories
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTagCategories
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategories
     */
    pageToken?: string
}

export interface TagsApiListTagsRequest {
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTags
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTags
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTags
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTags
     */
    pageToken?: string
}

export interface TagsApiRemoveTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiremoveTags
     */
    tagId: string
    /**
     * 
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiremoveTags
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export interface TagsApiUpdateTagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiupdateTag
     */
    tagId: string
    /**
     * 
     * @type CreateUpdateTagRequest
     * @memberof TagsApiupdateTag
     */
    createUpdateTagRequest: CreateUpdateTagRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof TagsApiupdateTag
     */
    updateMask?: any
}

export interface TagsApiUpdateTagCategoryRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiupdateTagCategory
     */
    tagCategoryId: string
    /**
     * 
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApiupdateTagCategory
     */
    createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof TagsApiupdateTagCategory
     */
    updateMask?: any
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTagsWithHttpInfo(param: TagsApiApplyTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplyTagsResponse>> {
        return this.api.applyTagsWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTags(param: TagsApiApplyTagsRequest, options?: ConfigurationOptions): Promise<ApplyTagsResponse> {
        return this.api.applyTags(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagWithHttpInfo(param: TagsApiCreateTagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Tag>> {
        return this.api.createTagWithHttpInfo(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTag(param: TagsApiCreateTagRequest, options?: ConfigurationOptions): Promise<Tag> {
        return this.api.createTag(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryWithHttpInfo(param: TagsApiCreateTagCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagCategory>> {
        return this.api.createTagCategoryWithHttpInfo(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategory(param: TagsApiCreateTagCategoryRequest, options?: ConfigurationOptions): Promise<TagCategory> {
        return this.api.createTagCategory(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagWithHttpInfo(param: TagsApiDeleteTagRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTagWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTag(param: TagsApiDeleteTagRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTag(param.tagId,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryWithHttpInfo(param: TagsApiDeleteTagCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTagCategoryWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategory(param: TagsApiDeleteTagCategoryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTagCategory(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryWithHttpInfo(param: TagsApiGetCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetTagCategoryResponse>> {
        return this.api.getCategoryWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategory(param: TagsApiGetCategoryRequest, options?: ConfigurationOptions): Promise<GetTagCategoryResponse> {
        return this.api.getCategory(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagWithHttpInfo(param: TagsApiGetTagRequest, options?: ConfigurationOptions): Promise<HttpInfo<Tag>> {
        return this.api.getTagWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTag(param: TagsApiGetTagRequest, options?: ConfigurationOptions): Promise<Tag> {
        return this.api.getTag(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdWithHttpInfo(param: TagsApiListCompaniesForTagIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        return this.api.listCompaniesForTagIdWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagId(param: TagsApiListCompaniesForTagIdRequest, options?: ConfigurationOptions): Promise<ListTaggedCompaniesResponse> {
        return this.api.listCompaniesForTagId(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdWithHttpInfo(param: TagsApiListContactsWithTagIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListTaggedContactsResponse>> {
        return this.api.listContactsWithTagIdWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagId(param: TagsApiListContactsWithTagIdRequest, options?: ConfigurationOptions): Promise<ListTaggedContactsResponse> {
        return this.api.listContactsWithTagId(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesWithHttpInfo(param: TagsApiListTagCategoriesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTagCategoriesResponse>> {
        return this.api.listTagCategoriesWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategories(param: TagsApiListTagCategoriesRequest = {}, options?: ConfigurationOptions): Promise<ListTagCategoriesResponse> {
        return this.api.listTagCategories(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsWithHttpInfo(param: TagsApiListTagsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTagsResponse>> {
        return this.api.listTagsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTags(param: TagsApiListTagsRequest = {}, options?: ConfigurationOptions): Promise<ListTagsResponse> {
        return this.api.listTags(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsWithHttpInfo(param: TagsApiRemoveTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeTagsWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTags(param: TagsApiRemoveTagsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeTags(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTagWithHttpInfo(param: TagsApiUpdateTagRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateTagResponse>> {
        return this.api.updateTagWithHttpInfo(param.tagId, param.createUpdateTagRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTag(param: TagsApiUpdateTagRequest, options?: ConfigurationOptions): Promise<UpdateTagResponse> {
        return this.api.updateTag(param.tagId, param.createUpdateTagRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategoryWithHttpInfo(param: TagsApiUpdateTagCategoryRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        return this.api.updateTagCategoryWithHttpInfo(param.tagCategoryId, param.createUpdateTagCategoryRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategory(param: TagsApiUpdateTagCategoryRequest, options?: ConfigurationOptions): Promise<UpdateTagCategoryResponse> {
        return this.api.updateTagCategory(param.tagCategoryId, param.createUpdateTagCategoryRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiCreateTaskRequest {
    /**
     * 
     * @type CreateTaskRequest
     * @memberof TaskApicreateTask
     */
    createTaskRequest: CreateTaskRequest
}

export interface TaskApiCreateTaskCustomFieldRequest {
    /**
     * 
     * @type CreateCustomFieldRequest
     * @memberof TaskApicreateTaskCustomField
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface TaskApiDeleteTaskRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApideleteTask
     */
    taskId: string
}

export interface TaskApiDeleteTaskCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApideleteTaskCustomField
     */
    customFieldId: string
}

export interface TaskApiGetTaskRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApigetTask
     */
    taskId: string
}

export interface TaskApiListTasksRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasks
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasks
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TaskApilistTasks
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasks
     */
    pageToken?: string
}

export interface TaskApiRetrieveTaskModelRequest {
}

export interface TaskApiUpdateTaskRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApiupdateTask
     */
    taskId: string
    /**
     * 
     * @type CreateUpdateTaskRequest
     * @memberof TaskApiupdateTask
     */
    createUpdateTaskRequest: CreateUpdateTaskRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof TaskApiupdateTask
     */
    updateMask?: any
}

export interface TaskApiUpdateTaskCustomFieldRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApiupdateTaskCustomField
     */
    customFieldId: string
    /**
     * 
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof TaskApiupdateTaskCustomField
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof TaskApiupdateTaskCustomField
     */
    updateMask?: any
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTaskWithHttpInfo(param: TaskApiCreateTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<Task>> {
        return this.api.createTaskWithHttpInfo(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTask(param: TaskApiCreateTaskRequest, options?: ConfigurationOptions): Promise<Task> {
        return this.api.createTask(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomFieldWithHttpInfo(param: TaskApiCreateTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateCustomFieldResponse>> {
        return this.api.createTaskCustomFieldWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomField(param: TaskApiCreateTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<CreateCustomFieldResponse> {
        return this.api.createTaskCustomField(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTaskWithHttpInfo(param: TaskApiDeleteTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTaskWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTask(param: TaskApiDeleteTaskRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTask(param.taskId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomFieldWithHttpInfo(param: TaskApiDeleteTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTaskCustomFieldWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomField(param: TaskApiDeleteTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTaskCustomField(param.customFieldId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTaskWithHttpInfo(param: TaskApiGetTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<Task>> {
        return this.api.getTaskWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTask(param: TaskApiGetTaskRequest, options?: ConfigurationOptions): Promise<Task> {
        return this.api.getTask(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasksWithHttpInfo(param: TaskApiListTasksRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTasksResponse>> {
        return this.api.listTasksWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasks(param: TaskApiListTasksRequest = {}, options?: ConfigurationOptions): Promise<ListTasksResponse> {
        return this.api.listTasks(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModelWithHttpInfo(param: TaskApiRetrieveTaskModelRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveTaskModelWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModel(param: TaskApiRetrieveTaskModelRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveTaskModel( options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public updateTaskWithHttpInfo(param: TaskApiUpdateTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateTaskResponse>> {
        return this.api.updateTaskWithHttpInfo(param.taskId, param.createUpdateTaskRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public updateTask(param: TaskApiUpdateTaskRequest, options?: ConfigurationOptions): Promise<UpdateTaskResponse> {
        return this.api.updateTask(param.taskId, param.createUpdateTaskRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomFieldWithHttpInfo(param: TaskApiUpdateTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateTaskCustomFieldWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomField(param: TaskApiUpdateTaskCustomFieldRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateTaskCustomField(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableUserGroupsApi } from "./ObservableAPI";
import { UserGroupsApiRequestFactory, UserGroupsApiResponseProcessor} from "../apis/UserGroupsApi";

export interface UserGroupsApiGetUserGroupRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsApigetUserGroup
     */
    userGroupId: string
}

export interface UserGroupsApiListUserGroupsRequest {
}

export class ObjectUserGroupsApi {
    private api: ObservableUserGroupsApi

    public constructor(configuration: Configuration, requestFactory?: UserGroupsApiRequestFactory, responseProcessor?: UserGroupsApiResponseProcessor) {
        this.api = new ObservableUserGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param param the request object
     */
    public getUserGroupWithHttpInfo(param: UserGroupsApiGetUserGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroup>> {
        return this.api.getUserGroupWithHttpInfo(param.userGroupId,  options).toPromise();
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param param the request object
     */
    public getUserGroup(param: UserGroupsApiGetUserGroupRequest, options?: ConfigurationOptions): Promise<UserGroup> {
        return this.api.getUserGroup(param.userGroupId,  options).toPromise();
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     * @param param the request object
     */
    public listUserGroupsWithHttpInfo(param: UserGroupsApiListUserGroupsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListUserGroupsResponse>> {
        return this.api.listUserGroupsWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     * @param param the request object
     */
    public listUserGroups(param: UserGroupsApiListUserGroupsRequest = {}, options?: ConfigurationOptions): Promise<ListUserGroupsResponse> {
        return this.api.listUserGroups( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiGetUserByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetUserById
     */
    userId: string
}

export interface UsersApiGetUserInfoRequest {
}

export interface UsersApiGetUserSignatureRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetUserSignature
     */
    userId: string
}

export interface UsersApiListPaginatedUsersRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApilistPaginatedUsers
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof UsersApilistPaginatedUsers
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof UsersApilistPaginatedUsers
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof UsersApilistPaginatedUsers
     */
    pageToken?: string
}

export interface UsersApiUpdateUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdateUser
     */
    userId: string
    /**
     * 
     * @type UpdateUserRequest
     * @memberof UsersApiupdateUser
     */
    updateUserRequest: UpdateUserRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type any
     * @memberof UsersApiupdateUser
     */
    updateMask?: any
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserByIdWithHttpInfo(param: UsersApiGetUserByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.getUserByIdWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserById(param: UsersApiGetUserByIdRequest, options?: ConfigurationOptions): Promise<User> {
        return this.api.getUserById(param.userId,  options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfoWithHttpInfo(param: UsersApiGetUserInfoRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetUserInfoResponse>> {
        return this.api.getUserInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfo(param: UsersApiGetUserInfoRequest = {}, options?: ConfigurationOptions): Promise<GetUserInfoResponse> {
        return this.api.getUserInfo( options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignatureWithHttpInfo(param: UsersApiGetUserSignatureRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getUserSignatureWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignature(param: UsersApiGetUserSignatureRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.getUserSignature(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listPaginatedUsersWithHttpInfo(param: UsersApiListPaginatedUsersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListUsersPaginatedResponse>> {
        return this.api.listPaginatedUsersWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listPaginatedUsers(param: UsersApiListPaginatedUsersRequest = {}, options?: ConfigurationOptions): Promise<ListUsersPaginatedResponse> {
        return this.api.listPaginatedUsers(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: UsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.updateUserWithHttpInfo(param.userId, param.updateUserRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public updateUser(param: UsersApiUpdateUserRequest, options?: ConfigurationOptions): Promise<User> {
        return this.api.updateUser(param.userId, param.updateUserRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableWebformsApi } from "./ObservableAPI";
import { WebformsApiRequestFactory, WebformsApiResponseProcessor} from "../apis/WebformsApi";

export interface WebformsApiGetHtmlRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WebformsApigetHtml
     */
    webformId: string
}

export interface WebformsApiListWebformsRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;webform_type&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DContact Us&#x60; - &#x60;filter&#x3D;webform_type%3D%3Dlegacy&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof WebformsApilistWebforms
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;webform_type&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof WebformsApilistWebforms
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 0
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof WebformsApilistWebforms
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof WebformsApilistWebforms
     */
    pageToken?: string
}

export class ObjectWebformsApi {
    private api: ObservableWebformsApi

    public constructor(configuration: Configuration, requestFactory?: WebformsApiRequestFactory, responseProcessor?: WebformsApiResponseProcessor) {
        this.api = new ObservableWebformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param param the request object
     */
    public getHtmlWithHttpInfo(param: WebformsApiGetHtmlRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getHtmlWithHttpInfo(param.webformId,  options).toPromise();
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param param the request object
     */
    public getHtml(param: WebformsApiGetHtmlRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.getHtml(param.webformId,  options).toPromise();
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param param the request object
     */
    public listWebformsWithHttpInfo(param: WebformsApiListWebformsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListWebformsResponse>> {
        return this.api.listWebformsWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param param the request object
     */
    public listWebforms(param: WebformsApiListWebformsRequest = {}, options?: ConfigurationOptions): Promise<ListWebformsResponse> {
        return this.api.listWebforms(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}
