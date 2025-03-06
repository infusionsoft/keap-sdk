import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { BaseListResponseDeal } from '../models/BaseListResponseDeal';
import { BaseListResponseDealNote } from '../models/BaseListResponseDealNote';
import { BaseListResponsePipeline } from '../models/BaseListResponsePipeline';
import { BaseListResponsePipelineSummary } from '../models/BaseListResponsePipelineSummary';
import { BaseListResponseStage } from '../models/BaseListResponseStage';
import { BasicCompany } from '../models/BasicCompany';
import { BasicContact } from '../models/BasicContact';
import { BasicUser } from '../models/BasicUser';
import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
import { Campaign } from '../models/Campaign';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
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
import { CreateDealNoteRequest } from '../models/CreateDealNoteRequest';
import { CreateDefaultCommissionProgramRequest } from '../models/CreateDefaultCommissionProgramRequest';
import { CreateEmailSentRequest } from '../models/CreateEmailSentRequest';
import { CreateEmailsSentRequest } from '../models/CreateEmailsSentRequest';
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
import { CreatePipelineRequest } from '../models/CreatePipelineRequest';
import { CreateProductCategoryRequest } from '../models/CreateProductCategoryRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateProductDiscountRequest } from '../models/CreateProductDiscountRequest';
import { CreateProductInterestBundleRequest } from '../models/CreateProductInterestBundleRequest';
import { CreateProductRequest } from '../models/CreateProductRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CreateShippingDiscountRequest } from '../models/CreateShippingDiscountRequest';
import { CreateStageRequest } from '../models/CreateStageRequest';
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
import { Deal } from '../models/Deal';
import { DealContact } from '../models/DealContact';
import { DealNote } from '../models/DealNote';
import { DealNoteListResponse } from '../models/DealNoteListResponse';
import { DealStage } from '../models/DealStage';
import { DealStatus } from '../models/DealStatus';
import { DealValue } from '../models/DealValue';
import { DefaultCommission } from '../models/DefaultCommission';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { Discount } from '../models/Discount';
import { DiscountCriteria } from '../models/DiscountCriteria';
import { EmailAddress } from '../models/EmailAddress';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { EmailSendTemplateRequest } from '../models/EmailSendTemplateRequest';
import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailTemplate } from '../models/EmailTemplate';
import { EmailsSentList } from '../models/EmailsSentList';
import { FaxNumber } from '../models/FaxNumber';
import { FileMetadata } from '../models/FileMetadata';
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
import { ListProductCategoriesResponse } from '../models/ListProductCategoriesResponse';
import { ListProductDiscountsResponse } from '../models/ListProductDiscountsResponse';
import { ListProductInterestBundleResponse } from '../models/ListProductInterestBundleResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
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
import { ListUserResponse } from '../models/ListUserResponse';
import { ModelError } from '../models/ModelError';
import { ModelFile } from '../models/ModelFile';
import { Money } from '../models/Money';
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
import { Owner } from '../models/Owner';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
import { PaymentPlan } from '../models/PaymentPlan';
import { PaymentResult } from '../models/PaymentResult';
import { PhoneNumber } from '../models/PhoneNumber';
import { Pipeline } from '../models/Pipeline';
import { PipelineListResponse } from '../models/PipelineListResponse';
import { PipelineOutcomeLabel } from '../models/PipelineOutcomeLabel';
import { PipelineOutcomeLabelListResponse } from '../models/PipelineOutcomeLabelListResponse';
import { PipelineStageListResponse } from '../models/PipelineStageListResponse';
import { PipelineSummariesListResponse } from '../models/PipelineSummariesListResponse';
import { PipelineSummary } from '../models/PipelineSummary';
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
import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { ReportEntryValue } from '../models/ReportEntryValue';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { Resource } from '../models/Resource';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestPaymentGateway } from '../models/RestPaymentGateway';
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
import { Stage } from '../models/Stage';
import { StageDealListResponse } from '../models/StageDealListResponse';
import { StageDetails } from '../models/StageDetails';
import { StageListResponse } from '../models/StageListResponse';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { SubscriptionPlanInterest } from '../models/SubscriptionPlanInterest';
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
import { UpdateDealNoteRequest } from '../models/UpdateDealNoteRequest';
import { UpdateDefaultCommissionProgramRequest } from '../models/UpdateDefaultCommissionProgramRequest';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
import { UpdateOpportunityRequestV2 } from '../models/UpdateOpportunityRequestV2';
import { UpdateOpportunityStageChecklistItem } from '../models/UpdateOpportunityStageChecklistItem';
import { UpdateOpportunityStageRequest } from '../models/UpdateOpportunityStageRequest';
import { UpdateOrderItemRequest } from '../models/UpdateOrderItemRequest';
import { UpdateOrderRequest } from '../models/UpdateOrderRequest';
import { UpdateOrderTotalDiscountRequest } from '../models/UpdateOrderTotalDiscountRequest';
import { UpdateOutcomeLabelsRequest } from '../models/UpdateOutcomeLabelsRequest';
import { UpdatePipelineRequest } from '../models/UpdatePipelineRequest';
import { UpdateProductCategoryRequest } from '../models/UpdateProductCategoryRequest';
import { UpdateProductCommissionProgramRequest } from '../models/UpdateProductCommissionProgramRequest';
import { UpdateProductDiscountRequest } from '../models/UpdateProductDiscountRequest';
import { UpdateProductInterestBundleRequest } from '../models/UpdateProductInterestBundleRequest';
import { UpdateProductInventoryRequest } from '../models/UpdateProductInventoryRequest';
import { UpdateProductRequest } from '../models/UpdateProductRequest';
import { UpdateShippingDiscountRequest } from '../models/UpdateShippingDiscountRequest';
import { UpdateStageRequest } from '../models/UpdateStageRequest';
import { UpdateSubscriptionCommissionProgramRequest } from '../models/UpdateSubscriptionCommissionProgramRequest';
import { UpdateSubscriptionPlanRequest } from '../models/UpdateSubscriptionPlanRequest';
import { UpdateSubscriptionRequest } from '../models/UpdateSubscriptionRequest';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';

