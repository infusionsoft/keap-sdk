import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
import { AddProductInterestRequest } from '../models/AddProductInterestRequest';
import { AddToAutomationSequenceRequest } from '../models/AddToAutomationSequenceRequest';
import { AddToAutomationSequenceResponse } from '../models/AddToAutomationSequenceResponse';
import { Address } from '../models/Address';
import { AddressInformation } from '../models/AddressInformation';
import { AffiliateAddToProgramRequest } from '../models/AffiliateAddToProgramRequest';
import { AffiliateCommission } from '../models/AffiliateCommission';
import { AffiliateCommissionEarned } from '../models/AffiliateCommissionEarned';
import { AffiliateCommissionProgramResponse } from '../models/AffiliateCommissionProgramResponse';
import { AffiliateLink } from '../models/AffiliateLink';
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
import { ApplyRemoveTagRequest } from '../models/ApplyRemoveTagRequest';
import { ApplyTagsResponse } from '../models/ApplyTagsResponse';
import { AssignProductCategoriesRequest } from '../models/AssignProductCategoriesRequest';
import { AssignProductsRequest } from '../models/AssignProductsRequest';
import { Automation } from '../models/Automation';
import { AutomationCategory } from '../models/AutomationCategory';
import { AutomationLockStatus } from '../models/AutomationLockStatus';
import { BasicCompany } from '../models/BasicCompany';
import { BasicContact } from '../models/BasicContact';
import { BasicUser } from '../models/BasicUser';
import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
import { Campaign } from '../models/Campaign';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
import { CardInfo } from '../models/CardInfo';
import { CategoryDiscount } from '../models/CategoryDiscount';
import { CategoryReference } from '../models/CategoryReference';
import { CheckListItemDetails } from '../models/CheckListItemDetails';
import { ChecklistItem } from '../models/ChecklistItem';
import { Company } from '../models/Company';
import { Contact } from '../models/Contact';
import { ContactLink } from '../models/ContactLink';
import { ContactLinkType } from '../models/ContactLinkType';
import { ContactUtmResponse } from '../models/ContactUtmResponse';
import { Country } from '../models/Country';
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
import { CreateFunnelIntegrationRequest } from '../models/CreateFunnelIntegrationRequest';
import { CreateFunnelIntegrationTriggerEvents } from '../models/CreateFunnelIntegrationTriggerEvents';
import { CreateLeadSourceExpenseRequest } from '../models/CreateLeadSourceExpenseRequest';
import { CreateLeadSourceRecurringExpenseRequest } from '../models/CreateLeadSourceRecurringExpenseRequest';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { CreateNoteRequest } from '../models/CreateNoteRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageChecklistItem } from '../models/CreateOpportunityStageChecklistItem';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CreateOrUpdateAffiliateLinkRequest } from '../models/CreateOrUpdateAffiliateLinkRequest';
import { CreateOrderTotalDiscountRequest } from '../models/CreateOrderTotalDiscountRequest';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { CreatePaymentRequest } from '../models/CreatePaymentRequest';
import { CreateProductCategoryRequest } from '../models/CreateProductCategoryRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateProductDiscountRequest } from '../models/CreateProductDiscountRequest';
import { CreateProductInterestBundleRequest } from '../models/CreateProductInterestBundleRequest';
import { CreateProductRequest } from '../models/CreateProductRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CreateShippingDiscountRequest } from '../models/CreateShippingDiscountRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateSubscriptionPlanRequest } from '../models/CreateSubscriptionPlanRequest';
import { CreateSubscriptionV2 } from '../models/CreateSubscriptionV2';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CreateUpdateContactRequest } from '../models/CreateUpdateContactRequest';
import { CreateUpdateLeadSourceCategoryRequest } from '../models/CreateUpdateLeadSourceCategoryRequest';
import { CreateUpdateTagCategoryRequest } from '../models/CreateUpdateTagCategoryRequest';
import { CreateUpdateTagRequest } from '../models/CreateUpdateTagRequest';
import { CreateUpdateTaskRequest } from '../models/CreateUpdateTaskRequest';
import { CreateUserRequestV2 } from '../models/CreateUserRequestV2';
import { CurrencyValue } from '../models/CurrencyValue';
import { CustomField } from '../models/CustomField';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { CustomFieldOption } from '../models/CustomFieldOption';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { DefaultCommission } from '../models/DefaultCommission';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteProgramCommissionRequest } from '../models/DeleteProgramCommissionRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { Discount } from '../models/Discount';
import { DiscountCriteria } from '../models/DiscountCriteria';
import { EmailAddress } from '../models/EmailAddress';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { EmailAddressStatus } from '../models/EmailAddressStatus';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { EmailSendTemplateRequest } from '../models/EmailSendTemplateRequest';
import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailTemplate } from '../models/EmailTemplate';
import { EmailsSentList } from '../models/EmailsSentList';
import { ErrorDetails } from '../models/ErrorDetails';
import { FaxNumber } from '../models/FaxNumber';
import { FileMetadata } from '../models/FileMetadata';
import { FileOperationRequest } from '../models/FileOperationRequest';
import { FreeTrialDiscount } from '../models/FreeTrialDiscount';
import { FunnelIntegrationAction } from '../models/FunnelIntegrationAction';
import { FunnelIntegrationHttpRequest } from '../models/FunnelIntegrationHttpRequest';
import { FunnelIntegrationSchemaField } from '../models/FunnelIntegrationSchemaField';
import { FunnelIntegrationTriggerEventDTO } from '../models/FunnelIntegrationTriggerEventDTO';
import { FunnelIntegrationTriggerResultDTO } from '../models/FunnelIntegrationTriggerResultDTO';
import { GetApplicationEnabledStatusResponse } from '../models/GetApplicationEnabledStatusResponse';
import { GetBusinessProfileResponse } from '../models/GetBusinessProfileResponse';
import { GetContactOptionTypesResponse } from '../models/GetContactOptionTypesResponse';
import { GetNoteResponse } from '../models/GetNoteResponse';
import { GetSettingsResponse } from '../models/GetSettingsResponse';
import { GetTagCategoryResponse } from '../models/GetTagCategoryResponse';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { Goal } from '../models/Goal';
import { HistoricalCounts } from '../models/HistoricalCounts';
import { InvoiceFile } from '../models/InvoiceFile';
import { InvoiceOrderPayment } from '../models/InvoiceOrderPayment';
import { Item } from '../models/Item';
import { LandingPage } from '../models/LandingPage';
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
import { ListAffiliateSummariesResponse } from '../models/ListAffiliateSummariesResponse';
import { ListAutomationCategoryResponse } from '../models/ListAutomationCategoryResponse';
import { ListAutomationIdsResponse } from '../models/ListAutomationIdsResponse';
import { ListAutomationResponse } from '../models/ListAutomationResponse';
import { ListBasicContactResponse } from '../models/ListBasicContactResponse';
import { ListCampaignsResponse } from '../models/ListCampaignsResponse';
import { ListCategoryDiscountsResponse } from '../models/ListCategoryDiscountsResponse';
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListFilesResponse } from '../models/ListFilesResponse';
import { ListFreeTrialDiscountsResponse } from '../models/ListFreeTrialDiscountsResponse';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
import { ListLeadSourceCategoriesResponse } from '../models/ListLeadSourceCategoriesResponse';
import { ListLeadSourceExpensesResponse } from '../models/ListLeadSourceExpensesResponse';
import { ListLeadSourceRecurringExpensesResponse } from '../models/ListLeadSourceRecurringExpensesResponse';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListNoteTemplateResponse } from '../models/ListNoteTemplateResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOrderPaymentsResponse } from '../models/ListOrderPaymentsResponse';
import { ListOrderTotalDiscountsResponse } from '../models/ListOrderTotalDiscountsResponse';
import { ListOrders } from '../models/ListOrders';
import { ListPaymentMethodsResponse } from '../models/ListPaymentMethodsResponse';
import { ListProductCategoriesResponse } from '../models/ListProductCategoriesResponse';
import { ListProductDiscountsResponse } from '../models/ListProductDiscountsResponse';
import { ListProductInterestBundleResponse } from '../models/ListProductInterestBundleResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ListRestMerchantAccountResponse } from '../models/ListRestMerchantAccountResponse';
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListShippingDiscountsResponse } from '../models/ListShippingDiscountsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListTransactionsResponse } from '../models/ListTransactionsResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { ModelError } from '../models/ModelError';
import { ModelFile } from '../models/ModelFile';
import { Note } from '../models/Note';
import { NoteTemplate } from '../models/NoteTemplate';
import { ObjectModel } from '../models/ObjectModel';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { OrderItemProduct } from '../models/OrderItemProduct';
import { OrderItemTax } from '../models/OrderItemTax';
import { OrderTotalDiscount } from '../models/OrderTotalDiscount';
import { Origin } from '../models/Origin';
import { OriginRequest } from '../models/OriginRequest';
import { PatchAutomationCategoryRequest } from '../models/PatchAutomationCategoryRequest';
import { PaymentMethod } from '../models/PaymentMethod';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
import { PaymentPlan } from '../models/PaymentPlan';
import { PaymentResult } from '../models/PaymentResult';
import { PhoneNumber } from '../models/PhoneNumber';
import { ProductCategory } from '../models/ProductCategory';
import { ProductCommission } from '../models/ProductCommission';
import { ProductCommissionProgram } from '../models/ProductCommissionProgram';
import { ProductDiscount } from '../models/ProductDiscount';
import { ProductFixedOption } from '../models/ProductFixedOption';
import { ProductInterest } from '../models/ProductInterest';
import { ProductInterestBundle } from '../models/ProductInterestBundle';
import { ProductInventory } from '../models/ProductInventory';
import { ProductOptions } from '../models/ProductOptions';
import { ProductVariableSetting } from '../models/ProductVariableSetting';
import { Provinces } from '../models/Provinces';
import { Referral } from '../models/Referral';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
import { Report } from '../models/Report';
import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { ReportEntryValue } from '../models/ReportEntryValue';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { Resource } from '../models/Resource';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestApplyCommissionRequest } from '../models/RestApplyCommissionRequest';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestProductOption } from '../models/RestProductOption';
import { RestProductOptionValue } from '../models/RestProductOptionValue';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { RestV2Product } from '../models/RestV2Product';
import { RestV2Subscription } from '../models/RestV2Subscription';
import { RestV2User } from '../models/RestV2User';
import { SaveAutomationCategoryRequest } from '../models/SaveAutomationCategoryRequest';
import { Sequence } from '../models/Sequence';
import { SequencePath } from '../models/SequencePath';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { ShippingDiscount } from '../models/ShippingDiscount';
import { ShippingInformation } from '../models/ShippingInformation';
import { ShippingMethod } from '../models/ShippingMethod';
import { SocialAccount } from '../models/SocialAccount';
import { StackTraceElement } from '../models/StackTraceElement';
import { StageDetails } from '../models/StageDetails';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { Tag } from '../models/Tag';
import { TaggedCompany } from '../models/TaggedCompany';
import { Task } from '../models/Task';
import { Throwable } from '../models/Throwable';
import { Transaction } from '../models/Transaction';
import { URI } from '../models/URI';
import { URL } from '../models/URL';
import { UpdateAffiliateRequest } from '../models/UpdateAffiliateRequest';
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
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
import { UpdateProductInventoryRequest } from '../models/UpdateProductInventoryRequest';
import { UpdateProductRequest } from '../models/UpdateProductRequest';
import { UpdateShippingDiscountRequest } from '../models/UpdateShippingDiscountRequest';
import { UpdateSubscriptionCommissionProgramRequest } from '../models/UpdateSubscriptionCommissionProgramRequest';
import { UpdateSubscriptionPlanRequest } from '../models/UpdateSubscriptionPlanRequest';
import { UpdateSubscriptionRequest } from '../models/UpdateSubscriptionRequest';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { UpdatedPaymentPlan } from '../models/UpdatedPaymentPlan';
import { User } from '../models/User';

