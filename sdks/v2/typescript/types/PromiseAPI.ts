import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { AssignAutomationCategoryRequest } from '../models/AssignAutomationCategoryRequest';
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
import { CancelSubscriptionRequest } from '../models/CancelSubscriptionRequest';
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
import { CreateOrderItemRequest } from '../models/CreateOrderItemRequest';
import { CreateOrderTotalDiscountRequest } from '../models/CreateOrderTotalDiscountRequest';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { CreatePaymentRequest } from '../models/CreatePaymentRequest';
import { CreateProductCategoryRequest } from '../models/CreateProductCategoryRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateProductDiscountRequest } from '../models/CreateProductDiscountRequest';
import { CreateProductInterestBundleRequest } from '../models/CreateProductInterestBundleRequest';
import { CreateProductRequest } from '../models/CreateProductRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateShippingDiscountRequest } from '../models/CreateShippingDiscountRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateSubscriptionPlanRequest } from '../models/CreateSubscriptionPlanRequest';
import { CreateSubscriptionRequest } from '../models/CreateSubscriptionRequest';
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
import { EmailSent } from '../models/EmailSent';
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
import { ListAffiliatePaymentsResponse } from '../models/ListAffiliatePaymentsResponse';
import { ListAffiliateSummariesResponse } from '../models/ListAffiliateSummariesResponse';
import { ListAffiliatesResponse } from '../models/ListAffiliatesResponse';
import { ListAutomationCategoryResponse } from '../models/ListAutomationCategoryResponse';
import { ListAutomationIdsResponse } from '../models/ListAutomationIdsResponse';
import { ListAutomationResponse } from '../models/ListAutomationResponse';
import { ListCampaignsResponse } from '../models/ListCampaignsResponse';
import { ListCategoryDiscountsResponse } from '../models/ListCategoryDiscountsResponse';
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListEmailsSentResponse } from '../models/ListEmailsSentResponse';
import { ListFilesResponse } from '../models/ListFilesResponse';
import { ListFreeTrialDiscountsResponse } from '../models/ListFreeTrialDiscountsResponse';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
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
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListShippingDiscountsResponse } from '../models/ListShippingDiscountsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListUsersPaginatedResponse } from '../models/ListUsersPaginatedResponse';
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
import { Province } from '../models/Province';
import { Referral } from '../models/Referral';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
import { Report } from '../models/Report';
import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { ReportEntryValue } from '../models/ReportEntryValue';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { Resource } from '../models/Resource';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestAffiliatePayment } from '../models/RestAffiliatePayment';
import { RestApplyCommissionRequest } from '../models/RestApplyCommissionRequest';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestProductOption } from '../models/RestProductOption';
import { RestProductOptionValue } from '../models/RestProductOptionValue';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { RestV2Product } from '../models/RestV2Product';
import { RestV2Subscription } from '../models/RestV2Subscription';
import { RestV2User } from '../models/RestV2User';
import { Sequence } from '../models/Sequence';
import { SequencePath } from '../models/SequencePath';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { ShippingDiscount } from '../models/ShippingDiscount';
import { ShippingInformation } from '../models/ShippingInformation';
import { ShippingMethod } from '../models/ShippingMethod';
import { SocialAccount } from '../models/SocialAccount';
import { StackTraceElement } from '../models/StackTraceElement';
import { StageDetails } from '../models/StageDetails';
import { Subscription } from '../models/Subscription';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { Tag } from '../models/Tag';
import { TaggedCompany } from '../models/TaggedCompany';
import { Task } from '../models/Task';
import { Throwable } from '../models/Throwable';
import { URI } from '../models/URI';
import { URL } from '../models/URL';
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
import { ObservableAffiliateApi } from './ObservableAPI';