import { ObservableAffiliateApi } from "./ObservableAPI";
import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";

export interface AffiliateApiAddAffiliateUsingPOSTRequest {
    /**
     * Affiliate request to insert
     * @type CreateAffiliateRequest
     * @memberof AffiliateApiaddAffiliateUsingPOST
     */
    createAffiliateRequest?: CreateAffiliateRequest
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
    public addAffiliateUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.addAffiliateUsingPOSTWithHttpInfo(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateUsingPOST(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: Configuration): Promise<RestAffiliate> {
        return this.api.addAffiliateUsingPOST(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1WithHttpInfo(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.getAffiliateUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<RestAffiliate> {
        return this.api.getAffiliateUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.updateAffiliateUsingPATCHWithHttpInfo(param.id, param.updateAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCH(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<RestAffiliate> {
        return this.api.updateAffiliateUsingPATCH(param.id, param.updateAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiUpdateCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.updateCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param param the request object
     */
    public updateCommissionProgramUsingPATCH(param: AffiliateApiUpdateCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        return this.api.updateCommissionProgramUsingPATCH(param.commissionProgramId, param.updateCommissionProgramRequest, param.updateMask,  options).toPromise();
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
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        return this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceUsingPOST(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<AddToAutomationSequenceResponse> {
        return this.api.addContactsToAutomationSequenceUsingPOST(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETEWithHttpInfo(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAutomationUsingDELETEWithHttpInfo(param.automationIds,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETE(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAutomationUsingDELETE(param.automationIds,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGETWithHttpInfo(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<HttpInfo<Automation>> {
        return this.api.getAutomationUsingGETWithHttpInfo(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGET(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<Automation> {
        return this.api.getAutomationUsingGET(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGETWithHttpInfo(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationIdsResponse>> {
        return this.api.listAllAutomationIdsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGET(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationIdsResponse> {
        return this.api.listAllAutomationIdsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGETWithHttpInfo(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationResponse>> {
        return this.api.listAutomationsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGET(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationResponse> {
        return this.api.listAutomationsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAutomationCategoryUsingPUTWithHttpInfo(param.updateAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUT(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<void> {
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
    public createCategoryUsingPOSTWithHttpInfo(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        return this.api.createCategoryUsingPOSTWithHttpInfo(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategoryUsingPOST(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<AutomationCategory> {
        return this.api.createCategoryUsingPOST(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCategoriesUsingDELETEWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETE(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteCategoriesUsingDELETE(param.ids,  options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGETWithHttpInfo(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        return this.api.listCategoriesUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGET(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationCategoryResponse> {
        return this.api.listCategoriesUsingGET( options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUTWithHttpInfo(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        return this.api.saveCategoryUsingPUTWithHttpInfo(param.saveAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUT(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<AutomationCategory> {
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
    public getBusinessProfileUsingGETWithHttpInfo(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.getBusinessProfileUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfileUsingGET(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: Configuration): Promise<GetBusinessProfileResponse> {
        return this.api.getBusinessProfileUsingGET( options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfileUsingPATCHWithHttpInfo(param: BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.updateBusinessProfileUsingPATCHWithHttpInfo(param.updateMask, param.updateBusinessProfileRequest,  options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public updateBusinessProfileUsingPATCH(param: BusinessProfileApiUpdateBusinessProfileUsingPATCHRequest = {}, options?: Configuration): Promise<GetBusinessProfileResponse> {
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
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        return this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequenceUsingPOST1(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<AddContactsToSequenceResponse> {
        return this.api.addContactsToCampaignSequenceUsingPOST1(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1WithHttpInfo(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<HttpInfo<Campaign>> {
        return this.api.getCampaignUsingGET1WithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<Campaign> {
        return this.api.getCampaignUsingGET1(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1WithHttpInfo(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListCampaignsResponse>> {
        return this.api.listCampaignsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: Configuration): Promise<ListCampaignsResponse> {
        return this.api.listCampaignsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        return this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOST(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<RemoveContactsFromSequenceResponse> {
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
    public createCompanyUsingPOST1WithHttpInfo(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.createCompanyUsingPOST1WithHttpInfo(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompanyUsingPOST1(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: Configuration): Promise<Company> {
        return this.api.createCompanyUsingPOST1(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETEWithHttpInfo(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCompanyUsingDELETEWithHttpInfo(param.companyId,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETE(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteCompanyUsingDELETE(param.companyId,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1WithHttpInfo(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.getCompanyUsingGET1WithHttpInfo(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<Company> {
        return this.api.getCompanyUsingGET1(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1WithHttpInfo(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListCompaniesResponse>> {
        return this.api.listCompaniesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: Configuration): Promise<ListCompaniesResponse> {
        return this.api.listCompaniesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompanyUsingPATCH1WithHttpInfo(param: CompanyApiUpdateCompanyUsingPATCH1Request, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.updateCompanyUsingPATCH1WithHttpInfo(param.companyId, param.updateMask, param.updateCompanyRequest,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public updateCompanyUsingPATCH1(param: CompanyApiUpdateCompanyUsingPATCH1Request, options?: Configuration): Promise<Company> {
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
    public createContactLinkTypeUsingPOSTWithHttpInfo(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLinkType>> {
        return this.api.createContactLinkTypeUsingPOSTWithHttpInfo(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeUsingPOST(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<ContactLinkType> {
        return this.api.createContactLinkTypeUsingPOST(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1WithHttpInfo(param: ContactApiCreateContactUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.createContactUsingPOST1WithHttpInfo(param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1(param: ContactApiCreateContactUsingPOST1Request = {}, options?: Configuration): Promise<Contact> {
        return this.api.createContactUsingPOST1(param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1WithHttpInfo(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteContactUsingDELETE1WithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteContactUsingDELETE1(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1WithHttpInfo(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.getContactUsingGET1WithHttpInfo(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<Contact> {
        return this.api.getContactUsingGET1(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOSTWithHttpInfo(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLink>> {
        return this.api.linkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOST(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<ContactLink> {
        return this.api.linkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGETWithHttpInfo(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        return this.api.listContactLinkTypesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGET(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: Configuration): Promise<ListContactLinkTypesResponse> {
        return this.api.listContactLinkTypesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGETWithHttpInfo(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListContactLinksResponse>> {
        return this.api.listContactLinksUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGET(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<ListContactLinksResponse> {
        return this.api.listContactLinksUsingGET(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1WithHttpInfo(param: ContactApiListContactsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListContactsResponse>> {
        return this.api.listContactsUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1(param: ContactApiListContactsUsingGET1Request = {}, options?: Configuration): Promise<ListContactsResponse> {
        return this.api.listContactsUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1WithHttpInfo(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveContactModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveContactModelUsingGET1( options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOSTWithHttpInfo(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unlinkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOST(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.unlinkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContactUsingPATCHWithHttpInfo(param: ContactApiUpdateContactUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.updateContactUsingPATCHWithHttpInfo(param.contactId, param.updateMask, param.createUpdateContactRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public updateContactUsingPATCH(param: ContactApiUpdateContactUsingPATCHRequest, options?: Configuration): Promise<Contact> {
        return this.api.updateContactUsingPATCH(param.contactId, param.updateMask, param.createUpdateContactRequest,  options).toPromise();
    }

}

import { ObservableDealsApi } from "./ObservableAPI";
import { DealsApiRequestFactory, DealsApiResponseProcessor} from "../apis/DealsApi";

export interface DealsApiDeleteRequest {
    /**
     * the ID of the note to delete
     * Defaults to: undefined
     * @type string
     * @memberof DealsApi_delete
     */
    noteId: string
}

export interface DealsApiCreateNoteRequest {
    /**
     * the deal ID to associate the new note with
     * Defaults to: undefined
     * @type string
     * @memberof DealsApicreateNote
     */
    id: string
    /**
     * the request body containing note details
     * @type CreateDealNoteRequest
     * @memberof DealsApicreateNote
     */
    createDealNoteRequest: CreateDealNoteRequest
}

export interface DealsApiGetNoteRequest {
    /**
     * the ID of the note to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof DealsApigetNote
     */
    noteId: string
}

export interface DealsApiListNotesRequest {
    /**
     * the deal ID to list notes for
     * Defaults to: undefined
     * @type string
     * @memberof DealsApilistNotes
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DealsApilistNotes
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DealsApilistNotes
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DealsApilistNotes
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof DealsApilistNotes
     */
    pageSize?: number
}

export interface DealsApiUpdateRequest {
    /**
     * the ID of the note to update
     * Defaults to: undefined
     * @type string
     * @memberof DealsApiupdate
     */
    noteId: string
    /**
     * the request body containing updated note details
     * @type UpdateDealNoteRequest
     * @memberof DealsApiupdate
     */
    updateDealNoteRequest: UpdateDealNoteRequest
}

export class ObjectDealsApi {
    private api: ObservableDealsApi

    public constructor(configuration: Configuration, requestFactory?: DealsApiRequestFactory, responseProcessor?: DealsApiResponseProcessor) {
        this.api = new ObservableDealsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: DealsApiDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api._deleteWithHttpInfo(param.noteId,  options).toPromise();
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param param the request object
     */
    public _delete(param: DealsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.noteId,  options).toPromise();
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param param the request object
     */
    public createNoteWithHttpInfo(param: DealsApiCreateNoteRequest, options?: Configuration): Promise<HttpInfo<DealNote>> {
        return this.api.createNoteWithHttpInfo(param.id, param.createDealNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param param the request object
     */
    public createNote(param: DealsApiCreateNoteRequest, options?: Configuration): Promise<DealNote> {
        return this.api.createNote(param.id, param.createDealNoteRequest,  options).toPromise();
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param param the request object
     */
    public getNoteWithHttpInfo(param: DealsApiGetNoteRequest, options?: Configuration): Promise<HttpInfo<DealNote>> {
        return this.api.getNoteWithHttpInfo(param.noteId,  options).toPromise();
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param param the request object
     */
    public getNote(param: DealsApiGetNoteRequest, options?: Configuration): Promise<DealNote> {
        return this.api.getNote(param.noteId,  options).toPromise();
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param param the request object
     */
    public listNotesWithHttpInfo(param: DealsApiListNotesRequest, options?: Configuration): Promise<HttpInfo<DealNoteListResponse>> {
        return this.api.listNotesWithHttpInfo(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param param the request object
     */
    public listNotes(param: DealsApiListNotesRequest, options?: Configuration): Promise<DealNoteListResponse> {
        return this.api.listNotes(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param param the request object
     */
    public updateWithHttpInfo(param: DealsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<DealNote>> {
        return this.api.updateWithHttpInfo(param.noteId, param.updateDealNoteRequest,  options).toPromise();
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param param the request object
     */
    public update(param: DealsApiUpdateRequest, options?: Configuration): Promise<DealNote> {
        return this.api.update(param.noteId, param.updateDealNoteRequest,  options).toPromise();
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

export interface EmailApiGetEmailUsingGET1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmailUsingGET1
     */
    id: string
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
    public createEmailUsingPOST1WithHttpInfo(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.createEmailUsingPOST1WithHttpInfo(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmailUsingPOST1(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<EmailSentWithContent> {
        return this.api.createEmailUsingPOST1(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1WithHttpInfo(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<EmailsSentList>> {
        return this.api.createEmailsUsingPOST1WithHttpInfo(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: Configuration): Promise<EmailsSentList> {
        return this.api.createEmailsUsingPOST1(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1WithHttpInfo(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEmailUsingDELETE1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteEmailUsingDELETE1(param.id,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1WithHttpInfo(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<HttpInfo<DeleteEmailsResponse>> {
        return this.api.deleteEmailsUsingPOST1WithHttpInfo(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<DeleteEmailsResponse> {
        return this.api.deleteEmailsUsingPOST1(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1WithHttpInfo(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.getEmailUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<EmailSentWithContent> {
        return this.api.getEmailUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1WithHttpInfo(param: EmailApiSendEmailUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendEmailUsingPOST1WithHttpInfo(param.emailSendRequest,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1(param: EmailApiSendEmailUsingPOST1Request = {}, options?: Configuration): Promise<void> {
        return this.api.sendEmailUsingPOST1(param.emailSendRequest,  options).toPromise();
    }

}

import { ObservableEmailAddressApi } from "./ObservableAPI";
import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";

export interface EmailAddressApiGetEmailAddressStatusUsingGETRequest {
    /**
     * email
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApigetEmailAddressStatusUsingGET
     */
    email: string
}

export interface EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest {
    /**
     * email
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApiupdateEmailAddressOptStatusUsingPUT
     */
    email: string
    /**
     * updateEmailAddress
     * @type UpdateEmailAddress
     * @memberof EmailAddressApiupdateEmailAddressOptStatusUsingPUT
     */
    updateEmailAddress: UpdateEmailAddress
}

export class ObjectEmailAddressApi {
    private api: ObservableEmailAddressApi

    public constructor(configuration: Configuration, requestFactory?: EmailAddressApiRequestFactory, responseProcessor?: EmailAddressApiResponseProcessor) {
        this.api = new ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatusUsingGETWithHttpInfo(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        return this.api.getEmailAddressStatusUsingGETWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatusUsingGET(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<RestEmailAddress> {
        return this.api.getEmailAddressStatusUsingGET(param.email,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatusUsingPUTWithHttpInfo(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        return this.api.updateEmailAddressOptStatusUsingPUTWithHttpInfo(param.email, param.updateEmailAddress,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatusUsingPUT(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<RestEmailAddress> {
        return this.api.updateEmailAddressOptStatusUsingPUT(param.email, param.updateEmailAddress,  options).toPromise();
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
    public createNoteUsingPOST1WithHttpInfo(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Note>> {
        return this.api.createNoteUsingPOST1WithHttpInfo(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNoteUsingPOST1(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<Note> {
        return this.api.createNoteUsingPOST1(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1WithHttpInfo(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteNoteUsingDELETE1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteNoteUsingDELETE1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1WithHttpInfo(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<HttpInfo<GetNoteResponse>> {
        return this.api.getNoteUsingGET1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<GetNoteResponse> {
        return this.api.getNoteUsingGET1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1WithHttpInfo(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListNotesResponse>> {
        return this.api.listNotesUsingGET1WithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<ListNotesResponse> {
        return this.api.listNotesUsingGET1(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCHWithHttpInfo(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateNoteResponse>> {
        return this.api.updateNoteUsingPATCHWithHttpInfo(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCH(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<UpdateNoteResponse> {
        return this.api.updateNoteUsingPATCH(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservablePaymentMethodConfigApi } from "./ObservableAPI";
import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor} from "../apis/PaymentMethodConfigApi";

export interface PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest {
    /**
     * request
     * @type CreatePaymentMethodConfigRequest
     * @memberof PaymentMethodConfigApicreatePaymentMethodConfigUsingPOST
     */
    createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest
}

export class ObjectPaymentMethodConfigApi {
    private api: ObservablePaymentMethodConfigApi

    public constructor(configuration: Configuration, requestFactory?: PaymentMethodConfigApiRequestFactory, responseProcessor?: PaymentMethodConfigApiResponseProcessor) {
        this.api = new ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<PaymentMethodConfig>> {
        return this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigUsingPOST(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<PaymentMethodConfig> {
        return this.api.createPaymentMethodConfigUsingPOST(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

}

import { ObservablePipelinesApi } from "./ObservableAPI";
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";

export interface PipelinesApiCreateRequest {
    /**
     * the create request
     * @type CreatePipelineRequest
     * @memberof PipelinesApicreate
     */
    createPipelineRequest: CreatePipelineRequest
}

export interface PipelinesApiDelete1Request {
    /**
     * the pipeline identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApidelete1
     */
    id: string
    /**
     * flag indicating whether cleanup is allowed, can be null
     * Defaults to: undefined
     * @type boolean
     * @memberof PipelinesApidelete1
     */
    allowCleanup?: boolean
    /**
     * the new stage identifier, can be null
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApidelete1
     */
    newStageId?: string
}

export interface PipelinesApiGetRequest {
    /**
     * the entity identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiget
     */
    id: string
}

export interface PipelinesApiGetOutcomeLabelsRequest {
    /**
     * the pipeline identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOutcomeLabels
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOutcomeLabels
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOutcomeLabels
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetOutcomeLabels
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof PipelinesApigetOutcomeLabels
     */
    pageSize?: number
}

export interface PipelinesApiListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilist
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilist
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilist
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof PipelinesApilist
     */
    pageSize?: number
}

export interface PipelinesApiListStagesRequest {
    /**
     * the pipeline identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistStages
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistStages
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistStages
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistStages
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof PipelinesApilistStages
     */
    pageSize?: number
}

export interface PipelinesApiListSummariesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSummaries
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSummaries
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApilistSummaries
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof PipelinesApilistSummaries
     */
    pageSize?: number
}

export interface PipelinesApiSetOutcomeLabelsRequest {
    /**
     * the pipeline identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApisetOutcomeLabels
     */
    id: string
    /**
     * the request containing the new outcome labels
     * @type UpdateOutcomeLabelsRequest
     * @memberof PipelinesApisetOutcomeLabels
     */
    updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest
}

export interface PipelinesApiUpdate1Request {
    /**
     * the entity identifier
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdate1
     */
    id: string
    /**
     * the fields to update
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PipelinesApiupdate1
     */
    updateMask: Array<string>
    /**
     * the update request
     * @type UpdatePipelineRequest
     * @memberof PipelinesApiupdate1
     */
    updatePipelineRequest: UpdatePipelineRequest
}

export class ObjectPipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param param the request object
     */
    public createWithHttpInfo(param: PipelinesApiCreateRequest, options?: Configuration): Promise<HttpInfo<Pipeline>> {
        return this.api.createWithHttpInfo(param.createPipelineRequest,  options).toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param param the request object
     */
    public create(param: PipelinesApiCreateRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.create(param.createPipelineRequest,  options).toPromise();
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param param the request object
     */
    public delete1WithHttpInfo(param: PipelinesApiDelete1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.delete1WithHttpInfo(param.id, param.allowCleanup, param.newStageId,  options).toPromise();
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param param the request object
     */
    public delete1(param: PipelinesApiDelete1Request, options?: Configuration): Promise<void> {
        return this.api.delete1(param.id, param.allowCleanup, param.newStageId,  options).toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param param the request object
     */
    public getWithHttpInfo(param: PipelinesApiGetRequest, options?: Configuration): Promise<HttpInfo<Pipeline>> {
        return this.api.getWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param param the request object
     */
    public get(param: PipelinesApiGetRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.get(param.id,  options).toPromise();
    }

    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param param the request object
     */
    public getOutcomeLabelsWithHttpInfo(param: PipelinesApiGetOutcomeLabelsRequest, options?: Configuration): Promise<HttpInfo<PipelineOutcomeLabelListResponse>> {
        return this.api.getOutcomeLabelsWithHttpInfo(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param param the request object
     */
    public getOutcomeLabels(param: PipelinesApiGetOutcomeLabelsRequest, options?: Configuration): Promise<PipelineOutcomeLabelListResponse> {
        return this.api.getOutcomeLabels(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param param the request object
     */
    public listWithHttpInfo(param: PipelinesApiListRequest = {}, options?: Configuration): Promise<HttpInfo<PipelineListResponse>> {
        return this.api.listWithHttpInfo(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param param the request object
     */
    public list(param: PipelinesApiListRequest = {}, options?: Configuration): Promise<PipelineListResponse> {
        return this.api.list(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param param the request object
     */
    public listStagesWithHttpInfo(param: PipelinesApiListStagesRequest, options?: Configuration): Promise<HttpInfo<PipelineStageListResponse>> {
        return this.api.listStagesWithHttpInfo(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param param the request object
     */
    public listStages(param: PipelinesApiListStagesRequest, options?: Configuration): Promise<PipelineStageListResponse> {
        return this.api.listStages(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param param the request object
     */
    public listSummariesWithHttpInfo(param: PipelinesApiListSummariesRequest = {}, options?: Configuration): Promise<HttpInfo<PipelineSummariesListResponse>> {
        return this.api.listSummariesWithHttpInfo(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param param the request object
     */
    public listSummaries(param: PipelinesApiListSummariesRequest = {}, options?: Configuration): Promise<PipelineSummariesListResponse> {
        return this.api.listSummaries(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param param the request object
     */
    public setOutcomeLabelsWithHttpInfo(param: PipelinesApiSetOutcomeLabelsRequest, options?: Configuration): Promise<HttpInfo<PipelineOutcomeLabelListResponse>> {
        return this.api.setOutcomeLabelsWithHttpInfo(param.id, param.updateOutcomeLabelsRequest,  options).toPromise();
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param param the request object
     */
    public setOutcomeLabels(param: PipelinesApiSetOutcomeLabelsRequest, options?: Configuration): Promise<PipelineOutcomeLabelListResponse> {
        return this.api.setOutcomeLabels(param.id, param.updateOutcomeLabelsRequest,  options).toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param param the request object
     */
    public update1WithHttpInfo(param: PipelinesApiUpdate1Request, options?: Configuration): Promise<HttpInfo<Pipeline>> {
        return this.api.update1WithHttpInfo(param.id, param.updateMask, param.updatePipelineRequest,  options).toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param param the request object
     */
    public update1(param: PipelinesApiUpdate1Request, options?: Configuration): Promise<Pipeline> {
        return this.api.update1(param.id, param.updateMask, param.updatePipelineRequest,  options).toPromise();
    }

}

import { ObservableReportingApi } from "./ObservableAPI";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";

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
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOSTWithHttpInfo(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ReportExecutionResult>> {
        return this.api.runReportUsingPOSTWithHttpInfo(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOST(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<ReportExecutionResult> {
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
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultUsingPOST(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<void> {
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
    public getApplicationConfigurationsUsingGETWithHttpInfo(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetSettingsResponse>> {
        return this.api.getApplicationConfigurationsUsingGETWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurationsUsingGET(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: Configuration): Promise<GetSettingsResponse> {
        return this.api.getApplicationConfigurationsUsingGET(param.fields,  options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        return this.api.getContactOptionTypesUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: Configuration): Promise<GetContactOptionTypesResponse> {
        return this.api.getContactOptionTypesUsingGET1( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGETWithHttpInfo(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        return this.api.isApplicationEnabledUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGET(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: Configuration): Promise<GetApplicationEnabledStatusResponse> {
        return this.api.isApplicationEnabledUsingGET( options).toPromise();
    }

}

import { ObservableStagesApi } from "./ObservableAPI";
import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";

export interface StagesApiCreate1Request {
    /**
     * the create request
     * @type CreateStageRequest
     * @memberof StagesApicreate1
     */
    createStageRequest: CreateStageRequest
}

export interface StagesApiDelete2Request {
    /**
     * the stage identifier
     * Defaults to: undefined
     * @type string
     * @memberof StagesApidelete2
     */
    id: string
    /**
     * the new stage identifier, can be null
     * Defaults to: undefined
     * @type string
     * @memberof StagesApidelete2
     */
    newStageId?: string
}

export interface StagesApiGet1Request {
    /**
     * the entity identifier
     * Defaults to: undefined
     * @type string
     * @memberof StagesApiget1
     */
    id: string
}

export interface StagesApiList1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilist1
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilist1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilist1
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof StagesApilist1
     */
    pageSize?: number
}

export interface StagesApiListStages1Request {
    /**
     * the stage identifier
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilistStages1
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilistStages1
     */
    filter?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilistStages1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof StagesApilistStages1
     */
    orderBy?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof StagesApilistStages1
     */
    pageSize?: number
}

export interface StagesApiUpdate2Request {
    /**
     * the entity identifier
     * Defaults to: undefined
     * @type string
     * @memberof StagesApiupdate2
     */
    id: string
    /**
     * the fields to update
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof StagesApiupdate2
     */
    updateMask: Array<string>
    /**
     * the update request
     * @type UpdateStageRequest
     * @memberof StagesApiupdate2
     */
    updateStageRequest: UpdateStageRequest
}

export class ObjectStagesApi {
    private api: ObservableStagesApi

    public constructor(configuration: Configuration, requestFactory?: StagesApiRequestFactory, responseProcessor?: StagesApiResponseProcessor) {
        this.api = new ObservableStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param param the request object
     */
    public create1WithHttpInfo(param: StagesApiCreate1Request, options?: Configuration): Promise<HttpInfo<Stage>> {
        return this.api.create1WithHttpInfo(param.createStageRequest,  options).toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param param the request object
     */
    public create1(param: StagesApiCreate1Request, options?: Configuration): Promise<Stage> {
        return this.api.create1(param.createStageRequest,  options).toPromise();
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param param the request object
     */
    public delete2WithHttpInfo(param: StagesApiDelete2Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.delete2WithHttpInfo(param.id, param.newStageId,  options).toPromise();
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param param the request object
     */
    public delete2(param: StagesApiDelete2Request, options?: Configuration): Promise<void> {
        return this.api.delete2(param.id, param.newStageId,  options).toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param param the request object
     */
    public get1WithHttpInfo(param: StagesApiGet1Request, options?: Configuration): Promise<HttpInfo<Stage>> {
        return this.api.get1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param param the request object
     */
    public get1(param: StagesApiGet1Request, options?: Configuration): Promise<Stage> {
        return this.api.get1(param.id,  options).toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param param the request object
     */
    public list1WithHttpInfo(param: StagesApiList1Request = {}, options?: Configuration): Promise<HttpInfo<StageListResponse>> {
        return this.api.list1WithHttpInfo(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param param the request object
     */
    public list1(param: StagesApiList1Request = {}, options?: Configuration): Promise<StageListResponse> {
        return this.api.list1(param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param param the request object
     */
    public listStages1WithHttpInfo(param: StagesApiListStages1Request, options?: Configuration): Promise<HttpInfo<StageDealListResponse>> {
        return this.api.listStages1WithHttpInfo(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param param the request object
     */
    public listStages1(param: StagesApiListStages1Request, options?: Configuration): Promise<StageDealListResponse> {
        return this.api.listStages1(param.id, param.filter, param.pageToken, param.orderBy, param.pageSize,  options).toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param param the request object
     */
    public update2WithHttpInfo(param: StagesApiUpdate2Request, options?: Configuration): Promise<HttpInfo<Stage>> {
        return this.api.update2WithHttpInfo(param.id, param.updateMask, param.updateStageRequest,  options).toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param param the request object
     */
    public update2(param: StagesApiUpdate2Request, options?: Configuration): Promise<Stage> {
        return this.api.update2(param.id, param.updateMask, param.updateStageRequest,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest {
    /**
     * createSubscriptionV2
     * @type CreateSubscriptionV2
     * @memberof SubscriptionsApicreateSubscriptionV2UsingPOST
     */
    createSubscriptionV2: CreateSubscriptionV2
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestSubscriptionV2>> {
        return this.api.createSubscriptionV2UsingPOSTWithHttpInfo(param.createSubscriptionV2,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOST(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<RestSubscriptionV2> {
        return this.api.createSubscriptionV2UsingPOST(param.createSubscriptionV2,  options).toPromise();
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
    public applyTagsUsingPOSTWithHttpInfo(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ApplyTagsResponse>> {
        return this.api.applyTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTagsUsingPOST(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<ApplyTagsResponse> {
        return this.api.applyTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1WithHttpInfo(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createTagCategoryUsingPOST1WithHttpInfo(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<Tag> {
        return this.api.createTagCategoryUsingPOST1(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1WithHttpInfo(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createTagUsingPOST1WithHttpInfo(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<Tag> {
        return this.api.createTagUsingPOST1(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTagCategoryUsingDELETEWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETE(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTagCategoryUsingDELETE(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETEWithHttpInfo(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTagUsingDELETEWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETE(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTagUsingDELETE(param.tagId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGETWithHttpInfo(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetTagCategoryResponse>> {
        return this.api.getCategoryUsingGETWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGET(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<GetTagCategoryResponse> {
        return this.api.getCategoryUsingGET(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1WithHttpInfo(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.getTagUsingGET1WithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<Tag> {
        return this.api.getTagUsingGET1(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1WithHttpInfo(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        return this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<ListTaggedCompaniesResponse> {
        return this.api.listCompaniesForTagIdUsingGET1(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGETWithHttpInfo(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListTaggedContactsResponse>> {
        return this.api.listContactsWithTagIdUsingGETWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGET(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<ListTaggedContactsResponse> {
        return this.api.listContactsWithTagIdUsingGET(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGETWithHttpInfo(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListTagCategoriesResponse>> {
        return this.api.listTagCategoriesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGET(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: Configuration): Promise<ListTagCategoriesResponse> {
        return this.api.listTagCategoriesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1WithHttpInfo(param: TagsApiListTagsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListTagsResponse>> {
        return this.api.listTagsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1(param: TagsApiListTagsUsingGET1Request = {}, options?: Configuration): Promise<ListTagsResponse> {
        return this.api.listTagsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOSTWithHttpInfo(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOST(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategoryUsingPATCHWithHttpInfo(param: TagsApiUpdateTagCategoryUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        return this.api.updateTagCategoryUsingPATCHWithHttpInfo(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public updateTagCategoryUsingPATCH(param: TagsApiUpdateTagCategoryUsingPATCHRequest, options?: Configuration): Promise<UpdateTagCategoryResponse> {
        return this.api.updateTagCategoryUsingPATCH(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTagUsingPATCHWithHttpInfo(param: TagsApiUpdateTagUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagResponse>> {
        return this.api.updateTagUsingPATCHWithHttpInfo(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public updateTagUsingPATCH(param: TagsApiUpdateTagUsingPATCHRequest, options?: Configuration): Promise<UpdateTagResponse> {
        return this.api.updateTagUsingPATCH(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

}