import { ObservableAffiliateApi } from "./ObservableAPI";
import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";

export interface AffiliateApiAddAffiliateToProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiaddAffiliateToProgramUsingPOST
     */
    id: string
    /**
     * affiliateAddToProgramRequest
     * @type AffiliateAddToProgramRequest
     * @memberof AffiliateApiaddAffiliateToProgramUsingPOST
     */
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest
}

export interface AffiliateApiAddAffiliateUsingPOSTRequest {
    /**
     * Affiliate request to insert
     * @type CreateAffiliateRequest
     * @memberof AffiliateApiaddAffiliateUsingPOST
     */
    createAffiliateRequest?: CreateAffiliateRequest
}

export interface AffiliateApiAddCommissionProgramUsingPOSTRequest {
    /**
     * Commission Program to insert
     * @type CreateCommissionProgramRequest
     * @memberof AffiliateApiaddCommissionProgramUsingPOST
     */
    createCommissionProgramRequest?: CreateCommissionProgramRequest
}

export interface AffiliateApiAssignProductCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignProductCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Product Commission Program
     * @type CreateProductCommissionProgramRequest
     * @memberof AffiliateApiassignProductCommissionProgramUsingPOST
     */
    createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest
}

export interface AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignSubscriptionCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Subscription Commission Program
     * @type CreateSubscriptionCommissionProgramRequest
     * @memberof AffiliateApiassignSubscriptionCommissionProgramUsingPOST
     */
    createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest
}

export interface AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApicreateDefaultCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Values of the Default Commission Program
     * @type CreateDefaultCommissionProgramRequest
     * @memberof AffiliateApicreateDefaultCommissionProgramUsingPOST
     */
    createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest
}

export interface AffiliateApiCreateRedirectLinkUsingPOSTRequest {
    /**
     * request
     * @type CreateOrUpdateAffiliateLinkRequest
     * @memberof AffiliateApicreateRedirectLinkUsingPOST
     */
    createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest
}

export interface AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateCommissionProgramUsingDELETE
     */
    commissionProgramId: string
}

export interface AffiliateApiDeleteAffiliateUsingDELETERequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateUsingDELETE
     */
    id: string
}

export interface AffiliateApiDeleteRedirectLinkUsingDELETERequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteRedirectLinkUsingDELETE
     */
    redirectId: string
}

export interface AffiliateApiGetAffiliateCommissionTotalUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionTotalUsingGET
     */
    affiliateId: string
}

export interface AffiliateApiGetAffiliateCommissionsUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    affiliateId: string
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiGetAffiliateUsingGET1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateUsingGET1
     */
    id: string
}

export interface AffiliateApiGetCommissionProgramUsingGETRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetCommissionProgramUsingGET
     */
    commissionProgramId: string
}

export interface AffiliateApiGetRedirectLinkUsingGETRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetRedirectLinkUsingGET
     */
    redirectId: string
}

export interface AffiliateApiListAffiliateCommissionProgramsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiListAffiliateLinksUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiListSummariesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    pageToken?: string
}

export interface AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveAffiliateFromProgramUsingPOST
     */
    id: string
    /**
     * removeFromProgramRequest
     * @type AffiliateRemoveFromProgramRequest
     * @memberof AffiliateApiremoveAffiliateFromProgramUsingPOST
     */
    affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest
}

export interface AffiliateApiRemoveProductCommissionFromCommissionsUsingPOSTRequest {
    /**
     * commission_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveProductCommissionFromCommissionsUsingPOST
     */
    commissionId: string
    /**
     * deleteProgramCommissionRequest
     * @type DeleteProgramCommissionRequest
     * @memberof AffiliateApiremoveProductCommissionFromCommissionsUsingPOST
     */
    deleteProgramCommissionRequest: DeleteProgramCommissionRequest
}

export interface AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest {
    /**
     * commission_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    commissionId: string
    /**
     * deleteSubscriptionPlanCommissionRequest
     * @type DeleteSubscriptionPlanCommissionRequest
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest
}

export interface AffiliateApiUpdateAffiliateUsingPATCHRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateAffiliateUsingPATCH
     */
    id: string
    /**
     * Request to update an affiliate
     * @type UpdateAffiliateRequest
     * @memberof AffiliateApiupdateAffiliateUsingPATCH
     */
    updateAffiliateRequest?: UpdateAffiliateRequest
}

export interface AffiliateApiUpdateCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * updateCommissionProgramRequest
     * @type UpdateCommissionProgramRequest
     * @memberof AffiliateApiupdateCommissionProgramUsingPATCH
     */
    updateCommissionProgramRequest: UpdateCommissionProgramRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApiupdateCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
}

export interface AffiliateApiUpdateDefaultCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateDefaultCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApiupdateDefaultCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the default Commission Program
     * @type UpdateDefaultCommissionProgramRequest
     * @memberof AffiliateApiupdateDefaultCommissionProgramUsingPATCH
     */
    updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest
}

export interface AffiliateApiUpdateProductCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateProductCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApiupdateProductCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the product Commission Program
     * @type UpdateProductCommissionProgramRequest
     * @memberof AffiliateApiupdateProductCommissionProgramUsingPATCH
     */
    updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest
}

export interface AffiliateApiUpdateRedirectLinkUsingPATCHRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateRedirectLinkUsingPATCH
     */
    redirectId: string
    /**
     * request
     * @type CreateOrUpdateAffiliateLinkRequest
     * @memberof AffiliateApiupdateRedirectLinkUsingPATCH
     */
    createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest
}

export interface AffiliateApiUpdateSubscriptionCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateSubscriptionCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApiupdateSubscriptionCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the subscription Commission Program
     * @type UpdateSubscriptionCommissionProgramRequest
     * @memberof AffiliateApiupdateSubscriptionCommissionProgramUsingPATCH
     */
    updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest
}

export class ObjectAffiliateApi {
    private api: ObservableAffiliateApi