import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";
export class PromiseAffiliateApi {
    private api: ObservableAffiliateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AffiliateApiRequestFactory,
        responseProcessor?: AffiliateApiResponseProcessor
    ) {
        this.api = new ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateWithHttpInfo(createAffiliateRequest?: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateWithHttpInfo(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliate(createAffiliateRequest?: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliate(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgram(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgram(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramWithHttpInfo(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgramWithHttpInfo(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgram(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgram(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgram(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgram(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgram(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLink(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLink(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliate(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgram(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgram(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLinkWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLink(redirectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLink(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliate(id: string, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalWithHttpInfo(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionEarned>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotalWithHttpInfo(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotal(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionEarned> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotal(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliateId&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliateId%3D%3D123&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;affowed_id&#x60; - &#x60;date_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissions(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateCommissionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateProgramV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgramWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgram(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateProgramV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgram(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLinkWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLink(redirectId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLink(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateCommissionProgramsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionPrograms(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateCommissionProgramsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateCommissionPrograms(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateLinksWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinks(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateLinksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateLinks(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummariesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummaries(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateSummariesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummaries(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgram(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissions(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissions(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateWithHttpInfo(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateWithHttpInfo(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliate(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliate(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgram(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgram(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgram(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgramWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgram(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgram(commissionProgramId, updateMask, updateProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLinkWithHttpInfo(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLink(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgram(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgram(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAutomationApi } from './ObservableAPI';

import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";
export class PromiseAutomationApi {
    private api: ObservableAutomationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationApiRequestFactory,
        responseProcessor?: AutomationApiResponseProcessor
    ) {
        this.api = new ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequence(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddToAutomationSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationWithHttpInfo(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomationWithHttpInfo(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomation(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomation(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationWithHttpInfo(automationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Automation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAutomationWithHttpInfo(automationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomation(automationId: string, _options?: PromiseConfigurationOptions): Promise<Automation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAutomation(automationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAllAutomationIdsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationIdsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAllAutomationIds(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListAutomationIdsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIds(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAutomationsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAutomations(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListAutomationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomations(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAutomationCategoryApi } from './ObservableAPI';

import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";
export class PromiseAutomationCategoryApi {
    private api: ObservableAutomationCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationCategoryApiRequestFactory,
        responseProcessor?: AutomationCategoryApiResponseProcessor
    ) {
        this.api = new ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryWithHttpInfo(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategory(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategory(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesWithHttpInfo(ids: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoriesWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategories(ids: Array<number>, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategories(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoriesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategories(_options?: PromiseConfigurationOptions): Promise<ListAutomationCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategories(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategoryWithHttpInfo(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchCategoryWithHttpInfo(id, patchAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategory(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchCategory(id, patchAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBusinessProfileApi } from './ObservableAPI';

import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";
export class PromiseBusinessProfileApi {
    private api: ObservableBusinessProfileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessProfileApiRequestFactory,
        responseProcessor?: BusinessProfileApiResponseProcessor
    ) {
        this.api = new ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBusinessProfileWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfile(_options?: PromiseConfigurationOptions): Promise<GetBusinessProfileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBusinessProfile(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileWithHttpInfo(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfileWithHttpInfo(updateMask, updateBusinessProfileRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfile(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: PromiseConfigurationOptions): Promise<GetBusinessProfileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfile(updateMask, updateBusinessProfileRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCampaignApi } from './ObservableAPI';

import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";
export class PromiseCampaignApi {
    private api: ObservableCampaignApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignApiRequestFactory,
        responseProcessor?: CampaignApiResponseProcessor
    ) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequenceWithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequence(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddContactsToSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequence(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Campaign>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignWithHttpInfo(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<Campaign> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaign(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listCampaignsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCampaignsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaignsWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listCampaigns(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListCampaignsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaigns(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeContactsFromCampaignSequenceWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequence(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: PromiseConfigurationOptions): Promise<RemoveContactsFromSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeContactsFromCampaignSequence(campaignId, sequenceId, removeContactsFromSequenceRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCategoryDiscountsApi } from './ObservableAPI';

import { CategoryDiscountsApiRequestFactory, CategoryDiscountsApiResponseProcessor} from "../apis/CategoryDiscountsApi";
export class PromiseCategoryDiscountsApi {
    private api: ObservableCategoryDiscountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryDiscountsApiRequestFactory,
        responseProcessor?: CategoryDiscountsApiResponseProcessor
    ) {
        this.api = new ObservableCategoryDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param createCategoryDiscountRequest request
     */
    public createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param createCategoryDiscountRequest request
     */
    public createCategoryDiscount(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: PromiseConfigurationOptions): Promise<CategoryDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryDiscount(createCategoryDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteCategoryDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoryDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteCategoryDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoryDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getCategoryDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getCategoryDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<CategoryDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCategoryDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoryDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListCategoryDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoryDiscounts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param discountId discount_id
     * @param updateCategoryDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscountWithHttpInfo(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param discountId discount_id
     * @param updateCategoryDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscount(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CategoryDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCategoryDiscount(discountId, updateCategoryDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCompanyApi } from './ObservableAPI';

import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";
export class PromiseCompanyApi {
    private api: ObservableCompanyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyApiRequestFactory,
        responseProcessor?: CompanyApiResponseProcessor
    ) {
        this.api = new ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyWithHttpInfo(createCompanyRequest?: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyWithHttpInfo(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompany(createCompanyRequest?: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompany(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyWithHttpInfo(companyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompanyWithHttpInfo(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompany(companyId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompany(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyWithHttpInfo(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompanyWithHttpInfo(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompany(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompany(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies.<br/><br/>If the feature flag is <b>enabled</b>, the endpoint returns the <span style=\'color:red\'>legacy</span> non-paginated list of all companies.<br/>If the flag is <b>disabled</b>, it returns a paginated list using the v2-compliant implementation.<br/><br/><span style=\'color:red\'>Deprecated as of v2</span>: The legacy behavior will be removed after the transition period.
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCompaniesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies.<br/><br/>If the feature flag is <b>enabled</b>, the endpoint returns the <span style=\'color:red\'>legacy</span> non-paginated list of all companies.<br/>If the flag is <b>disabled</b>, it returns a paginated list using the v2-compliant implementation.<br/><br/><span style=\'color:red\'>Deprecated as of v2</span>: The legacy behavior will be removed after the transition period.
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompanies(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListCompaniesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompanies(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyWithHttpInfo(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyWithHttpInfo(companyId, updateMask, updateCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompany(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompany(companyId, updateMask, updateCompanyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableContactApi } from './ObservableAPI';

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class PromiseContactApi {
    private api: ObservableContactApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactWithHttpInfo(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactWithHttpInfo(createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContact(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContact(createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLinkType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkType(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<ContactLinkType> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkType(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContactWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContact(contactId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContact(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactWithHttpInfo(contactId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactWithHttpInfo(contactId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContact(contactId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContact(contactId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContactsWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContacts(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<ContactLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContacts(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactLinkTypesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinkTypesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactLinkTypes(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListContactLinkTypesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinkTypes(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactLinksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinksWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinks(contactId: string, _options?: PromiseConfigurationOptions): Promise<ListContactLinksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinks(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContacts(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContacts(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContactModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContactModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContactsWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContacts(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContacts(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactWithHttpInfo(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContactWithHttpInfo(contactId, updateMask, createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContact(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContact(contactId, updateMask, createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEmailApi } from './ObservableAPI';

import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";
export class PromiseEmailApi {
    private api: ObservableEmailApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailApiRequestFactory,
        responseProcessor?: EmailApiResponseProcessor
    ) {
        this.api = new ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailWithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailWithHttpInfo(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmail(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmail(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsWithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailsSentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailsWithHttpInfo(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmails(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailsSentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmails(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmail(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmail(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsWithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteEmailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailsWithHttpInfo(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmails(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<DeleteEmailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmails(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmail(id: string, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmail(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateWithHttpInfo(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailTemplate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplateWithHttpInfo(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplate(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<EmailTemplate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplate(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailWithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailWithHttpInfo(emailSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmail(emailSendRequest?: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmail(emailSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplateWithHttpInfo(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplateWithHttpInfo(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplate(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplate(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param file File to upload. This is a file sent as multi-part (not a string)
     * @param fileAssociation File association
     * @param fileName File name
     * @param isPublic Is public
     * @param [contactId] Contact ID
     */
    public createFileWithHttpInfo(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFileWithHttpInfo(file, fileAssociation, fileName, isPublic, contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param file File to upload. This is a file sent as multi-part (not a string)
     * @param fileAssociation File association
     * @param fileName File name
     * @param isPublic Is public
     * @param [contactId] Contact ID
     */
    public createFile(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFile(file, fileAssociation, fileName, isPublic, contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFileWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFile(fileId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFile(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFile(fileId: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFile(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileDataWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileData(fileId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileData(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFilesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFilesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFiles(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListFilesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFiles(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param fileId file_id
     * @param [file] File to upload. This is a file sent as multi-part (not a string)
     * @param [fileName] File name
     * @param [isPublic] Is public
     * @param [updateMask] Update Mask
     */
    public updateFileWithHttpInfo(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFileWithHttpInfo(fileId, file, fileName, isPublic, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param fileId file_id
     * @param [file] File to upload. This is a file sent as multi-part (not a string)
     * @param [fileName] File name
     * @param [isPublic] Is public
     * @param [updateMask] Update Mask
     */
    public updateFile(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFile(fileId, file, fileName, isPublic, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFreeTrialDiscountsApi } from './ObservableAPI';

import { FreeTrialDiscountsApiRequestFactory, FreeTrialDiscountsApiResponseProcessor} from "../apis/FreeTrialDiscountsApi";
export class PromiseFreeTrialDiscountsApi {
    private api: ObservableFreeTrialDiscountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FreeTrialDiscountsApiRequestFactory,
        responseProcessor?: FreeTrialDiscountsApiResponseProcessor
    ) {
        this.api = new ObservableFreeTrialDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscount(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFreeTrialDiscount(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteFreeTrialDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFreeTrialDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteFreeTrialDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFreeTrialDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getFreeTrialDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFreeTrialDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getFreeTrialDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFreeTrialDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFreeTrialDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFreeTrialDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFreeTrialDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFreeTrialDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListFreeTrialDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFreeTrialDiscounts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscountWithHttpInfo(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscount(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLeadSourceCategoriesApi } from './ObservableAPI';

import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";
export class PromiseLeadSourceCategoriesApi {
    private api: ObservableLeadSourceCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceCategoriesApiRequestFactory,
        responseProcessor?: LeadSourceCategoriesApiResponseProcessor
    ) {
        this.api = new ObservableLeadSourceCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest The request object to create a new lead source category
     */
    public createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest The request object to create a new lead source category
     */
    public createLeadSourceCategory(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceCategory(createUpdateLeadSourceCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategory(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceCategory(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategory(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceCategory(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceCategoriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceCategoriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceCategories(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategory(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceCategory(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLeadSourceExpensesApi } from './ObservableAPI';

import { LeadSourceExpensesApiRequestFactory, LeadSourceExpensesApiResponseProcessor} from "../apis/LeadSourceExpensesApi";
export class PromiseLeadSourceExpensesApi {
    private api: ObservableLeadSourceExpensesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceExpensesApiRequestFactory,
        responseProcessor?: LeadSourceExpensesApiResponseProcessor
    ) {
        this.api = new ObservableLeadSourceExpensesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public createLeadSourceExpenseWithHttpInfo(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceExpenseWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public createLeadSourceExpense(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceExpense(leadSourceId, createLeadSourceExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceExpense(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceExpense(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceExpensesWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead source expenses
     * List Lead Source Expenses
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceExpenses(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceExpenses(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest The request object to update a lead source expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest The request object to update a lead source expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceExpense(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLeadSourceRecurringExpensesApi } from './ObservableAPI';

import { LeadSourceRecurringExpensesApiRequestFactory, LeadSourceRecurringExpensesApiResponseProcessor} from "../apis/LeadSourceRecurringExpensesApi";
export class PromiseLeadSourceRecurringExpensesApi {
    private api: ObservableLeadSourceRecurringExpensesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceRecurringExpensesApiRequestFactory,
        responseProcessor?: LeadSourceRecurringExpensesApiResponseProcessor
    ) {
        this.api = new ObservableLeadSourceRecurringExpensesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public createLeadSourceRecurringExpense(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of expenses incurred from a recurring expense
     * Retrieves a list of expenses incurred from a recurring expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;incurred_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;incurred_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;incurred_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of recurring expenses with lead_source_id and optional \'filter\' query param
     * Retrieves a list of lead source recurring expenses
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;title&#x60; - (Long) &#x60;amount&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60; - (String) &#x60;next_expense_time&#x60; - (String) &#x60;create_time&#x60; - (String) &#x60;update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;amount%3D%3D2500&#x60; - &#x60;filter&#x3D;next_expense_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;title&#x60; - &#x60;amount&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;next_expense_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceRecurringExpenses(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceRecurringExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceRecurringExpenses(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest The request object to update a lead source recurring expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest The request object to update a lead source recurring expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLeadSourcesApi } from './ObservableAPI';

import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";
export class PromiseLeadSourcesApi {
    private api: ObservableLeadSourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourcesApiRequestFactory,
        responseProcessor?: LeadSourcesApiResponseProcessor
    ) {
        this.api = new ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest The request object to create a new lead source
     */
    public createLeadSourceWithHttpInfo(createLeadSourceRequest: CreateLeadSourceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceWithHttpInfo(createLeadSourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest The request object to create a new lead source
     */
    public createLeadSource(createLeadSourceRequest: CreateLeadSourceRequest, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSource(createLeadSourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceWithHttpInfo(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceWithHttpInfo(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSource(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSource(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceWithHttpInfo(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceWithHttpInfo(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSource(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSource(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourcesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourcesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSources(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourcesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSources(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceWithHttpInfo(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSource(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSource(leadSourceId, createLeadSourceRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLocaleApi } from './ObservableAPI';

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class PromiseLocaleApi {
    private api: ObservableLocaleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param countryCode The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     */
    public getCountryByCodeWithHttpInfo(countryCode: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Country>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCountryByCodeWithHttpInfo(countryCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param countryCode The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     */
    public getCountryByCode(countryCode: string, _options?: PromiseConfigurationOptions): Promise<Country> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCountryByCode(countryCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param countryCode The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * @param provinceCode The ISO 3166-2 code or name of the province to be retrieved
     */
    public getProvinceByCodeWithHttpInfo(countryCode: string, provinceCode: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Province>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProvinceByCodeWithHttpInfo(countryCode, provinceCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param countryCode The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * @param provinceCode The ISO 3166-2 code or name of the province to be retrieved
     */
    public getProvinceByCode(countryCode: string, provinceCode: string, _options?: PromiseConfigurationOptions): Promise<Province> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProvinceByCode(countryCode, provinceCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of countries
     * List Countries
     */
    public listCountriesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCountriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCountriesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of countries
     * List Countries
     */
    public listCountries(_options?: PromiseConfigurationOptions): Promise<ListCountriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCountries(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Province
     * @param countryCode country_code
     */
    public listProvincesForCountryWithHttpInfo(countryCode: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProvincesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProvincesForCountryWithHttpInfo(countryCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Province
     * @param countryCode country_code
     */
    public listProvincesForCountry(countryCode: string, _options?: PromiseConfigurationOptions): Promise<ListProvincesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProvincesForCountry(countryCode, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMerchantsApi } from './ObservableAPI';

import { MerchantsApiRequestFactory, MerchantsApiResponseProcessor} from "../apis/MerchantsApi";
export class PromiseMerchantsApi {
    private api: ObservableMerchantsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MerchantsApiRequestFactory,
        responseProcessor?: MerchantsApiResponseProcessor
    ) {
        this.api = new ObservableMerchantsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListMerchantsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMerchantsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchants(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListMerchantsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMerchants(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNoteApi } from './ObservableAPI';

import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";
export class PromiseNoteApi {
    private api: ObservableNoteApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NoteApiRequestFactory,
        responseProcessor?: NoteApiResponseProcessor
    ) {
        this.api = new ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteWithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Note>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteWithHttpInfo(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNote(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<Note> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNote(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteWithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNoteWithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNote(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNote(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteWithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNoteWithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNote(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<GetNoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNote(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListNoteTemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNoteTemplatesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplates(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListNoteTemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNoteTemplates(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotesWithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListNotesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotesWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotes(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListNotesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotes(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNoteModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNoteModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNote(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UpdateNoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNote(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOpportunityApi } from './ObservableAPI';

import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";
export class PromiseOpportunityApi {
    private api: ObservableOpportunityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunityApiRequestFactory,
        responseProcessor?: OpportunityApiResponseProcessor
    ) {
        this.api = new ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityWithHttpInfo(createOpportunityRequest?: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityWithHttpInfo(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunity(createOpportunityRequest?: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunity(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFields(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFields(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageWithHttpInfo(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStageWithHttpInfo(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStage(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStage(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityWithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunity(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunity(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStageWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStage(stageId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStage(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityWithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunity(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunity(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStageWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStage(stageId: string, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStage(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOpportunitiesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunities(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOpportunitiesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunities(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunityStagesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStages(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOpportunityStagesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunityStages(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityWithHttpInfo(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunity(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStage(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityStage(stageId, updateOpportunityStageRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrderTotalDiscountsApi } from './ObservableAPI';

import { OrderTotalDiscountsApiRequestFactory, OrderTotalDiscountsApiResponseProcessor} from "../apis/OrderTotalDiscountsApi";
export class PromiseOrderTotalDiscountsApi {
    private api: ObservableOrderTotalDiscountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderTotalDiscountsApiRequestFactory,
        responseProcessor?: OrderTotalDiscountsApiResponseProcessor
    ) {
        this.api = new ObservableOrderTotalDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscount(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscount(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderTotalDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderTotalDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderTotalDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOrderTotalDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderTotalDiscounts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderTotalDiscountWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscount(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderTotalDiscount(discountId, updateOrderTotalDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOrdersApi } from './ObservableAPI';

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class PromiseOrdersApi {
    private api: ObservableOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveOrderCustomFieldModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveOrderCustomFieldModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePaymentMethodConfigsApi } from './ObservableAPI';

import { PaymentMethodConfigsApiRequestFactory, PaymentMethodConfigsApiResponseProcessor} from "../apis/PaymentMethodConfigsApi";
export class PromisePaymentMethodConfigsApi {
    private api: ObservablePaymentMethodConfigsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodConfigsApiRequestFactory,
        responseProcessor?: PaymentMethodConfigsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentMethodConfigsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfig(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<PaymentMethodConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfig(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductCategoriesApi } from './ObservableAPI';

import { ProductCategoriesApiRequestFactory, ProductCategoriesApiResponseProcessor} from "../apis/ProductCategoriesApi";
export class PromiseProductCategoriesApi {
    private api: ObservableProductCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductCategoriesApiRequestFactory,
        responseProcessor?: ProductCategoriesApiResponseProcessor
    ) {
        this.api = new ObservableProductCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns products to a Product Category
     * Assign Products to a Product Category
     * @param categoryId category_id
     * @param assignProductsRequest request
     */
    public assignProductsToCategoryWithHttpInfo(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns products to a Product Category
     * Assign Products to a Product Category
     * @param categoryId category_id
     * @param assignProductsRequest request
     */
    public assignProductsToCategory(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductsToCategory(categoryId, assignProductsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param categoryId category_id
     * @param file File to upload
     */
    public createImageFileWithHttpInfo(categoryId: string, file: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createImageFileWithHttpInfo(categoryId, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param categoryId category_id
     * @param file File to upload
     */
    public createImageFile(categoryId: string, file: HttpFile, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createImageFile(categoryId, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param [createProductCategoryRequest] productCategory
     */
    public createProductCategoryWithHttpInfo(createProductCategoryRequest?: CreateProductCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductCategoryWithHttpInfo(createProductCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param [createProductCategoryRequest] productCategory
     */
    public createProductCategory(createProductCategoryRequest?: CreateProductCategoryRequest, _options?: PromiseConfigurationOptions): Promise<ProductCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductCategory(createProductCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId category_id
     */
    public deleteImageFileWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageFileWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId category_id
     */
    public deleteImageFile(categoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageFile(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId category_id
     */
    public deleteProductCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductCategoryWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId category_id
     */
    public deleteProductCategory(categoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductCategory(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId category_id
     */
    public getProductCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductCategoryWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId category_id
     */
    public getProductCategory(categoryId: string, _options?: PromiseConfigurationOptions): Promise<ProductCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductCategory(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductCategoriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductCategoriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductCategories(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param categoryId category_id
     * @param updateProductCategoryRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategoryWithHttpInfo(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param categoryId category_id
     * @param updateProductCategoryRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategory(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCategory(categoryId, updateProductCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductDiscountsApi } from './ObservableAPI';

import { ProductDiscountsApiRequestFactory, ProductDiscountsApiResponseProcessor} from "../apis/ProductDiscountsApi";
export class PromiseProductDiscountsApi {
    private api: ObservableProductDiscountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductDiscountsApiRequestFactory,
        responseProcessor?: ProductDiscountsApiResponseProcessor
    ) {
        this.api = new ObservableProductDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest request
     */
    public createProductDiscountWithHttpInfo(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductDiscountWithHttpInfo(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest request
     */
    public createProductDiscount(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductDiscount(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteProductDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteProductDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getProductDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getProductDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductDiscounts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscountWithHttpInfo(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductDiscountWithHttpInfo(discountId, updateProductDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscount(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductDiscount(discountId, updateProductDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductInterestBundlesApi } from './ObservableAPI';

import { ProductInterestBundlesApiRequestFactory, ProductInterestBundlesApiResponseProcessor} from "../apis/ProductInterestBundlesApi";
export class PromiseProductInterestBundlesApi {
    private api: ObservableProductInterestBundlesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductInterestBundlesApiRequestFactory,
        responseProcessor?: ProductInterestBundlesApiResponseProcessor
    ) {
        this.api = new ObservableProductInterestBundlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id id
     * @param addProductInterestRequest request
     */
    public addProductInterestWithHttpInfo(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterestWithHttpInfo(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id id
     * @param addProductInterestRequest request
     */
    public addProductInterest(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterest(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundle(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundle(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundle(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundle(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductInterestBundleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundle(id: string, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductInterestBundle(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductInterestBundlesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductInterestBundleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductInterestBundlesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductInterestBundles(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductInterestBundleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductInterestBundles(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterestWithHttpInfo(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterestWithHttpInfo(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterest(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterest(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id id
     * @param interestId interest_id
     * @param updateProductInterestRequest updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestWithHttpInfo(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id id
     * @param interestId interest_id
     * @param updateProductInterestRequest updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterest(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterest(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleWithHttpInfo(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundle(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestBundle(id, updateProductInterestBundleRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventoryWithHttpInfo(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Product>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.adjustInventoryWithHttpInfo(productId, updateProductInventoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventory(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: PromiseConfigurationOptions): Promise<RestV2Product> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.adjustInventory(productId, updateProductInventoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProductWithHttpInfo(createProductRequest: CreateProductRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Product>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductWithHttpInfo(createProductRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProduct(createProductRequest: CreateProductRequest, _options?: PromiseConfigurationOptions): Promise<RestV2Product> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProduct(createProductRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param productId product_id
     * @param file File to upload
     */
    public createProductImageWithHttpInfo(productId: string, file: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductImageWithHttpInfo(productId, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param productId product_id
     * @param file File to upload
     */
    public createProductImage(productId: string, file: HttpFile, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductImage(productId, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProduct(productId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProduct(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param productId product_id
     */
    public deleteProductImageWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductImageWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param productId product_id
     */
    public deleteProductImage(productId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductImage(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Product>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProduct(productId: string, _options?: PromiseConfigurationOptions): Promise<RestV2Product> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProduct(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProducts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProducts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequest updateProductRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductWithHttpInfo(productId: string, updateProductRequest: UpdateProductRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Product>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductWithHttpInfo(productId, updateProductRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequest updateProductRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProduct(productId: string, updateProductRequest: UpdateProductRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RestV2Product> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProduct(productId, updateProductRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReportingApi } from './ObservableAPI';

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class PromiseReportingApi {
    private api: ObservableReportingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReportsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListReportsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReportsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReports(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListReportsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReports(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReportWithHttpInfo(reportId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Report>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReportWithHttpInfo(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReport(reportId: string, _options?: PromiseConfigurationOptions): Promise<Report> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReport(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     */
    public runReportWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportExecutionResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReportWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     */
    public runReport(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ReportExecutionResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReport(reportId, fields, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSalesApi } from './ObservableAPI';

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class PromiseSalesApi {
    private api: ObservableSalesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setMerchantGatewayAsDefaultWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefault(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setMerchantGatewayAsDefault(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsWithHttpInfo(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApplicationConfigurationsWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurations(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: PromiseConfigurationOptions): Promise<GetSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApplicationConfigurations(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactOptionTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypes(_options?: PromiseConfigurationOptions): Promise<GetContactOptionTypesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactOptionTypes(observableOptions);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.isApplicationEnabledWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabled(_options?: PromiseConfigurationOptions): Promise<GetApplicationEnabledStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.isApplicationEnabled(observableOptions);
        return result.toPromise();
    }


}



import { ObservableShippingApi } from './ObservableAPI';

import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";
export class PromiseShippingApi {
    private api: ObservableShippingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingApiRequestFactory,
        responseProcessor?: ShippingApiResponseProcessor
    ) {
        this.api = new ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listShippingMethodsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethods(_options?: PromiseConfigurationOptions): Promise<ListRestShippingMethodsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listShippingMethods(observableOptions);
        return result.toPromise();
    }


}



import { ObservableShippingDiscountsApi } from './ObservableAPI';

import { ShippingDiscountsApiRequestFactory, ShippingDiscountsApiResponseProcessor} from "../apis/ShippingDiscountsApi";
export class PromiseShippingDiscountsApi {
    private api: ObservableShippingDiscountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingDiscountsApiRequestFactory,
        responseProcessor?: ShippingDiscountsApiResponseProcessor
    ) {
        this.api = new ObservableShippingDiscountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createShippingDiscountWithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createShippingDiscountWithHttpInfo(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createShippingDiscount(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createShippingDiscount(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteShippingDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteShippingDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteShippingDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteShippingDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getShippingDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getShippingDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getShippingDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getShippingDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listShippingDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListShippingDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listShippingDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listShippingDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListShippingDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listShippingDiscounts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscountWithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscount(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateShippingDiscount(discountId, updateShippingDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSubscriptionPlansApi } from './ObservableAPI';

import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";
export class PromiseSubscriptionPlansApi {
    private api: ObservableSubscriptionPlansApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionPlansApiRequestFactory,
        responseProcessor?: SubscriptionPlansApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param productId product_id
     * @param createSubscriptionPlanRequest createSubscriptionPlanRequest
     */
    public createSubscriptionPlansWithHttpInfo(productId: string, createSubscriptionPlanRequest: CreateSubscriptionPlanRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param productId product_id
     * @param createSubscriptionPlanRequest createSubscriptionPlanRequest
     */
    public createSubscriptionPlans(productId: string, createSubscriptionPlanRequest: CreateSubscriptionPlanRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionPlan> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionPlans(productId, createSubscriptionPlanRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public deleteSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public deleteSubscriptionPlan(productId: string, subscriptionPlanId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionPlan(productId, subscriptionPlanId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public fetchSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.fetchSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public fetchSubscriptionPlan(productId: string, subscriptionPlanId: string, _options?: PromiseConfigurationOptions): Promise<SubscriptionPlan> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.fetchSubscriptionPlan(productId, subscriptionPlanId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param productId product_id
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansWithHttpInfo(productId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubscriptionPlansWithHttpInfo(productId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param productId product_id
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlans(productId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListSubscriptionPlansResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubscriptionPlans(productId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     * @param updateSubscriptionPlanRequest updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     * @param updateSubscriptionPlanRequest updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlan(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<SubscriptionPlan> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSubscriptionsApi } from './ObservableAPI';

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class PromiseSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequest request
     */
    public createSubscriptionWithHttpInfo(createSubscriptionRequest: CreateSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Subscription>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionWithHttpInfo(createSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequest request
     */
    public createSubscription(createSubscriptionRequest: CreateSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<Subscription> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscription(createSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSubscriptionCustomFieldModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSubscriptionCustomFieldModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplyTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTagsWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<ApplyTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTags(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagWithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagWithHttpInfo(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTag(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTag(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategory(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategory(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagWithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTag(tagId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTag(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategoryWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategory(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategory(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategory(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<GetTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategory(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagWithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTagWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTag(tagId: string, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTag(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagIdWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesForTagIdWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;company_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagId(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTaggedCompaniesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesForTagId(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagIdWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTaggedContactsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithTagIdWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;email&#x60; - &#x60;applied_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagId(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTaggedContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithTagId(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTagCategoriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTagCategoriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagCategories(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTags(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTags(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTagsWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTags(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagWithHttpInfo(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagWithHttpInfo(tagId, updateMask, createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTag(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTagResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTag(tagId, updateMask, createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategoryWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategory(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategory(tagCategoryId, updateMask, createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskWithHttpInfo(createTaskRequest?: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskWithHttpInfo(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTask(createTaskRequest?: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTask(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CreateCustomFieldResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTask(taskId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTask(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaskWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTask(taskId: string, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTask(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTasksWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTasksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTasksWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTasks(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTasksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTasks(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTaskModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTaskModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTaskWithHttpInfo(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskWithHttpInfo(taskId, updateMask, createUpdateTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTask(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTask(taskId, updateMask, createUpdateTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsersWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUsersPaginatedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaginatedUsersWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsers(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListUsersPaginatedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaginatedUsers(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }


}