    public constructor(configuration: Configuration, requestFactory?: AffiliateApiRequestFactory, responseProcessor?: AffiliateApiResponseProcessor) {
        this.api = new ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateToProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOST(param: AffiliateApiAddAffiliateToProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.addAffiliateToProgramUsingPOST(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.addAffiliateUsingPOSTWithHttpInfo(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateUsingPOST(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.addAffiliateUsingPOST(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAddCommissionProgramUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.addCommissionProgramUsingPOSTWithHttpInfo(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOST(param: AffiliateApiAddCommissionProgramUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        return this.api.addCommissionProgramUsingPOST(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignProductCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOST(param: AffiliateApiAssignProductCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<ProductCommissionProgram> {
        return this.api.assignProductCommissionProgramUsingPOST(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOST(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        return this.api.assignSubscriptionCommissionProgramUsingPOST(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOST(param: AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.createDefaultCommissionProgramUsingPOST(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(param: AffiliateApiCreateRedirectLinkUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.createRedirectLinkUsingPOSTWithHttpInfo(param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOST(param: AffiliateApiCreateRedirectLinkUsingPOSTRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.createRedirectLinkUsingPOST(param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETE(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETE(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateUsingDELETEWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETE(param: AffiliateApiDeleteAffiliateUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAffiliateUsingDELETE(param.id,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(param: AffiliateApiDeleteRedirectLinkUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETE(param: AffiliateApiDeleteRedirectLinkUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteRedirectLinkUsingDELETE(param.redirectId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionTotalUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionEarned>> {
        return this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(param.affiliateId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGET(param: AffiliateApiGetAffiliateCommissionTotalUsingGETRequest, options?: ConfigurationOptions): Promise<AffiliateCommissionEarned> {
        return this.api.getAffiliateCommissionTotalUsingGET(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionsUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionsResponse>> {
        return this.api.getAffiliateCommissionsUsingGETWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGET(param: AffiliateApiGetAffiliateCommissionsUsingGETRequest, options?: ConfigurationOptions): Promise<ListAffiliateCommissionsResponse> {
        return this.api.getAffiliateCommissionsUsingGET(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1WithHttpInfo(param: AffiliateApiGetAffiliateUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.getAffiliateUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1(param: AffiliateApiGetAffiliateUsingGET1Request, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.getAffiliateUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGETWithHttpInfo(param: AffiliateApiGetCommissionProgramUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateProgramV2>> {
        return this.api.getCommissionProgramUsingGETWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGET(param: AffiliateApiGetCommissionProgramUsingGETRequest, options?: ConfigurationOptions): Promise<AffiliateProgramV2> {
        return this.api.getCommissionProgramUsingGET(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGETWithHttpInfo(param: AffiliateApiGetRedirectLinkUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.getRedirectLinkUsingGETWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGET(param: AffiliateApiGetRedirectLinkUsingGETRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.getRedirectLinkUsingGET(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(param: AffiliateApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        return this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGET(param: AffiliateApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliateCommissionProgramsResponse> {
        return this.api.listAffiliateCommissionProgramsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGETWithHttpInfo(param: AffiliateApiListAffiliateLinksUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        return this.api.listAffiliateLinksUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGET(param: AffiliateApiListAffiliateLinksUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListAffiliateLinksResponse> {
        return this.api.listAffiliateLinksUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1WithHttpInfo(param: AffiliateApiListSummariesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        return this.api.listSummariesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1(param: AffiliateApiListSummariesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListAffiliateSummariesResponse> {
        return this.api.listSummariesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(param: AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOST(param: AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeAffiliateFromProgramUsingPOST(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param param the request object
     */
    public removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(param: AffiliateApiRemoveProductCommissionFromCommissionsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteProgramCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param param the request object
     */
    public removeProductCommissionFromCommissionsUsingPOST(param: AffiliateApiRemoveProductCommissionFromCommissionsUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeProductCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteProgramCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        return this.api.updateAffiliateUsingPATCHWithHttpInfo(param.id, param.updateAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCH(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: ConfigurationOptions): Promise<RestAffiliate> {
        return this.api.updateAffiliateUsingPATCH(param.id, param.updateAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiUpdateCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.updateCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgramUsingPATCH(param: AffiliateApiUpdateCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        return this.api.updateCommissionProgramUsingPATCH(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public updateDefaultCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiUpdateDefaultCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.updateDefaultCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.updateDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public updateDefaultCommissionProgramUsingPATCH(param: AffiliateApiUpdateDefaultCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.updateDefaultCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.updateDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public updateProductCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiUpdateProductCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.updateProductCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.updateProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public updateProductCommissionProgramUsingPATCH(param: AffiliateApiUpdateProductCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<ProductCommissionProgram> {
        return this.api.updateProductCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.updateProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(param: AffiliateApiUpdateRedirectLinkUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        return this.api.updateRedirectLinkUsingPATCHWithHttpInfo(param.redirectId, param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCH(param: AffiliateApiUpdateRedirectLinkUsingPATCHRequest, options?: ConfigurationOptions): Promise<AffiliateLink> {
        return this.api.updateRedirectLinkUsingPATCH(param.redirectId, param.createOrUpdateAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiUpdateSubscriptionCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.updateSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public updateSubscriptionCommissionProgramUsingPATCH(param: AffiliateApiUpdateSubscriptionCommissionProgramUsingPATCHRequest, options?: ConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        return this.api.updateSubscriptionCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.updateSubscriptionCommissionProgramRequest,  options).toPromise();
    }

}

import { ObservableAutomationApi } from "./ObservableAPI";
import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";

export interface AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest {
    /**
     * automation_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    automationId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    sequenceId: string
    /**
     * addToAutomationSequenceRequest
     * @type AddToAutomationSequenceRequest
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    addToAutomationSequenceRequest: AddToAutomationSequenceRequest
}

export interface AutomationApiDeleteAutomationUsingDELETERequest {
    /**
     * automation_ids
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationApideleteAutomationUsingDELETE
     */
    automationIds: Array<number>
}

export interface AutomationApiGetAutomationUsingGETRequest {
    /**
     * automation_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApigetAutomationUsingGET
     */
    automationId: string
}

export interface AutomationApiListAllAutomationIdsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 25
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    stats?: boolean
}

export interface AutomationApiListAutomationsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 25
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAutomationsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AutomationApilistAutomationsUsingGET
     */
    stats?: boolean
}

export interface AutomationApiUpdateAutomationCategoryUsingPUTRequest {
    /**
     * updateAutomationCategoryRequest
     * @type UpdateAutomationCategoryRequest
     * @memberof AutomationApiupdateAutomationCategoryUsingPUT
     */
    updateAutomationCategoryRequest: UpdateAutomationCategoryRequest
}

export class ObjectAutomationApi {
    private api: ObservableAutomationApi

    public constructor(configuration: Configuration, requestFactory?: AutomationApiRequestFactory, responseProcessor?: AutomationApiResponseProcessor) {
        this.api = new ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        return this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceUsingPOST(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: ConfigurationOptions): Promise<AddToAutomationSequenceResponse> {
        return this.api.addContactsToAutomationSequenceUsingPOST(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETEWithHttpInfo(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteAutomationUsingDELETEWithHttpInfo(param.automationIds,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETE(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteAutomationUsingDELETE(param.automationIds,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGETWithHttpInfo(param: AutomationApiGetAutomationUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Automation>> {
        return this.api.getAutomationUsingGETWithHttpInfo(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGET(param: AutomationApiGetAutomationUsingGETRequest, options?: ConfigurationOptions): Promise<Automation> {
        return this.api.getAutomationUsingGET(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGETWithHttpInfo(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationIdsResponse>> {
        return this.api.listAllAutomationIdsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGET(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationIdsResponse> {
        return this.api.listAllAutomationIdsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGETWithHttpInfo(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationResponse>> {
        return this.api.listAutomationsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGET(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationResponse> {
        return this.api.listAutomationsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateAutomationCategoryUsingPUTWithHttpInfo(param.updateAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUT(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateAutomationCategoryUsingPUT(param.updateAutomationCategoryRequest,  options).toPromise();
    }

}

import { ObservableAutomationCategoryApi } from "./ObservableAPI";
import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";

export interface AutomationCategoryApiCreateCategoryUsingPOSTRequest {
    /**
     * createAutomationCategoryRequest
     * @type CreateAutomationCategoryRequest
     * @memberof AutomationCategoryApicreateCategoryUsingPOST
     */
    createAutomationCategoryRequest: CreateAutomationCategoryRequest
}

export interface AutomationCategoryApiDeleteCategoriesUsingDELETERequest {
    /**
     * ids
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationCategoryApideleteCategoriesUsingDELETE
     */
    ids: Array<number>
}

export interface AutomationCategoryApiListCategoriesUsingGETRequest {
}

export interface AutomationCategoryApiPatchCategoryUsingPATCHRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationCategoryApipatchCategoryUsingPATCH
     */
    id: string
    /**
     * patchAutomationCategoryRequest
     * @type PatchAutomationCategoryRequest
     * @memberof AutomationCategoryApipatchCategoryUsingPATCH
     */
    patchAutomationCategoryRequest: PatchAutomationCategoryRequest
}

export interface AutomationCategoryApiSaveCategoryUsingPUTRequest {
    /**
     * saveAutomationCategoryRequest
     * @type SaveAutomationCategoryRequest
     * @memberof AutomationCategoryApisaveCategoryUsingPUT
     */
    saveAutomationCategoryRequest: SaveAutomationCategoryRequest
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
    public createCategoryUsingPOSTWithHttpInfo(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        return this.api.createCategoryUsingPOSTWithHttpInfo(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategoryUsingPOST(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: ConfigurationOptions): Promise<AutomationCategory> {
        return this.api.createCategoryUsingPOST(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCategoriesUsingDELETEWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETE(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCategoriesUsingDELETE(param.ids,  options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGETWithHttpInfo(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        return this.api.listCategoriesUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGET(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListAutomationCategoryResponse> {
        return this.api.listCategoriesUsingGET( options).toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param param the request object
     */
    public patchCategoryUsingPATCHWithHttpInfo(param: AutomationCategoryApiPatchCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        return this.api.patchCategoryUsingPATCHWithHttpInfo(param.id, param.patchAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param param the request object
     */
    public patchCategoryUsingPATCH(param: AutomationCategoryApiPatchCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<AutomationCategory> {
        return this.api.patchCategoryUsingPATCH(param.id, param.patchAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUTWithHttpInfo(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        return this.api.saveCategoryUsingPUTWithHttpInfo(param.saveAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUT(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: ConfigurationOptions): Promise<AutomationCategory> {
        return this.api.saveCategoryUsingPUT(param.saveAutomationCategoryRequest,  options).toPromise();
    }

}

import { ObservableBusinessProfileApi } from "./ObservableAPI";
import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";

export interface BusinessProfileApiGetBusinessProfileUsingGETRequest {
}

export interface BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest {
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BusinessProfileApiupdateBusinessProfileUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * businessProfile
     * @type UpdateBusinessProfileRequest
     * @memberof BusinessProfileApiupdateBusinessProfileUsingPATCH
     */
    updateBusinessProfileRequest?: UpdateBusinessProfileRequest
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
    public getBusinessProfileUsingGETWithHttpInfo(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.getBusinessProfileUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfileUsingGET(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: ConfigurationOptions): Promise<GetBusinessProfileResponse> {
        return this.api.getBusinessProfileUsingGET( options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfileUsingPATCHWithHttpInfo(param: BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.updateBusinessProfileUsingPATCHWithHttpInfo(param.updateMask, param.updateBusinessProfileRequest,  options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfileUsingPATCH(param: BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest = {}, options?: ConfigurationOptions): Promise<GetBusinessProfileResponse> {
        return this.api.updateBusinessProfileUsingPATCH(param.updateMask, param.updateBusinessProfileRequest,  options).toPromise();
    }

}

import { ObservableCampaignApi } from "./ObservableAPI";
import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";

export interface CampaignApiAddContactsToCampaignSequenceUsingPOST1Request {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    campaignId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    sequenceId: string
    /**
     * addContactsToSequenceRequest
     * @type AddContactsToSequenceRequest
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    addContactsToSequenceRequest: AddContactsToSequenceRequest
}

export interface CampaignApiGetCampaignUsingGET1Request {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApigetCampaignUsingGET1
     */
    campaignId: string
}

export interface CampaignApiListCampaignsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    stats?: boolean
}

export interface CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
     */
    campaignId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
     */
    sequenceId: string
    /**
     * removeContactsFromSequenceRequest
     * @type RemoveContactsFromSequenceRequest
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
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
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        return this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequenceUsingPOST1(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: ConfigurationOptions): Promise<AddContactsToSequenceResponse> {
        return this.api.addContactsToCampaignSequenceUsingPOST1(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1WithHttpInfo(param: CampaignApiGetCampaignUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<Campaign>> {
        return this.api.getCampaignUsingGET1WithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1(param: CampaignApiGetCampaignUsingGET1Request, options?: ConfigurationOptions): Promise<Campaign> {
        return this.api.getCampaignUsingGET1(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1WithHttpInfo(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCampaignsResponse>> {
        return this.api.listCampaignsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListCampaignsResponse> {
        return this.api.listCampaignsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        return this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOST(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: ConfigurationOptions): Promise<RemoveContactsFromSequenceResponse> {
        return this.api.removeContactsFromCampaignSequenceUsingPOST(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

}

import { ObservableCompanyApi } from "./ObservableAPI";
import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";

export interface CompanyApiCreateCompanyUsingPOST1Request {
    /**
     * company
     * @type CreateCompanyRequest
     * @memberof CompanyApicreateCompanyUsingPOST1
     */
    createCompanyRequest?: CreateCompanyRequest
}

export interface CompanyApiDeleteCompanyUsingDELETERequest {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApideleteCompanyUsingDELETE
     */
    companyId: string
}

export interface CompanyApiGetCompanyUsingGET1Request {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApigetCompanyUsingGET1
     */
    companyId: string
    /**
     * Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApigetCompanyUsingGET1
     */
    fields?: Array<string>
}

export interface CompanyApiListCompaniesUsingGET1Request {
    /**
     * Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    fields?: Array<string>
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    pageToken?: string
}

export interface CompanyApiUpdateCompanyUsingPATCH1Request {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApiupdateCompanyUsingPATCH1
     */
    companyId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApiupdateCompanyUsingPATCH1
     */
    updateMask?: Array<string>
    /**
     * company
     * @type UpdateCompanyRequest
     * @memberof CompanyApiupdateCompanyUsingPATCH1
     */
    updateCompanyRequest?: UpdateCompanyRequest
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
    public createCompanyUsingPOST1WithHttpInfo(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.createCompanyUsingPOST1WithHttpInfo(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompanyUsingPOST1(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<Company> {
        return this.api.createCompanyUsingPOST1(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETEWithHttpInfo(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCompanyUsingDELETEWithHttpInfo(param.companyId,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETE(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCompanyUsingDELETE(param.companyId,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1WithHttpInfo(param: CompanyApiGetCompanyUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.getCompanyUsingGET1WithHttpInfo(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1(param: CompanyApiGetCompanyUsingGET1Request, options?: ConfigurationOptions): Promise<Company> {
        return this.api.getCompanyUsingGET1(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1WithHttpInfo(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCompaniesResponse>> {
        return this.api.listCompaniesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListCompaniesResponse> {
        return this.api.listCompaniesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompanyUsingPATCH1WithHttpInfo(param: CompanyApiUpdateCompanyUsingPATCH1Request, options?: ConfigurationOptions): Promise<HttpInfo<Company>> {
        return this.api.updateCompanyUsingPATCH1WithHttpInfo(param.companyId, param.updateMask, param.updateCompanyRequest,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompanyUsingPATCH1(param: CompanyApiUpdateCompanyUsingPATCH1Request, options?: ConfigurationOptions): Promise<Company> {
        return this.api.updateCompanyUsingPATCH1(param.companyId, param.updateMask, param.updateCompanyRequest,  options).toPromise();
    }

}

import { ObservableContactApi } from "./ObservableAPI";
import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";

export interface ContactApiCreateContactLinkTypeUsingPOSTRequest {
    /**
     * request
     * @type CreateContactLinkTypeRequest
     * @memberof ContactApicreateContactLinkTypeUsingPOST
     */
    createContactLinkTypeRequest: CreateContactLinkTypeRequest
}

export interface ContactApiCreateContactUsingPOST1Request {
    /**
     * contact
     * @type CreateUpdateContactRequest
     * @memberof ContactApicreateContactUsingPOST1
     */
    createUpdateContactRequest?: CreateUpdateContactRequest
}

export interface ContactApiDeleteContactUsingDELETE1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApideleteContactUsingDELETE1
     */
    contactId: string
}

export interface ContactApiGetContactUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContactUsingGET1
     */
    contactId: string
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApigetContactUsingGET1
     */
    fields?: Array<string>
}

export interface ContactApiLinkContactsUsingPOSTRequest {
    /**
     * linkContactsRequest
     * @type LinkContactsRequest
     * @memberof ContactApilinkContactsUsingPOST
     */
    linkContactsRequest: LinkContactsRequest
}

export interface ContactApiListContactLinkTypesUsingGETRequest {
    /**
     * Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * Defaults to: undefined
     * @type &#39;name&#39;
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    filter?: 'name'
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    orderBy?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    pageSize?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    pageToken?: string
}

export interface ContactApiListContactLinksUsingGETRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinksUsingGET
     */
    contactId: string
}

export interface ContactApiListContactsUsingGET1Request {
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApilistContactsUsingGET1
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    pageToken?: string
}

export interface ContactApiRetrieveContactModelUsingGET1Request {
}

export interface ContactApiUnlinkContactsUsingPOSTRequest {
    /**
     * linkContactsRequest
     * @type LinkContactsRequest
     * @memberof ContactApiunlinkContactsUsingPOST
     */
    linkContactsRequest: LinkContactsRequest
}

export interface ContactApiUpdateContactUsingPATCHRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApiupdateContactUsingPATCH
     */
    contactId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApiupdateContactUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * contact
     * @type CreateUpdateContactRequest
     * @memberof ContactApiupdateContactUsingPATCH
     */
    createUpdateContactRequest?: CreateUpdateContactRequest
}

export class ObjectContactApi {
    private api: ObservableContactApi

    public constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactLinkType>> {
        return this.api.createContactLinkTypeUsingPOSTWithHttpInfo(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeUsingPOST(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: ConfigurationOptions): Promise<ContactLinkType> {
        return this.api.createContactLinkTypeUsingPOST(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1WithHttpInfo(param: ContactApiCreateContactUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.createContactUsingPOST1WithHttpInfo(param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1(param: ContactApiCreateContactUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.createContactUsingPOST1(param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1WithHttpInfo(param: ContactApiDeleteContactUsingDELETE1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteContactUsingDELETE1WithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1(param: ContactApiDeleteContactUsingDELETE1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteContactUsingDELETE1(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1WithHttpInfo(param: ContactApiGetContactUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.getContactUsingGET1WithHttpInfo(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1(param: ContactApiGetContactUsingGET1Request, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.getContactUsingGET1(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOSTWithHttpInfo(param: ContactApiLinkContactsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactLink>> {
        return this.api.linkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOST(param: ContactApiLinkContactsUsingPOSTRequest, options?: ConfigurationOptions): Promise<ContactLink> {
        return this.api.linkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGETWithHttpInfo(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        return this.api.listContactLinkTypesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGET(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListContactLinkTypesResponse> {
        return this.api.listContactLinkTypesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGETWithHttpInfo(param: ContactApiListContactLinksUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListContactLinksResponse>> {
        return this.api.listContactLinksUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGET(param: ContactApiListContactLinksUsingGETRequest, options?: ConfigurationOptions): Promise<ListContactLinksResponse> {
        return this.api.listContactLinksUsingGET(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1WithHttpInfo(param: ContactApiListContactsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListContactsResponse>> {
        return this.api.listContactsUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1(param: ContactApiListContactsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListContactsResponse> {
        return this.api.listContactsUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1WithHttpInfo(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveContactModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveContactModelUsingGET1( options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOSTWithHttpInfo(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unlinkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOST(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unlinkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContactUsingPATCHWithHttpInfo(param: ContactApiUpdateContactUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<Contact>> {
        return this.api.updateContactUsingPATCHWithHttpInfo(param.contactId, param.updateMask, param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContactUsingPATCH(param: ContactApiUpdateContactUsingPATCHRequest, options?: ConfigurationOptions): Promise<Contact> {
        return this.api.updateContactUsingPATCH(param.contactId, param.updateMask, param.createUpdateContactRequest,  options).toPromise();
    }

}

import { ObservableEmailApi } from "./ObservableAPI";
import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";

export interface EmailApiCreateEmailUsingPOST1Request {
    /**
     * emailWithContent
     * @type CreateEmailSentRequest
     * @memberof EmailApicreateEmailUsingPOST1
     */
    createEmailSentRequest: CreateEmailSentRequest
}

export interface EmailApiCreateEmailsUsingPOST1Request {
    /**
     * Email records to persist, with content.
     * @type CreateEmailsSentRequest
     * @memberof EmailApicreateEmailsUsingPOST1
     */
    createEmailsSentRequest?: CreateEmailsSentRequest
}

export interface EmailApiDeleteEmailUsingDELETE1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApideleteEmailUsingDELETE1
     */
    id: string
}

export interface EmailApiDeleteEmailsUsingPOST1Request {
    /**
     * deleteEmailsRequest
     * @type DeleteEmailsRequest
     * @memberof EmailApideleteEmailsUsingPOST1
     */
    deleteEmailsRequest: DeleteEmailsRequest
}

export interface EmailApiGetEmailTemplateUsingGETRequest {
    /**
     * email_template_id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmailTemplateUsingGET
     */
    emailTemplateId: string
}

export interface EmailApiGetEmailUsingGET1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmailUsingGET1
     */
    id: string
}

export interface EmailApiSendEmailTemplateUsingPOSTRequest {
    /**
     * Use a template to send an email to a list of contacts 
     * @type EmailSendTemplateRequest
     * @memberof EmailApisendEmailTemplateUsingPOST
     */
    emailSendTemplateRequest?: EmailSendTemplateRequest
}

export interface EmailApiSendEmailUsingPOST1Request {
    /**
     * emailSendRequest
     * @type EmailSendRequest
     * @memberof EmailApisendEmailUsingPOST1
     */
    emailSendRequest?: EmailSendRequest
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
    public createEmailUsingPOST1WithHttpInfo(param: EmailApiCreateEmailUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.createEmailUsingPOST1WithHttpInfo(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmailUsingPOST1(param: EmailApiCreateEmailUsingPOST1Request, options?: ConfigurationOptions): Promise<EmailSentWithContent> {
        return this.api.createEmailUsingPOST1(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1WithHttpInfo(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<EmailsSentList>> {
        return this.api.createEmailsUsingPOST1WithHttpInfo(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<EmailsSentList> {
        return this.api.createEmailsUsingPOST1(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1WithHttpInfo(param: EmailApiDeleteEmailUsingDELETE1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteEmailUsingDELETE1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1(param: EmailApiDeleteEmailUsingDELETE1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteEmailUsingDELETE1(param.id,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1WithHttpInfo(param: EmailApiDeleteEmailsUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<DeleteEmailsResponse>> {
        return this.api.deleteEmailsUsingPOST1WithHttpInfo(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1(param: EmailApiDeleteEmailsUsingPOST1Request, options?: ConfigurationOptions): Promise<DeleteEmailsResponse> {
        return this.api.deleteEmailsUsingPOST1(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param param the request object
     */
    public getEmailTemplateUsingGETWithHttpInfo(param: EmailApiGetEmailTemplateUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailTemplate>> {
        return this.api.getEmailTemplateUsingGETWithHttpInfo(param.emailTemplateId,  options).toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param param the request object
     */
    public getEmailTemplateUsingGET(param: EmailApiGetEmailTemplateUsingGETRequest, options?: ConfigurationOptions): Promise<EmailTemplate> {
        return this.api.getEmailTemplateUsingGET(param.emailTemplateId,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1WithHttpInfo(param: EmailApiGetEmailUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.getEmailUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1(param: EmailApiGetEmailUsingGET1Request, options?: ConfigurationOptions): Promise<EmailSentWithContent> {
        return this.api.getEmailUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param param the request object
     */
    public sendEmailTemplateUsingPOSTWithHttpInfo(param: EmailApiSendEmailTemplateUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendEmailTemplateUsingPOSTWithHttpInfo(param.emailSendTemplateRequest,  options).toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param param the request object
     */
    public sendEmailTemplateUsingPOST(param: EmailApiSendEmailTemplateUsingPOSTRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.sendEmailTemplateUsingPOST(param.emailSendTemplateRequest,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1WithHttpInfo(param: EmailApiSendEmailUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendEmailUsingPOST1WithHttpInfo(param.emailSendRequest,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1(param: EmailApiSendEmailUsingPOST1Request = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.sendEmailUsingPOST1(param.emailSendRequest,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiCreateFileUsingPOST1Request {
    /**
     * File to upload. This is a file sent as multi-part (not a string)
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFileUsingPOST1
     */
    file: string
    /**
     * File association
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFileUsingPOST1
     */
    fileAssociation: string
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFileUsingPOST1
     */
    fileName: string
    /**
     * Is public
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApicreateFileUsingPOST1
     */
    isPublic: boolean
    /**
     * Contact ID
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicreateFileUsingPOST1
     */
    contactId?: string
}

export interface FilesApiDeleteFileUsingDELETE1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApideleteFileUsingDELETE1
     */
    fileId: string
}

export interface FilesApiGetFileDataUsingGETRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFileDataUsingGET
     */
    fileId: string
}

export interface FilesApiGetFileUsingGET1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFileUsingGET1
     */
    fileId: string
}

export interface FilesApiListFilesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof FilesApilistFilesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    pageToken?: string
}

export interface FilesApiUpdateFileUsingPOSTRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFileUsingPOST
     */
    fileId: string
    /**
     * File to upload. This is a file sent as multi-part (not a string)
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFileUsingPOST
     */
    file?: string
    /**
     * File name
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFileUsingPOST
     */
    fileName?: string
    /**
     * Is public
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApiupdateFileUsingPOST
     */
    isPublic?: boolean
    /**
     * Update Mask
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFileUsingPOST
     */
    updateMask?: string
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
    public createFileUsingPOST1WithHttpInfo(param: FilesApiCreateFileUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.createFileUsingPOST1WithHttpInfo(param.file, param.fileAssociation, param.fileName, param.isPublic, param.contactId,  options).toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileUsingPOST1(param: FilesApiCreateFileUsingPOST1Request, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.createFileUsingPOST1(param.file, param.fileAssociation, param.fileName, param.isPublic, param.contactId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1WithHttpInfo(param: FilesApiDeleteFileUsingDELETE1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteFileUsingDELETE1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1(param: FilesApiDeleteFileUsingDELETE1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteFileUsingDELETE1(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGETWithHttpInfo(param: FilesApiGetFileDataUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.getFileDataUsingGETWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGET(param: FilesApiGetFileDataUsingGETRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.getFileDataUsingGET(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1WithHttpInfo(param: FilesApiGetFileUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.getFileUsingGET1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1(param: FilesApiGetFileUsingGET1Request, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.getFileUsingGET1(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1WithHttpInfo(param: FilesApiListFilesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListFilesResponse>> {
        return this.api.listFilesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1(param: FilesApiListFilesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListFilesResponse> {
        return this.api.listFilesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPOSTWithHttpInfo(param: FilesApiUpdateFileUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        return this.api.updateFileUsingPOSTWithHttpInfo(param.fileId, param.file, param.fileName, param.isPublic, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPOST(param: FilesApiUpdateFileUsingPOSTRequest, options?: ConfigurationOptions): Promise<FileMetadata> {
        return this.api.updateFileUsingPOST(param.fileId, param.file, param.fileName, param.isPublic, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourceCategoriesApi } from "./ObservableAPI";
import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";

export interface LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest {
    /**
     * The request object to create a new lead source category
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof LeadSourceCategoriesApicreateLeadSourceCategoryUsingPOST
     */
    createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest
}

export interface LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApideleteLeadSourceCategoryUsingDELETE
     */
    leadSourceCategoryId: string
}

export interface LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApigetLeadSourceCategoryUsingGET
     */
    leadSourceCategoryId: string
}

export interface LeadSourceCategoriesApiListCategoriesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistCategoriesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistCategoriesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceCategoriesApilistCategoriesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApilistCategoriesUsingGET1
     */
    pageToken?: string
}

export interface LeadSourceCategoriesApiUpdateLeadSourceCategoryUsingPATCHRequest {
    /**
     * The ID of a lead source category
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategoryUsingPATCH
     */
    leadSourceCategoryId: string
    /**
     * The request object to update a lead source category
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategoryUsingPATCH
     */
    createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LeadSourceCategoriesApiupdateLeadSourceCategoryUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectLeadSourceCategoriesApi {
    private api: ObservableLeadSourceCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourceCategoriesApiRequestFactory, responseProcessor?: LeadSourceCategoriesApiResponseProcessor) {
        this.api = new ObservableLeadSourceCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(param: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.createLeadSourceCategoryUsingPOSTWithHttpInfo(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOST(param: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.createLeadSourceCategoryUsingPOST(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETE(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceCategoryUsingDELETE(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(param: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.getLeadSourceCategoryUsingGETWithHttpInfo(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGET(param: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.getLeadSourceCategoryUsingGET(param.leadSourceCategoryId,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param param the request object
     */
    public listCategoriesUsingGET1WithHttpInfo(param: LeadSourceCategoriesApiListCategoriesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceCategoriesResponse>> {
        return this.api.listCategoriesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param param the request object
     */
    public listCategoriesUsingGET1(param: LeadSourceCategoriesApiListCategoriesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListLeadSourceCategoriesResponse> {
        return this.api.listCategoriesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param param the request object
     */
    public updateLeadSourceCategoryUsingPATCHWithHttpInfo(param: LeadSourceCategoriesApiUpdateLeadSourceCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.updateLeadSourceCategoryUsingPATCHWithHttpInfo(param.leadSourceCategoryId, param.createUpdateLeadSourceCategoryRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param param the request object
     */
    public updateLeadSourceCategoryUsingPATCH(param: LeadSourceCategoriesApiUpdateLeadSourceCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<LeadSourceCategory> {
        return this.api.updateLeadSourceCategoryUsingPATCH(param.leadSourceCategoryId, param.createUpdateLeadSourceCategoryRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourceExpensesApi } from "./ObservableAPI";
import { LeadSourceExpensesApiRequestFactory, LeadSourceExpensesApiResponseProcessor} from "../apis/LeadSourceExpensesApi";

export interface LeadSourceExpensesApiCreateLeadSourceExpenseUsingPOSTRequest {
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApicreateLeadSourceExpenseUsingPOST
     */
    leadSourceId: string
    /**
     * The request object to create a new lead source expense
     * @type CreateLeadSourceExpenseRequest
     * @memberof LeadSourceExpensesApicreateLeadSourceExpenseUsingPOST
     */
    createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest
}

export interface LeadSourceExpensesApiDeleteLeadSourceUsingDELETE1Request {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApideleteLeadSourceUsingDELETE1
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApideleteLeadSourceUsingDELETE1
     */
    leadSourceId: string
}

export interface LeadSourceExpensesApiGetLeadSourceExpenseUsingGETRequest {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApigetLeadSourceExpenseUsingGET
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApigetLeadSourceExpenseUsingGET
     */
    leadSourceId: string
}

export interface LeadSourceExpensesApiListLeadSourceExpensesUsingGETRequest {
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpensesUsingGET
     */
    leadSourceId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpensesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpensesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceExpensesApilistLeadSourceExpensesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApilistLeadSourceExpensesUsingGET
     */
    pageToken?: string
}

export interface LeadSourceExpensesApiUpdateLeadSourceExpenseUsingPATCHRequest {
    /**
     * The ID of a lead source expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpenseUsingPATCH
     */
    leadSourceExpenseId: string
    /**
     * The ID of the lead source this expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpenseUsingPATCH
     */
    leadSourceId: string
    /**
     * The request object to update a lead source expense
     * @type UpdateLeadSourceExpenseRequest
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpenseUsingPATCH
     */
    updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LeadSourceExpensesApiupdateLeadSourceExpenseUsingPATCH
     */
    updateMask?: Array<string>
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
    public createLeadSourceExpenseUsingPOSTWithHttpInfo(param: LeadSourceExpensesApiCreateLeadSourceExpenseUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.createLeadSourceExpenseUsingPOSTWithHttpInfo(param.leadSourceId, param.createLeadSourceExpenseRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param param the request object
     */
    public createLeadSourceExpenseUsingPOST(param: LeadSourceExpensesApiCreateLeadSourceExpenseUsingPOSTRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.createLeadSourceExpenseUsingPOST(param.leadSourceId, param.createLeadSourceExpenseRequest,  options).toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param param the request object
     */
    public deleteLeadSourceUsingDELETE1WithHttpInfo(param: LeadSourceExpensesApiDeleteLeadSourceUsingDELETE1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceUsingDELETE1WithHttpInfo(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param param the request object
     */
    public deleteLeadSourceUsingDELETE1(param: LeadSourceExpensesApiDeleteLeadSourceUsingDELETE1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceUsingDELETE1(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param param the request object
     */
    public getLeadSourceExpenseUsingGETWithHttpInfo(param: LeadSourceExpensesApiGetLeadSourceExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.getLeadSourceExpenseUsingGETWithHttpInfo(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param param the request object
     */
    public getLeadSourceExpenseUsingGET(param: LeadSourceExpensesApiGetLeadSourceExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.getLeadSourceExpenseUsingGET(param.leadSourceExpenseId, param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param param the request object
     */
    public listLeadSourceExpensesUsingGETWithHttpInfo(param: LeadSourceExpensesApiListLeadSourceExpensesUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        return this.api.listLeadSourceExpensesUsingGETWithHttpInfo(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param param the request object
     */
    public listLeadSourceExpensesUsingGET(param: LeadSourceExpensesApiListLeadSourceExpensesUsingGETRequest, options?: ConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        return this.api.listLeadSourceExpensesUsingGET(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param param the request object
     */
    public updateLeadSourceExpenseUsingPATCHWithHttpInfo(param: LeadSourceExpensesApiUpdateLeadSourceExpenseUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        return this.api.updateLeadSourceExpenseUsingPATCHWithHttpInfo(param.leadSourceExpenseId, param.leadSourceId, param.updateLeadSourceExpenseRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param param the request object
     */
    public updateLeadSourceExpenseUsingPATCH(param: LeadSourceExpensesApiUpdateLeadSourceExpenseUsingPATCHRequest, options?: ConfigurationOptions): Promise<LeadSourceExpense> {
        return this.api.updateLeadSourceExpenseUsingPATCH(param.leadSourceExpenseId, param.leadSourceId, param.updateLeadSourceExpenseRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourceRecurringExpensesApi } from "./ObservableAPI";
import { LeadSourceRecurringExpensesApiRequestFactory, LeadSourceRecurringExpensesApiResponseProcessor} from "../apis/LeadSourceRecurringExpensesApi";

export interface LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseUsingPOSTRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApicreateLeadSourceRecurringExpenseUsingPOST
     */
    leadSourceId: string
    /**
     * The request object to create a new lead source recurring expense
     * @type CreateLeadSourceRecurringExpenseRequest
     * @memberof LeadSourceRecurringExpensesApicreateLeadSourceRecurringExpenseUsingPOST
     */
    createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest
}

export interface LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseUsingDELETERequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApideleteLeadSourceRecurringExpenseUsingDELETE
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApideleteLeadSourceRecurringExpenseUsingDELETE
     */
    leadSourceRecurringExpenseId: string
}

export interface LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseUsingGETRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApigetLeadSourceRecurringExpenseUsingGET
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApigetLeadSourceRecurringExpenseUsingGET
     */
    leadSourceRecurringExpenseId: string
}

export interface LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    leadSourceRecurringExpenseId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistExpensesIncurredFromLeadSourceRecurringExpenseUsingGET
     */
    pageToken?: string
}

export interface LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesUsingGETRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpensesUsingGET
     */
    leadSourceId: string
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpensesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpensesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpensesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApilistLeadSourceRecurringExpensesUsingGET
     */
    pageToken?: string
}

export interface LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseUsingPATCHRequest {
    /**
     * The ID of the lead source this recurring expense belongs to
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpenseUsingPATCH
     */
    leadSourceId: string
    /**
     * The ID of a lead source recurring expense
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpenseUsingPATCH
     */
    leadSourceRecurringExpenseId: string
    /**
     * The request object to update a lead source recurring expense
     * @type LeadSourceRecurringExpenseUpdateRequest
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpenseUsingPATCH
     */
    leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LeadSourceRecurringExpensesApiupdateLeadSourceRecurringExpenseUsingPATCH
     */
    updateMask?: Array<string>
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
    public createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(param: LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(param.leadSourceId, param.createLeadSourceRecurringExpenseRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param param the request object
     */
    public createLeadSourceRecurringExpenseUsingPOST(param: LeadSourceRecurringExpensesApiCreateLeadSourceRecurringExpenseUsingPOSTRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.createLeadSourceRecurringExpenseUsingPOST(param.leadSourceId, param.createLeadSourceRecurringExpenseRequest,  options).toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param param the request object
     */
    public deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(param: LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param param the request object
     */
    public deleteLeadSourceRecurringExpenseUsingDELETE(param: LeadSourceRecurringExpensesApiDeleteLeadSourceRecurringExpenseUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceRecurringExpenseUsingDELETE(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param param the request object
     */
    public getLeadSourceRecurringExpenseUsingGETWithHttpInfo(param: LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.getLeadSourceRecurringExpenseUsingGETWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param param the request object
     */
    public getLeadSourceRecurringExpenseUsingGET(param: LeadSourceRecurringExpensesApiGetLeadSourceRecurringExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.getLeadSourceRecurringExpenseUsingGET(param.leadSourceId, param.leadSourceRecurringExpenseId,  options).toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param param the request object
     */
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(param: LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        return this.api.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param param the request object
     */
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(param: LeadSourceRecurringExpensesApiListExpensesIncurredFromLeadSourceRecurringExpenseUsingGETRequest, options?: ConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        return this.api.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(param.leadSourceId, param.leadSourceRecurringExpenseId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param param the request object
     */
    public listLeadSourceRecurringExpensesUsingGETWithHttpInfo(param: LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        return this.api.listLeadSourceRecurringExpensesUsingGETWithHttpInfo(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param param the request object
     */
    public listLeadSourceRecurringExpensesUsingGET(param: LeadSourceRecurringExpensesApiListLeadSourceRecurringExpensesUsingGETRequest, options?: ConfigurationOptions): Promise<ListLeadSourceRecurringExpensesResponse> {
        return this.api.listLeadSourceRecurringExpensesUsingGET(param.leadSourceId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param param the request object
     */
    public updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(param: LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        return this.api.updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(param.leadSourceId, param.leadSourceRecurringExpenseId, param.leadSourceRecurringExpenseUpdateRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param param the request object
     */
    public updateLeadSourceRecurringExpenseUsingPATCH(param: LeadSourceRecurringExpensesApiUpdateLeadSourceRecurringExpenseUsingPATCHRequest, options?: ConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        return this.api.updateLeadSourceRecurringExpenseUsingPATCH(param.leadSourceId, param.leadSourceRecurringExpenseId, param.leadSourceRecurringExpenseUpdateRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableLeadSourcesApi } from "./ObservableAPI";
import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";

export interface LeadSourcesApiCreateLeadSourceUsingPOSTRequest {
    /**
     * The request object to create a new lead source
     * @type CreateLeadSourceRequest
     * @memberof LeadSourcesApicreateLeadSourceUsingPOST
     */
    createLeadSourceRequest: CreateLeadSourceRequest
}

export interface LeadSourcesApiDeleteLeadSourceUsingDELETERequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApideleteLeadSourceUsingDELETE
     */
    leadSourceId: string
}

export interface LeadSourcesApiGetLeadSourceUsingGETRequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApigetLeadSourceUsingGET
     */
    leadSourceId: string
}

export interface LeadSourcesApiListLeadSourcesUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    pageToken?: string
}

export interface LeadSourcesApiUpdateLeadSourceUsingPATCHRequest {
    /**
     * The ID of a lead source
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApiupdateLeadSourceUsingPATCH
     */
    leadSourceId: string
    /**
     * The request object to update a lead source
     * @type CreateLeadSourceRequest
     * @memberof LeadSourcesApiupdateLeadSourceUsingPATCH
     */
    createLeadSourceRequest: CreateLeadSourceRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LeadSourcesApiupdateLeadSourceUsingPATCH
     */
    updateMask?: Array<string>
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
    public createLeadSourceUsingPOSTWithHttpInfo(param: LeadSourcesApiCreateLeadSourceUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.createLeadSourceUsingPOSTWithHttpInfo(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceUsingPOST(param: LeadSourcesApiCreateLeadSourceUsingPOSTRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.createLeadSourceUsingPOST(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param param the request object
     */
    public deleteLeadSourceUsingDELETEWithHttpInfo(param: LeadSourcesApiDeleteLeadSourceUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceUsingDELETEWithHttpInfo(param.leadSourceId,  options).toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param param the request object
     */
    public deleteLeadSourceUsingDELETE(param: LeadSourcesApiDeleteLeadSourceUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLeadSourceUsingDELETE(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param param the request object
     */
    public getLeadSourceUsingGETWithHttpInfo(param: LeadSourcesApiGetLeadSourceUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.getLeadSourceUsingGETWithHttpInfo(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param param the request object
     */
    public getLeadSourceUsingGET(param: LeadSourcesApiGetLeadSourceUsingGETRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.getLeadSourceUsingGET(param.leadSourceId,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGETWithHttpInfo(param: LeadSourcesApiListLeadSourcesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListLeadSourcesResponse>> {
        return this.api.listLeadSourcesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGET(param: LeadSourcesApiListLeadSourcesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListLeadSourcesResponse> {
        return this.api.listLeadSourcesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param param the request object
     */
    public updateLeadSourceUsingPATCHWithHttpInfo(param: LeadSourcesApiUpdateLeadSourceUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        return this.api.updateLeadSourceUsingPATCHWithHttpInfo(param.leadSourceId, param.createLeadSourceRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param param the request object
     */
    public updateLeadSourceUsingPATCH(param: LeadSourcesApiUpdateLeadSourceUsingPATCHRequest, options?: ConfigurationOptions): Promise<LeadSource> {
        return this.api.updateLeadSourceUsingPATCH(param.leadSourceId, param.createLeadSourceRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableNoteApi } from "./ObservableAPI";
import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";

export interface NoteApiCreateNoteUsingPOST1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApicreateNoteUsingPOST1
     */
    contactId: string
    /**
     * request
     * @type CreateNoteRequest
     * @memberof NoteApicreateNoteUsingPOST1
     */
    createNoteRequest: CreateNoteRequest
}

export interface NoteApiDeleteNoteUsingDELETE1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNoteUsingDELETE1
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNoteUsingDELETE1
     */
    noteId: string
}

export interface NoteApiGetNoteUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNoteUsingGET1
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNoteUsingGET1
     */
    noteId: string
}

export interface NoteApiListNotesUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    contactId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof NoteApilistNotesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    pageToken?: string
}

export interface NoteApiUpdateNoteUsingPATCHRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    noteId: string
    /**
     * updateNoteRequest
     * @type UpdateNoteRequest
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    updateNoteRequest: UpdateNoteRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    updateMask?: Array<string>
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
    public createNoteUsingPOST1WithHttpInfo(param: NoteApiCreateNoteUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<Note>> {
        return this.api.createNoteUsingPOST1WithHttpInfo(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNoteUsingPOST1(param: NoteApiCreateNoteUsingPOST1Request, options?: ConfigurationOptions): Promise<Note> {
        return this.api.createNoteUsingPOST1(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1WithHttpInfo(param: NoteApiDeleteNoteUsingDELETE1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNoteUsingDELETE1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1(param: NoteApiDeleteNoteUsingDELETE1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNoteUsingDELETE1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1WithHttpInfo(param: NoteApiGetNoteUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<GetNoteResponse>> {
        return this.api.getNoteUsingGET1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1(param: NoteApiGetNoteUsingGET1Request, options?: ConfigurationOptions): Promise<GetNoteResponse> {
        return this.api.getNoteUsingGET1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1WithHttpInfo(param: NoteApiListNotesUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<ListNotesResponse>> {
        return this.api.listNotesUsingGET1WithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1(param: NoteApiListNotesUsingGET1Request, options?: ConfigurationOptions): Promise<ListNotesResponse> {
        return this.api.listNotesUsingGET1(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCHWithHttpInfo(param: NoteApiUpdateNoteUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateNoteResponse>> {
        return this.api.updateNoteUsingPATCHWithHttpInfo(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCH(param: NoteApiUpdateNoteUsingPATCHRequest, options?: ConfigurationOptions): Promise<UpdateNoteResponse> {
        return this.api.updateNoteUsingPATCH(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservablePaymentMethodConfigsApi } from "./ObservableAPI";
import { PaymentMethodConfigsApiRequestFactory, PaymentMethodConfigsApiResponseProcessor} from "../apis/PaymentMethodConfigsApi";

export interface PaymentMethodConfigsApiCreatePaymentMethodConfigUsingPOSTRequest {
    /**
     * request
     * @type CreatePaymentMethodConfigRequest
     * @memberof PaymentMethodConfigsApicreatePaymentMethodConfigUsingPOST
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
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(param: PaymentMethodConfigsApiCreatePaymentMethodConfigUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentMethodConfig>> {
        return this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigUsingPOST(param: PaymentMethodConfigsApiCreatePaymentMethodConfigUsingPOSTRequest, options?: ConfigurationOptions): Promise<PaymentMethodConfig> {
        return this.api.createPaymentMethodConfigUsingPOST(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

}

import { ObservableProductInterestBundlesApi } from "./ObservableAPI";
import { ProductInterestBundlesApiRequestFactory, ProductInterestBundlesApiResponseProcessor} from "../apis/ProductInterestBundlesApi";

export interface ProductInterestBundlesApiAddProductInterestUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiaddProductInterestUsingPOST
     */
    id: string
    /**
     * request
     * @type AddProductInterestRequest
     * @memberof ProductInterestBundlesApiaddProductInterestUsingPOST
     */
    addProductInterestRequest: AddProductInterestRequest
}

export interface ProductInterestBundlesApiCreateProductInterestBundleUsingPOSTRequest {
    /**
     * createProductInterestBundleRequest
     * @type CreateProductInterestBundleRequest
     * @memberof ProductInterestBundlesApicreateProductInterestBundleUsingPOST
     */
    createProductInterestBundleRequest: CreateProductInterestBundleRequest
}

export interface ProductInterestBundlesApiDeleteProductInterestBundleUsingDELETERequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApideleteProductInterestBundleUsingDELETE
     */
    id: string
}

export interface ProductInterestBundlesApiGetProductInterestBundleUsingGETRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApigetProductInterestBundleUsingGET
     */
    id: string
}

export interface ProductInterestBundlesApiListProductInterestBundlesUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundlesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundlesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductInterestBundlesApilistProductInterestBundlesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApilistProductInterestBundlesUsingGET
     */
    pageToken?: string
}

export interface ProductInterestBundlesApiRemoveProductInterestUsingDELETERequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiremoveProductInterestUsingDELETE
     */
    id: string
    /**
     * interest_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiremoveProductInterestUsingDELETE
     */
    interestId: string
}

export interface ProductInterestBundlesApiUpdateProductInterestBundleUsingPATCHRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterestBundleUsingPATCH
     */
    id: string
    /**
     * updateProductInterestBundleRequest
     * @type UpdateProductInterestBundleRequest
     * @memberof ProductInterestBundlesApiupdateProductInterestBundleUsingPATCH
     */
    updateProductInterestBundleRequest: UpdateProductInterestBundleRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProductInterestBundlesApiupdateProductInterestBundleUsingPATCH
     */
    updateMask?: Array<string>
}

export interface ProductInterestBundlesApiUpdateProductInterestUsingPATCHRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterestUsingPATCH
     */
    id: string
    /**
     * interest_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductInterestBundlesApiupdateProductInterestUsingPATCH
     */
    interestId: string
    /**
     * updateProductInterestRequest
     * @type UpdateProductInterestRequest
     * @memberof ProductInterestBundlesApiupdateProductInterestUsingPATCH
     */
    updateProductInterestRequest: UpdateProductInterestRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProductInterestBundlesApiupdateProductInterestUsingPATCH
     */
    updateMask?: Array<string>
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
    public addProductInterestUsingPOSTWithHttpInfo(param: ProductInterestBundlesApiAddProductInterestUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        return this.api.addProductInterestUsingPOSTWithHttpInfo(param.id, param.addProductInterestRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param param the request object
     */
    public addProductInterestUsingPOST(param: ProductInterestBundlesApiAddProductInterestUsingPOSTRequest, options?: ConfigurationOptions): Promise<ProductInterest> {
        return this.api.addProductInterestUsingPOST(param.id, param.addProductInterestRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param param the request object
     */
    public createProductInterestBundleUsingPOSTWithHttpInfo(param: ProductInterestBundlesApiCreateProductInterestBundleUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.createProductInterestBundleUsingPOSTWithHttpInfo(param.createProductInterestBundleRequest,  options).toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param param the request object
     */
    public createProductInterestBundleUsingPOST(param: ProductInterestBundlesApiCreateProductInterestBundleUsingPOSTRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.createProductInterestBundleUsingPOST(param.createProductInterestBundleRequest,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param param the request object
     */
    public deleteProductInterestBundleUsingDELETEWithHttpInfo(param: ProductInterestBundlesApiDeleteProductInterestBundleUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductInterestBundleUsingDELETEWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param param the request object
     */
    public deleteProductInterestBundleUsingDELETE(param: ProductInterestBundlesApiDeleteProductInterestBundleUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProductInterestBundleUsingDELETE(param.id,  options).toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param param the request object
     */
    public getProductInterestBundleUsingGETWithHttpInfo(param: ProductInterestBundlesApiGetProductInterestBundleUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.getProductInterestBundleUsingGETWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param param the request object
     */
    public getProductInterestBundleUsingGET(param: ProductInterestBundlesApiGetProductInterestBundleUsingGETRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.getProductInterestBundleUsingGET(param.id,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param param the request object
     */
    public listProductInterestBundlesUsingGETWithHttpInfo(param: ProductInterestBundlesApiListProductInterestBundlesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListProductInterestBundleResponse>> {
        return this.api.listProductInterestBundlesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param param the request object
     */
    public listProductInterestBundlesUsingGET(param: ProductInterestBundlesApiListProductInterestBundlesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListProductInterestBundleResponse> {
        return this.api.listProductInterestBundlesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param param the request object
     */
    public removeProductInterestUsingDELETEWithHttpInfo(param: ProductInterestBundlesApiRemoveProductInterestUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeProductInterestUsingDELETEWithHttpInfo(param.id, param.interestId,  options).toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param param the request object
     */
    public removeProductInterestUsingDELETE(param: ProductInterestBundlesApiRemoveProductInterestUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeProductInterestUsingDELETE(param.id, param.interestId,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param param the request object
     */
    public updateProductInterestBundleUsingPATCHWithHttpInfo(param: ProductInterestBundlesApiUpdateProductInterestBundleUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        return this.api.updateProductInterestBundleUsingPATCHWithHttpInfo(param.id, param.updateProductInterestBundleRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param param the request object
     */
    public updateProductInterestBundleUsingPATCH(param: ProductInterestBundlesApiUpdateProductInterestBundleUsingPATCHRequest, options?: ConfigurationOptions): Promise<ProductInterestBundle> {
        return this.api.updateProductInterestBundleUsingPATCH(param.id, param.updateProductInterestBundleRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param param the request object
     */
    public updateProductInterestUsingPATCHWithHttpInfo(param: ProductInterestBundlesApiUpdateProductInterestUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        return this.api.updateProductInterestUsingPATCHWithHttpInfo(param.id, param.interestId, param.updateProductInterestRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param param the request object
     */
    public updateProductInterestUsingPATCH(param: ProductInterestBundlesApiUpdateProductInterestUsingPATCHRequest, options?: ConfigurationOptions): Promise<ProductInterest> {
        return this.api.updateProductInterestUsingPATCH(param.id, param.interestId, param.updateProductInterestRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableReportingApi } from "./ObservableAPI";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";

export interface ReportingApiListReportsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReportsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReportsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ReportingApilistReportsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApilistReportsUsingGET
     */
    pageToken?: string
}

export interface ReportingApiRetrieveReportUsingGETRequest {
    /**
     * report_id
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApiretrieveReportUsingGET
     */
    reportId: string
}

export interface ReportingApiRunReportUsingPOSTRequest {
    /**
     * The unique identifier of the report (Saved Search) to execute
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    reportId: string
    /**
     * Comma-separated list of fields to return (or do not supply a value to return all)
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    fields?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof ReportingApirunReportUsingPOST
     */
    pageSize?: number
    /**
     * Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    pageToken?: string
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
    public listReportsUsingGETWithHttpInfo(param: ReportingApiListReportsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListReportsResponse>> {
        return this.api.listReportsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param param the request object
     */
    public listReportsUsingGET(param: ReportingApiListReportsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListReportsResponse> {
        return this.api.listReportsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param param the request object
     */
    public retrieveReportUsingGETWithHttpInfo(param: ReportingApiRetrieveReportUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<Report>> {
        return this.api.retrieveReportUsingGETWithHttpInfo(param.reportId,  options).toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param param the request object
     */
    public retrieveReportUsingGET(param: ReportingApiRetrieveReportUsingGETRequest, options?: ConfigurationOptions): Promise<Report> {
        return this.api.retrieveReportUsingGET(param.reportId,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOSTWithHttpInfo(param: ReportingApiRunReportUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportExecutionResult>> {
        return this.api.runReportUsingPOSTWithHttpInfo(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOST(param: ReportingApiRunReportUsingPOSTRequest, options?: ConfigurationOptions): Promise<ReportExecutionResult> {
        return this.api.runReportUsingPOST(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableSalesApi } from "./ObservableAPI";
import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";

export interface SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof SalesApisetMerchantGatewayAsDefaultUsingPOST
     */
    id: string
}

export class ObjectSalesApi {
    private api: ObservableSalesApi

    public constructor(configuration: Configuration, requestFactory?: SalesApiRequestFactory, responseProcessor?: SalesApiResponseProcessor) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultUsingPOST(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setMerchantGatewayAsDefaultUsingPOST(param.id,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetApplicationConfigurationsUsingGETRequest {
    /**
     * By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * Defaults to: undefined
     * @type Array&lt;&#39;AFFILIATE&#39; | &#39;APPOINTMENT&#39; | &#39;CONTACT&#39; | &#39;ECOMMERCE&#39; | &#39;EMAIL&#39; | &#39;FORMS&#39; | &#39;FULFILLMENT&#39; | &#39;INVOICE&#39; | &#39;NOTE&#39; | &#39;OPPORTUNITY&#39; | &#39;TASK&#39; | &#39;TEMPLATE&#39;&gt;
     * @memberof SettingsApigetApplicationConfigurationsUsingGET
     */
    fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>
}

export interface SettingsApiGetContactOptionTypesUsingGET1Request {
}

export interface SettingsApiIsApplicationEnabledUsingGETRequest {
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
    public getApplicationConfigurationsUsingGETWithHttpInfo(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetSettingsResponse>> {
        return this.api.getApplicationConfigurationsUsingGETWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurationsUsingGET(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: ConfigurationOptions): Promise<GetSettingsResponse> {
        return this.api.getApplicationConfigurationsUsingGET(param.fields,  options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        return this.api.getContactOptionTypesUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: ConfigurationOptions): Promise<GetContactOptionTypesResponse> {
        return this.api.getContactOptionTypesUsingGET1( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGETWithHttpInfo(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        return this.api.isApplicationEnabledUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGET(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: ConfigurationOptions): Promise<GetApplicationEnabledStatusResponse> {
        return this.api.isApplicationEnabledUsingGET( options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof SubscriptionsApicreateSubscriptionCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest {
    /**
     * createSubscriptionV2
     * @type CreateSubscriptionV2
     * @memberof SubscriptionsApicreateSubscriptionV2UsingPOST
     */
    createSubscriptionV2: CreateSubscriptionV2
}

export interface SubscriptionsApiDeleteSubscriptionCustomFieldUsingDELETERequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApideleteSubscriptionCustomFieldUsingDELETE
     */
    customFieldId: string
}

export interface SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest {
}

export interface SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOST(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.createSubscriptionCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<RestSubscriptionV2>> {
        return this.api.createSubscriptionV2UsingPOSTWithHttpInfo(param.createSubscriptionV2,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOST(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: ConfigurationOptions): Promise<RestSubscriptionV2> {
        return this.api.createSubscriptionV2UsingPOST(param.createSubscriptionV2,  options).toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param param the request object
     */
    public deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(param: SubscriptionsApiDeleteSubscriptionCustomFieldUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param param the request object
     */
    public deleteSubscriptionCustomFieldUsingDELETE(param: SubscriptionsApiDeleteSubscriptionCustomFieldUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSubscriptionCustomFieldUsingDELETE(param.customFieldId,  options).toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ObjectModel> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGET( options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCH(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: ConfigurationOptions): Promise<CustomFieldMetaData> {
        return this.api.updateSubscriptionCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiApplyTagsUsingPOSTRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiapplyTagsUsingPOST
     */
    tagId: string
    /**
     * applyRemoveTagRequest
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiapplyTagsUsingPOST
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export interface TagsApiCreateTagCategoryUsingPOST1Request {
    /**
     * request
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApicreateTagCategoryUsingPOST1
     */
    createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest
}

export interface TagsApiCreateTagUsingPOST1Request {
    /**
     * tag
     * @type CreateUpdateTagRequest
     * @memberof TagsApicreateTagUsingPOST1
     */
    createUpdateTagRequest: CreateUpdateTagRequest
}

export interface TagsApiDeleteTagCategoryUsingDELETERequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTagCategoryUsingDELETE
     */
    tagCategoryId: string
}

export interface TagsApiDeleteTagUsingDELETERequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTagUsingDELETE
     */
    tagId: string
}

export interface TagsApiGetCategoryUsingGETRequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetCategoryUsingGET
     */
    tagCategoryId: string
}

export interface TagsApiGetTagUsingGET1Request {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetTagUsingGET1
     */
    tagId: string
}

export interface TagsApiListCompaniesForTagIdUsingGET1Request {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    tagId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    pageToken?: string
}

export interface TagsApiListContactsWithTagIdUsingGETRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    tagId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    pageToken?: string
}

export interface TagsApiListTagCategoriesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    pageToken?: string
}

export interface TagsApiListTagsUsingGET1Request {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTagsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    pageToken?: string
}

export interface TagsApiRemoveTagsUsingPOSTRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiremoveTagsUsingPOST
     */
    tagId: string
    /**
     * applyRemoveTagRequest
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiremoveTagsUsingPOST
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export interface TagsApiUpdateTagCategoryUsingPATCHRequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiupdateTagCategoryUsingPATCH
     */
    tagCategoryId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TagsApiupdateTagCategoryUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * tagCategory
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApiupdateTagCategoryUsingPATCH
     */
    createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest
}

export interface TagsApiUpdateTagUsingPATCHRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiupdateTagUsingPATCH
     */
    tagId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TagsApiupdateTagUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * tag
     * @type CreateUpdateTagRequest
     * @memberof TagsApiupdateTagUsingPATCH
     */
    createUpdateTagRequest?: CreateUpdateTagRequest
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
    public applyTagsUsingPOSTWithHttpInfo(param: TagsApiApplyTagsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApplyTagsResponse>> {
        return this.api.applyTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTagsUsingPOST(param: TagsApiApplyTagsUsingPOSTRequest, options?: ConfigurationOptions): Promise<ApplyTagsResponse> {
        return this.api.applyTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1WithHttpInfo(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<Tag>> {
        return this.api.createTagCategoryUsingPOST1WithHttpInfo(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: ConfigurationOptions): Promise<Tag> {
        return this.api.createTagCategoryUsingPOST1(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1WithHttpInfo(param: TagsApiCreateTagUsingPOST1Request, options?: ConfigurationOptions): Promise<HttpInfo<Tag>> {
        return this.api.createTagUsingPOST1WithHttpInfo(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1(param: TagsApiCreateTagUsingPOST1Request, options?: ConfigurationOptions): Promise<Tag> {
        return this.api.createTagUsingPOST1(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTagCategoryUsingDELETEWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETE(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTagCategoryUsingDELETE(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETEWithHttpInfo(param: TagsApiDeleteTagUsingDELETERequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTagUsingDELETEWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETE(param: TagsApiDeleteTagUsingDELETERequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTagUsingDELETE(param.tagId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGETWithHttpInfo(param: TagsApiGetCategoryUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetTagCategoryResponse>> {
        return this.api.getCategoryUsingGETWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGET(param: TagsApiGetCategoryUsingGETRequest, options?: ConfigurationOptions): Promise<GetTagCategoryResponse> {
        return this.api.getCategoryUsingGET(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1WithHttpInfo(param: TagsApiGetTagUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<Tag>> {
        return this.api.getTagUsingGET1WithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1(param: TagsApiGetTagUsingGET1Request, options?: ConfigurationOptions): Promise<Tag> {
        return this.api.getTagUsingGET1(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1WithHttpInfo(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: ConfigurationOptions): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        return this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: ConfigurationOptions): Promise<ListTaggedCompaniesResponse> {
        return this.api.listCompaniesForTagIdUsingGET1(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGETWithHttpInfo(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListTaggedContactsResponse>> {
        return this.api.listContactsWithTagIdUsingGETWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGET(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: ConfigurationOptions): Promise<ListTaggedContactsResponse> {
        return this.api.listContactsWithTagIdUsingGET(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGETWithHttpInfo(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTagCategoriesResponse>> {
        return this.api.listTagCategoriesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGET(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: ConfigurationOptions): Promise<ListTagCategoriesResponse> {
        return this.api.listTagCategoriesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1WithHttpInfo(param: TagsApiListTagsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListTagsResponse>> {
        return this.api.listTagsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1(param: TagsApiListTagsUsingGET1Request = {}, options?: ConfigurationOptions): Promise<ListTagsResponse> {
        return this.api.listTagsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOSTWithHttpInfo(param: TagsApiRemoveTagsUsingPOSTRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOST(param: TagsApiRemoveTagsUsingPOSTRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategoryUsingPATCHWithHttpInfo(param: TagsApiUpdateTagCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        return this.api.updateTagCategoryUsingPATCHWithHttpInfo(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategoryUsingPATCH(param: TagsApiUpdateTagCategoryUsingPATCHRequest, options?: ConfigurationOptions): Promise<UpdateTagCategoryResponse> {
        return this.api.updateTagCategoryUsingPATCH(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTagUsingPATCHWithHttpInfo(param: TagsApiUpdateTagUsingPATCHRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateTagResponse>> {
        return this.api.updateTagUsingPATCHWithHttpInfo(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTagUsingPATCH(param: TagsApiUpdateTagUsingPATCHRequest, options?: ConfigurationOptions): Promise<UpdateTagResponse> {
        return this.api.updateTagUsingPATCH(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

}
