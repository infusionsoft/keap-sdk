import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
     * @param createAffiliateRequest
     */
    public addAffiliateWithHttpInfo(createAffiliateRequest: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateWithHttpInfo(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param createAffiliateRequest
     */
    public addAffiliate(createAffiliateRequest: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliate(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id
     * @param affiliateAddToProgramRequest
     */
    public addAffiliateToProgramWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id
     * @param affiliateAddToProgramRequest
     */
    public addAffiliateToProgram(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgram(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param createCommissionProgramRequest
     */
    public addCommissionProgramWithHttpInfo(createCommissionProgramRequest: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgramWithHttpInfo(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param createCommissionProgramRequest
     */
    public addCommissionProgram(createCommissionProgramRequest: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgram(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId
     * @param createProductCommissionProgramRequest
     */
    public assignProductCommissionProgramWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId
     * @param createProductCommissionProgramRequest
     */
    public assignProductCommissionProgram(commissionProgramId: string, createProductCommissionProgramRequest: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId
     * @param createSubscriptionCommissionProgramRequest
     */
    public assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId
     * @param createSubscriptionCommissionProgramRequest
     */
    public assignSubscriptionCommissionProgram(commissionProgramId: string, createSubscriptionCommissionProgramRequest: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest
     */
    public createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest
     */
    public createAffiliateCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAffiliateCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId
     * @param createDefaultCommissionProgramRequest
     */
    public createDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId
     * @param createDefaultCommissionProgramRequest
     */
    public createDefaultCommissionProgram(commissionProgramId: string, createDefaultCommissionProgramRequest: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest
     */
    public createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest
     */
    public createRedirectLink(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLink(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id
     */
    public deleteAffiliateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id
     */
    public deleteAffiliate(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId
     */
    public deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId
     */
    public deleteAffiliateCommissionProgram(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgram(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteAffiliateCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteAffiliateCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId
     */
    public deleteRedirectLinkWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLinkWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId
     */
    public deleteRedirectLink(redirectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLink(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id
     */
    public getAffiliateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id
     */
    public getAffiliate(id: string, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId
     */
    public getAffiliateCommissionTotalWithHttpInfo(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionEarned>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotalWithHttpInfo(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId
     */
    public getAffiliateCommissionTotal(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionEarned> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotal(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions
     * Retrieve Affiliate Commissions
     * @param affiliateId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions
     * Retrieve Affiliate Commissions
     * @param affiliateId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-05-21T23:00:00Z%3Buntil_time%3D%3D2025-05-21T23:00:00Z&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-05-21T23:00:00Z&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;time_earned&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissions(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateCommissionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCustomFieldsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFields(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCustomFields(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId
     */
    public getCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetRestCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgramWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId
     */
    public getCommissionProgram(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<GetRestCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgram(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId
     */
    public getRedirectLinkWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLinkWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId
     */
    public getRedirectLink(redirectId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLink(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param affiliateId
     */
    public getReferralsByAffiliateIdWithHttpInfo(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateReferralsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getReferralsByAffiliateIdWithHttpInfo(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param affiliateId
     */
    public getReferralsByAffiliateId(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateReferralsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getReferralsByAffiliateId(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliatesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliate(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliatesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliate(filter, orderBy, pageSize, pageToken, observableOptions);
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
     * Retrieves a list of affiliate payments
     * List Affiliate Payments
     * @param affiliateId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliatePaymentsWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliatePaymentsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliatePaymentsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of affiliate payments
     * List Affiliate Payments
     * @param affiliateId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60; - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;pay_date&#x60; - &#x60;pay_amount&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliatePayments(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliatePaymentsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliatePayments(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param commissionProgramId
     */
    public listCommissionProgramResourcesWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProgramResourcesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCommissionProgramResourcesWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param commissionProgramId
     */
    public listCommissionProgramResources(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<ListProgramResourcesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCommissionProgramResources(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
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
     * @param id
     * @param affiliateRemoveFromProgramRequest
     */
    public removeAffiliateFromProgramWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id
     * @param affiliateRemoveFromProgramRequest
     */
    public removeAffiliateFromProgram(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId
     * @param deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId
     * @param deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissions(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId
     * @param deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId
     * @param deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissions(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id
     * @param updateAffiliateRequest
     */
    public updateAffiliateWithHttpInfo(id: string, updateAffiliateRequest: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateWithHttpInfo(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id
     * @param updateAffiliateRequest
     */
    public updateAffiliate(id: string, updateAffiliateRequest: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliate(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId
     * @param updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: 'name,notes,priority', _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId
     * @param updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgram(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: 'name,notes,priority', _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId
     * @param updateDefaultCommissionProgramRequest
     * @param [updateMask]
     */
    public updateDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, updateDefaultCommissionProgramRequest: UpdateDefaultCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId
     * @param updateDefaultCommissionProgramRequest
     * @param [updateMask]
     */
    public updateDefaultCommissionProgram(commissionProgramId: string, updateDefaultCommissionProgramRequest: UpdateDefaultCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId
     * @param updateProductCommissionProgramRequest
     * @param [updateMask]
     */
    public updateProductCommissionProgramWithHttpInfo(commissionProgramId: string, updateProductCommissionProgramRequest: UpdateProductCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateProductCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId
     * @param updateProductCommissionProgramRequest
     * @param [updateMask]
     */
    public updateProductCommissionProgram(commissionProgramId: string, updateProductCommissionProgramRequest: UpdateProductCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId
     * @param createOrUpdateAffiliateLinkRequest
     */
    public updateRedirectLinkWithHttpInfo(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId
     * @param createOrUpdateAffiliateLinkRequest
     */
    public updateRedirectLink(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId
     * @param updateSubscriptionCommissionProgramRequest
     * @param [updateMask]
     */
    public updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, updateSubscriptionCommissionProgramRequest: UpdateSubscriptionCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId
     * @param updateSubscriptionCommissionProgramRequest
     * @param [updateMask]
     */
    public updateSubscriptionCommissionProgram(commissionProgramId: string, updateSubscriptionCommissionProgramRequest: UpdateSubscriptionCommissionProgramRequest, updateMask?: Set<string>, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask, observableOptions);
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
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param achieveGoalRequest
     */
    public achieveGoalWithHttpInfo(achieveGoalRequest: AchieveGoalRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AchieveGoalResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.achieveGoalWithHttpInfo(achieveGoalRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param achieveGoalRequest
     */
    public achieveGoal(achieveGoalRequest: AchieveGoalRequest, _options?: PromiseConfigurationOptions): Promise<AchieveGoalResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.achieveGoal(achieveGoalRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId
     * @param sequenceId
     * @param addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId
     * @param sequenceId
     * @param addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequence(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddToAutomationSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param batchUnpublishAutomationRequest
     */
    public bulkUnpublishAutomationsWithHttpInfo(batchUnpublishAutomationRequest: BatchUnpublishAutomationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkUnpublishAutomationsWithHttpInfo(batchUnpublishAutomationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param batchUnpublishAutomationRequest
     */
    public bulkUnpublishAutomations(batchUnpublishAutomationRequest: BatchUnpublishAutomationRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkUnpublishAutomations(batchUnpublishAutomationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds
     */
    public deleteAutomationWithHttpInfo(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomationWithHttpInfo(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds
     */
    public deleteAutomation(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomation(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId
     */
    public getAutomationWithHttpInfo(automationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Automation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAutomationWithHttpInfo(automationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId
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
     */
    public listAllAutomationIdsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationIdsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAllAutomationIds(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAutomationIdsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIds(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAutomationsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAutomations(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAutomationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomations(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param automationId
     * @param unpublishAutomationRequest
     */
    public unpublishAutomationWithHttpInfo(automationId: string, unpublishAutomationRequest: UnpublishAutomationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unpublishAutomationWithHttpInfo(automationId, unpublishAutomationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param automationId
     * @param unpublishAutomationRequest
     */
    public unpublishAutomation(automationId: string, unpublishAutomationRequest: UnpublishAutomationRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unpublishAutomation(automationId, unpublishAutomationRequest, observableOptions);
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
     * @param createAutomationCategoryRequest
     */
    public createCategoryWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryWithHttpInfo(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest
     */
    public createCategory(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategory(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids
     */
    public deleteCategoriesWithHttpInfo(ids: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoriesWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids
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
     * @param id
     * @param patchAutomationCategoryRequest
     */
    public patchCategoryWithHttpInfo(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchCategoryWithHttpInfo(id, patchAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id
     * @param patchAutomationCategoryRequest
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
     * @param updateBusinessProfileRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateBusinessProfileWithHttpInfo(updateBusinessProfileRequest: UpdateBusinessProfileRequest, updateMask?: 'name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color', _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfileWithHttpInfo(updateBusinessProfileRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param updateBusinessProfileRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateBusinessProfile(updateBusinessProfileRequest: UpdateBusinessProfileRequest, updateMask?: 'name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color', _options?: PromiseConfigurationOptions): Promise<GetBusinessProfileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfile(updateBusinessProfileRequest, updateMask, observableOptions);
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
     * @param campaignId
     * @param sequenceId
     * @param addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequenceWithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param addContactsToSequenceRequest
     */
    public addContactsToCampaignSequence(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddContactsToSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequence(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId
     */
    public getCampaignWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Campaign>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignWithHttpInfo(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId
     */
    public getCampaign(campaignId: string, _options?: PromiseConfigurationOptions): Promise<Campaign> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaign(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param campaignId
     */
    public getCampaignGoalsWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCampaignGoalsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignGoalsWithHttpInfo(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param campaignId
     */
    public getCampaignGoals(campaignId: string, _options?: PromiseConfigurationOptions): Promise<ListCampaignGoalsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignGoals(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param campaignId
     */
    public getCampaignSequencesWithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCampaignSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignSequencesWithHttpInfo(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param campaignId
     */
    public getCampaignSequences(campaignId: string, _options?: PromiseConfigurationOptions): Promise<ListCampaignSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignSequences(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCampaignsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCampaignsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaignsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCampaigns(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListCampaignsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaigns(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeContactsFromCampaignSequenceWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param removeContactsFromSequenceRequest
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
     * @param createCategoryDiscountRequest
     */
    public createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param createCategoryDiscountRequest
     */
    public createCategoryDiscount(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: PromiseConfigurationOptions): Promise<CategoryDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryDiscount(createCategoryDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId
     */
    public deleteCategoryDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoryDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId
     */
    public deleteCategoryDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoryDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId
     */
    public getCategoryDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId
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
     * @param discountId
     * @param updateCategoryDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscountWithHttpInfo(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: 'name,description,discount_percent,apply_to_commissions,criteria,product_category_ids', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CategoryDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param discountId
     * @param updateCategoryDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscount(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: 'name,description,discount_percent,apply_to_commissions,criteria,product_category_ids', _options?: PromiseConfigurationOptions): Promise<CategoryDiscount> {
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
     * @param createCompanyRequest
     */
    public createCompanyWithHttpInfo(createCompanyRequest: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyWithHttpInfo(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param createCompanyRequest
     */
    public createCompany(createCompanyRequest: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompany(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param createCustomFieldRequest
     */
    public createCompanyCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param createCustomFieldRequest
     */
    public createCompanyCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId
     */
    public deleteCompanyWithHttpInfo(companyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompanyWithHttpInfo(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId
     */
    public deleteCompany(companyId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompany(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyWithHttpInfo(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompanyWithHttpInfo(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompany(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompany(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies.<br/><br/>
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;address&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * Retrieves a list of all Companies.<br/><br/>
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60;, &#x60;address&#x60;, &#x60;email_address&#x60;, &#x60;phone_number&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     */
    public retrieveCompanyCustomFieldModelWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCompanyCustomFieldModelWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     */
    public retrieveCompanyCustomFieldModel(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveCompanyCustomFieldModel(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId
     * @param updateCompanyRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyWithHttpInfo(companyId: string, updateCompanyRequest: UpdateCompanyRequest, updateMask?: 'id,company_name,address,phone_number,fax_number,email_address, notes,website,custom_fields,create_time,update_time', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyWithHttpInfo(companyId, updateCompanyRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId
     * @param updateCompanyRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompany(companyId: string, updateCompanyRequest: UpdateCompanyRequest, updateMask?: 'id,company_name,address,phone_number,fax_number,email_address, notes,website,custom_fields,create_time,update_time', _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompany(companyId, updateCompanyRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
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
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param createUpdateContactRequest
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [duplicateOption] Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
     */
    public createContactWithHttpInfo(createUpdateContactRequest: CreateUpdateContactRequest, fields?: Array<string>, duplicateOption?: 'Email' | 'EmailAndName' | 'EmailAndNameAndCompany', _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactWithHttpInfo(createUpdateContactRequest, fields, duplicateOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param createUpdateContactRequest
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [duplicateOption] Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
     */
    public createContact(createUpdateContactRequest: CreateUpdateContactRequest, fields?: Array<string>, duplicateOption?: 'Email' | 'EmailAndName' | 'EmailAndNameAndCompany', _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContact(createUpdateContactRequest, fields, duplicateOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param createCustomFieldRequest
     */
    public createContactCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param createCustomFieldRequest
     */
    public createContactCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest
     */
    public createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLinkType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest
     */
    public createContactLinkType(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<ContactLinkType> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkType(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId
     */
    public deleteContactWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContactWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId
     */
    public deleteContact(contactId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContact(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId
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
     * @param contactId
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
     * @param linkContactsRequest
     */
    public linkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContactsWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest
     */
    public linkContacts(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<ContactLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContacts(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
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
     * @param contactId
     */
    public listContactLinksWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactLinksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinksWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId
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
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
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
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContacts(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContacts(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tags applied to the specified Contact
     * List Applied Tags
     * @param contactId Contact identifier
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTagsForContactWithHttpInfo(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagsForContactWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tags applied to the specified Contact
     * List Applied Tags
     * @param contactId Contact identifier
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; (use &#x60;category_id&#x3D;&#x3D;NONE&#x60; to filter tags not assigned to any category) - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DCustomer&#x60; - &#x60;filter&#x3D;category_id%3D%3D123&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60; - &#x60;applied_time&#x60; - &#x60;category_id&#x60; One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTagsForContact(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<ListContactTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagsForContact(contactId, filter, pageToken, orderBy, pageSize, observableOptions);
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
     * @param linkContactsRequest
     */
    public unlinkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContactsWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest
     */
    public unlinkContacts(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContacts(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId
     * @param createUpdateContactRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public updateContactWithHttpInfo(contactId: string, createUpdateContactRequest: CreateUpdateContactRequest, updateMask?: 'addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website', fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContactWithHttpInfo(contactId, createUpdateContactRequest, updateMask, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId
     * @param createUpdateContactRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public updateContact(contactId: string, createUpdateContactRequest: CreateUpdateContactRequest, updateMask?: 'addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website', fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContact(contactId, createUpdateContactRequest, updateMask, fields, observableOptions);
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
     * @param createEmailSentRequest
     */
    public createEmailWithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailWithHttpInfo(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest
     */
    public createEmail(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmail(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param createEmailsSentRequest
     */
    public createEmailsWithHttpInfo(createEmailsSentRequest: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailsSentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailsWithHttpInfo(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param createEmailsSentRequest
     */
    public createEmails(createEmailsSentRequest: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailsSentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmails(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id
     */
    public deleteEmailWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id
     */
    public deleteEmail(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmail(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest
     */
    public deleteEmailsWithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteEmailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailsWithHttpInfo(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest
     */
    public deleteEmails(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<DeleteEmailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmails(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id
     */
    public getEmailWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id
     */
    public getEmail(id: string, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmail(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId
     */
    public getEmailTemplateWithHttpInfo(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailTemplate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplateWithHttpInfo(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId
     */
    public getEmailTemplate(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<EmailTemplate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplate(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listEmailsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListEmailsSentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmailsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listEmails(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListEmailsSentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listEmails(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param emailSendRequest
     */
    public sendEmailWithHttpInfo(emailSendRequest: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailWithHttpInfo(emailSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param emailSendRequest
     */
    public sendEmail(emailSendRequest: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmail(emailSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param emailSendTemplateRequest
     */
    public sendEmailTemplateWithHttpInfo(emailSendTemplateRequest: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplateWithHttpInfo(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param emailSendTemplateRequest
     */
    public sendEmailTemplate(emailSendTemplateRequest: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplate(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEmailAddressApi } from './ObservableAPI';

import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";
export class PromiseEmailAddressApi {
    private api: ObservableEmailAddressApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressApiRequestFactory,
        responseProcessor?: EmailAddressApiResponseProcessor
    ) {
        this.api = new ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param email
     */
    public getEmailAddressStatusWithHttpInfo(email: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestEmailAddressStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailAddressStatusWithHttpInfo(email, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param email
     */
    public getEmailAddressStatus(email: string, _options?: PromiseConfigurationOptions): Promise<RestEmailAddressStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailAddressStatus(email, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email
     * @param updateEmailAddress
     */
    public updateEmailAddressOptStatusWithHttpInfo(email: string, updateEmailAddress: UpdateEmailAddress, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestEmailAddressStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailAddressOptStatusWithHttpInfo(email, updateEmailAddress, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email
     * @param updateEmailAddress
     */
    public updateEmailAddressOptStatus(email: string, updateEmailAddress: UpdateEmailAddress, _options?: PromiseConfigurationOptions): Promise<RestEmailAddressStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateEmailAddressOptStatus(email, updateEmailAddress, observableOptions);
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
     * @param fileName File name
     * @param isPublic Is public
     * @param fileAssociation File association
     * @param file2 File to upload
     * @param fileName2 File name
     * @param isPublic2 Is public
     * @param fileAssociation2 File association
     * @param [contactId] Contact ID
     * @param [contactId2] Contact ID. Required if the &#x60;file_association&#x60; is CONTACT
     */
    public createFileWithHttpInfo(file: HttpFile, fileName: string, isPublic: boolean, fileAssociation: string, file2: HttpFile, fileName2: string, isPublic2: string, fileAssociation2: string, contactId?: string, contactId2?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFileWithHttpInfo(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param file File to upload. This is a file sent as multi-part (not a string)
     * @param fileName File name
     * @param isPublic Is public
     * @param fileAssociation File association
     * @param file2 File to upload
     * @param fileName2 File name
     * @param isPublic2 Is public
     * @param fileAssociation2 File association
     * @param [contactId] Contact ID
     * @param [contactId2] Contact ID. Required if the &#x60;file_association&#x60; is CONTACT
     */
    public createFile(file: HttpFile, fileName: string, isPublic: boolean, fileAssociation: string, file2: HttpFile, fileName2: string, isPublic2: string, fileAssociation2: string, contactId?: string, contactId2?: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFile(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId
     */
    public deleteFileWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFileWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId
     */
    public deleteFile(fileId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFile(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId
     */
    public getFileWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId
     */
    public getFile(fileId: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFile(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId
     */
    public getFileDataWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileDataWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId
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
     * @param fileId
     * @param [updateMask] Update Mask
     * @param [file] File to upload. This is a file sent as multi-part (not a string)
     * @param [fileName] File name
     * @param [isPublic] Is public
     * @param [file2] File to upload
     * @param [fileName2] File name
     * @param [isPublic2] Is public
     */
    public updateFileWithHttpInfo(fileId: string, updateMask?: string, file?: HttpFile, fileName?: string, isPublic?: boolean, file2?: HttpFile, fileName2?: string, isPublic2?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFileWithHttpInfo(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a file. Note that this endpoint is using a POST method instead of PATCH.
     * Update a file
     * @param fileId
     * @param [updateMask] Update Mask
     * @param [file] File to upload. This is a file sent as multi-part (not a string)
     * @param [fileName] File name
     * @param [isPublic] Is public
     * @param [file2] File to upload
     * @param [fileName2] File name
     * @param [isPublic2] Is public
     */
    public updateFile(fileId: string, updateMask?: string, file?: HttpFile, fileName?: string, isPublic?: boolean, file2?: HttpFile, fileName2?: string, isPublic2?: boolean, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFile(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2, observableOptions);
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
     * @param createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscount(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFreeTrialDiscount(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId
     */
    public deleteFreeTrialDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFreeTrialDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId
     */
    public deleteFreeTrialDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFreeTrialDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId
     */
    public getFreeTrialDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFreeTrialDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId
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
     * @param discountId
     * @param updateFreeTrialDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscountWithHttpInfo(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: 'name,description,free_trial_days,hide_price,subscription_plan_id,criteria', _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId
     * @param updateFreeTrialDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscount(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: 'name,description,free_trial_days,hide_price,subscription_plan_id,criteria', _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIntegrationsApi } from './ObservableAPI';

import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor} from "../apis/IntegrationsApi";
export class PromiseIntegrationsApi {
    private api: ObservableIntegrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IntegrationsApiRequestFactory,
        responseProcessor?: IntegrationsApiResponseProcessor
    ) {
        this.api = new ObservableIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param createIntegrationsWordPressOptInOption
     */
    public addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption: CreateIntegrationsWordPressOptInOption, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WordPressOptInOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param createIntegrationsWordPressOptInOption
     */
    public addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption: CreateIntegrationsWordPressOptInOption, _options?: PromiseConfigurationOptions): Promise<WordPressOptInOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param optionKey
     */
    public deleteIntegrationsWordPressOptInWithHttpInfo(optionKey: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteIntegrationsWordPressOptInWithHttpInfo(optionKey, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param optionKey
     */
    public deleteIntegrationsWordPressOptIn(optionKey: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteIntegrationsWordPressOptIn(optionKey, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLeadScoreApi } from './ObservableAPI';

import { LeadScoreApiRequestFactory, LeadScoreApiResponseProcessor} from "../apis/LeadScoreApi";
export class PromiseLeadScoreApi {
    private api: ObservableLeadScoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadScoreApiRequestFactory,
        responseProcessor?: LeadScoreApiResponseProcessor
    ) {
        this.api = new ObservableLeadScoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId
     */
    public getLeadScoreDetailsWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadScore>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadScoreDetailsWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId
     */
    public getLeadScoreDetails(contactId: string, _options?: PromiseConfigurationOptions): Promise<LeadScore> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadScoreDetails(contactId, observableOptions);
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
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest
     */
    public createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest
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
     * @param createUpdateLeadSourceCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategory(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
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
     * @param createLeadSourceExpenseRequest
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
     * @param createLeadSourceExpenseRequest
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
     * @param updateLeadSourceExpenseRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: 'title,notes,amount,incurred_time', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: 'title,notes,amount,incurred_time', _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
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
     * @param createLeadSourceRecurringExpenseRequest
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
     * @param createLeadSourceRecurringExpenseRequest
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
     * @param leadSourceRecurringExpenseUpdateRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: 'title,notes,amount,start_time,end_time', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: 'title,notes,amount,start_time,end_time', _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
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
     * @param createLeadSourceRequest
     */
    public createLeadSourceWithHttpInfo(createLeadSourceRequest: CreateLeadSourceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceWithHttpInfo(createLeadSourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest
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
     * @param createLeadSourceRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceWithHttpInfo(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: 'name,description,vendor,medium,message,start_time,end_time,status,lead_source_category_id', _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSource(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: 'name,description,vendor,medium,message,start_time,end_time,status,lead_source_category_id', _options?: PromiseConfigurationOptions): Promise<LeadSource> {
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
     * List a Country\'s Provinces
     * @param countryCode
     */
    public listProvincesForCountryWithHttpInfo(countryCode: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProvincesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProvincesForCountryWithHttpInfo(countryCode, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Provinces
     * @param countryCode
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
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
     * @param contactId
     * @param createNoteRequest
     */
    public createNoteWithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Note>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteWithHttpInfo(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId
     * @param createNoteRequest
     */
    public createNote(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<Note> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNote(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createNoteCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createNoteCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId
     * @param noteId
     */
    public deleteNoteWithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNoteWithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId
     * @param noteId
     */
    public deleteNote(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNote(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId
     * @param noteId
     */
    public getNoteWithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNoteWithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId
     * @param noteId
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
     * @param contactId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param contactId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param contactId
     * @param noteId
     * @param updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: 'contact_id, text, title, type, user_id', _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId
     * @param noteId
     * @param updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNote(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: 'contact_id, text, title, type, user_id', _options?: PromiseConfigurationOptions): Promise<UpdateNoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNote(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
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
     * @param createOpportunityRequest
     */
    public createOpportunityWithHttpInfo(createOpportunityRequest: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityWithHttpInfo(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param createOpportunityRequest
     */
    public createOpportunity(createOpportunityRequest: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunity(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest
     */
    public createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest
     */
    public createOpportunityCustomFields(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFields(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param createOpportunityStageRequest
     */
    public createOpportunityStageWithHttpInfo(createOpportunityStageRequest: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStageWithHttpInfo(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param createOpportunityStageRequest
     */
    public createOpportunityStage(createOpportunityStageRequest: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStage(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId
     */
    public deleteOpportunityWithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId
     */
    public deleteOpportunity(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunity(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId
     */
    public deleteOpportunityStageWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStageWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId
     */
    public deleteOpportunityStage(stageId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStage(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId
     */
    public getOpportunityWithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId
     */
    public getOpportunity(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunity(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId
     */
    public getOpportunityStageWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStageWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId
     */
    public getOpportunityStage(stageId: string, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStage(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields]
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesWithHttpInfo(fields?: Set<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOpportunitiesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields]
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;stage_id&#x60; - (String) &#x60;user_id&#x60; 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - &#x60;next_action_time&#x60; - &#x60;contact_name&#x60; - &#x60;opportunity_name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunities(fields?: Set<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOpportunitiesResponse> {
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
     * @param opportunityId
     * @param updateOpportunityRequestV2
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityWithHttpInfo(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: 'opportunity_title,next_action_time,next_action_notes,opportunity_notes, estimated_close_time,include_in_forecast,projected_revenue_low,projected_revenue_high, contact_id,stage_id,user_id,custom_fields,affiliate_id', _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId
     * @param updateOpportunityRequestV2
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunity(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: 'opportunity_title,next_action_time,next_action_notes,opportunity_notes, estimated_close_time,include_in_forecast,projected_revenue_low,projected_revenue_high, contact_id,stage_id,user_id,custom_fields,affiliate_id', _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId
     * @param updateOpportunityStageRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: 'name,order,target_number_days,probability,checklist_items', _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId
     * @param updateOpportunityStageRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStage(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: 'name,order,target_number_days,probability,checklist_items', _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
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
     * @param createOrderTotalDiscountRequest
     */
    public createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest
     */
    public createOrderTotalDiscount(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscount(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId
     */
    public deleteOrderTotalDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId
     */
    public deleteOrderTotalDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId
     */
    public getOrderTotalDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderTotalDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId
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
     * @param discountId
     * @param updateOrderTotalDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,discount_strategy,criteria', _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderTotalDiscountWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId
     * @param updateOrderTotalDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscount(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,discount_strategy,criteria', _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
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
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param orderId
     * @param orderItemId
     * @param applyCommissionRequest
     */
    public applyCommissionOnOrderItemsWithHttpInfo(orderId: string, orderItemId: string, applyCommissionRequest: ApplyCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyCommissionOnOrderItemsWithHttpInfo(orderId, orderItemId, applyCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param orderId
     * @param orderItemId
     * @param applyCommissionRequest
     */
    public applyCommissionOnOrderItems(orderId: string, orderItemId: string, applyCommissionRequest: ApplyCommissionRequest, _options?: PromiseConfigurationOptions): Promise<OrderItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyCommissionOnOrderItems(orderId, orderItemId, applyCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param orderId
     */
    public applyTaxWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTaxWithHttpInfo(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param orderId
     */
    public applyTax(orderId: string, _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTax(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public attachFileToOrderWithHttpInfo(orderId: string, fileOperationRequest: FileOperationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.attachFileToOrderWithHttpInfo(orderId, fileOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public attachFileToOrder(orderId: string, fileOperationRequest: FileOperationRequest, _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.attachFileToOrder(orderId, fileOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param restCreateOrderRequest
     */
    public createOrderWithHttpInfo(restCreateOrderRequest: RestCreateOrderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderWithHttpInfo(restCreateOrderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param restCreateOrderRequest
     */
    public createOrder(restCreateOrderRequest: RestCreateOrderRequest, _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrder(restCreateOrderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest
     */
    public createOrderCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest
     */
    public createOrderCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param orderId
     * @param createOrderItemRequest
     */
    public createOrderItemWithHttpInfo(orderId: string, createOrderItemRequest: CreateOrderItemRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderItemWithHttpInfo(orderId, createOrderItemRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param orderId
     * @param createOrderItemRequest
     */
    public createOrderItem(orderId: string, createOrderItemRequest: CreateOrderItemRequest, _options?: PromiseConfigurationOptions): Promise<OrderItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderItem(orderId, createOrderItemRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param orderId
     * @param restCreatePaymentRequest
     */
    public createPaymentForAnOrderWithHttpInfo(orderId: string, restCreatePaymentRequest: RestCreatePaymentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentForAnOrderWithHttpInfo(orderId, restCreatePaymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param orderId
     * @param restCreatePaymentRequest
     */
    public createPaymentForAnOrder(orderId: string, restCreatePaymentRequest: RestCreatePaymentRequest, _options?: PromiseConfigurationOptions): Promise<PaymentResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentForAnOrder(orderId, restCreatePaymentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param orderId
     */
    public deleteOrderWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderWithHttpInfo(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param orderId
     */
    public deleteOrder(orderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrder(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId
     */
    public deleteOrderCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId
     */
    public deleteOrderCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param orderId
     * @param orderItemId
     */
    public deleteOrderItemWithHttpInfo(orderId: string, orderItemId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderItemWithHttpInfo(orderId, orderItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param orderId
     * @param orderItemId
     */
    public deleteOrderItem(orderId: string, orderItemId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderItem(orderId, orderItemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public detachFileFromOrderWithHttpInfo(orderId: string, fileOperationRequest: FileOperationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detachFileFromOrderWithHttpInfo(orderId, fileOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public detachFileFromOrder(orderId: string, fileOperationRequest: FileOperationRequest, _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detachFileFromOrder(orderId, fileOperationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId
     */
    public getOrderWithHttpInfo(orderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderWithHttpInfo(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId
     */
    public getOrder(orderId: string, _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrder(orderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card
     * Retrieve Order Payments
     * @param orderId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPaymentsWithHttpInfo(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOrderPaymentsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderPaymentsWithHttpInfo(orderId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card
     * Retrieve Order Payments
     * @param orderId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;invoice_id&#x60; - (String) &#x60;payment_id&#x60; - (String) &#x60;amount&#x60; - (String) &#x60;pay_status&#x60; - (Boolean) &#x60;skip_commission&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;invoice_id&#x60; - &#x60;payment_id&#x60; - &#x60;amount&#x60; - &#x60;pay_time&#x60; - &#x60;pay_status&#x60; - &#x60;skip_commission&#x60; - &#x60;last_updated_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPayments(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOrderPaymentsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderPayments(orderId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_city&#x60; - (String) &#x60;shipping_region&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_city%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region%3D%3DAZ&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DUS&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOrders>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrdersWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_city&#x60; - (String) &#x60;shipping_region&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_city%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region%3D%3DAZ&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DUS&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrders(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOrders> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrders(filter, orderBy, pageSize, pageToken, observableOptions);
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
     * Updates an Order
     * Update an Order
     * @param orderId
     * @param updateOrderRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderWithHttpInfo(orderId: string, updateOrderRequest: UpdateOrderRequest, updateMask?: 'contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan, custom_fields', _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderWithHttpInfo(orderId, updateOrderRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId
     * @param updateOrderRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrder(orderId: string, updateOrderRequest: UpdateOrderRequest, updateMask?: 'contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan, custom_fields', _options?: PromiseConfigurationOptions): Promise<OrderV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrder(orderId, updateOrderRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param orderId
     * @param orderItemId
     * @param updateOrderItemRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderItemWithHttpInfo(orderId: string, orderItemId: string, updateOrderItemRequest: UpdateOrderItemRequest, updateMask?: 'name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description', _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderItem>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderItemWithHttpInfo(orderId, orderItemId, updateOrderItemRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param orderId
     * @param orderItemId
     * @param updateOrderItemRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderItem(orderId: string, orderItemId: string, updateOrderItemRequest: UpdateOrderItemRequest, updateMask?: 'name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description', _options?: PromiseConfigurationOptions): Promise<OrderItem> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderItem(orderId, orderItemId, updateOrderItemRequest, updateMask, observableOptions);
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
     * @param createPaymentMethodConfigRequest
     */
    public createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest
     */
    public createPaymentMethodConfig(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<PaymentMethodConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfig(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePaymentMethodsApi } from './ObservableAPI';

import { PaymentMethodsApiRequestFactory, PaymentMethodsApiResponseProcessor} from "../apis/PaymentMethodsApi";
export class PromisePaymentMethodsApi {
    private api: ObservablePaymentMethodsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodsApiRequestFactory,
        responseProcessor?: PaymentMethodsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentMethodsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deactivated.
     */
    public deactivatePaymentMethodWithHttpInfo(contactId: string, paymentMethodId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deactivated.
     */
    public deactivatePaymentMethod(contactId: string, paymentMethodId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deactivatePaymentMethod(contactId, paymentMethodId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deleted.
     */
    public deletePaymentMethodWithHttpInfo(contactId: string, paymentMethodId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePaymentMethodWithHttpInfo(contactId, paymentMethodId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deleted.
     */
    public deletePaymentMethod(contactId: string, paymentMethodId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deletePaymentMethod(contactId, paymentMethodId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Payment Methods
     * List of Payment Methods
     * @param contactId ID of the contact to which the payment method belongs.
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field. 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaymentMethodsWithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPaymentMethodsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaymentMethodsWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Payment Methods
     * List of Payment Methods
     * @param contactId ID of the contact to which the payment method belongs.
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;merchant_account_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. - &#x60;filter&#x3D;merchant_account_id%3D%3D123&#x60;  You can filter across all contacts by using the &#x60;-&#x60; for the &#x60;contact_id&#x60; field. 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60;  One of the following directions: - &#x60;desc&#x60; - &#x60;asc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaymentMethods(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListPaymentMethodsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaymentMethods(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
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
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param categoryId
     * @param assignProductsRequest
     */
    public assignProductsToCategoryWithHttpInfo(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param categoryId
     * @param assignProductsRequest
     */
    public assignProductsToCategory(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductsToCategory(categoryId, assignProductsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param categoryId
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
     * @param categoryId
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
     * @param createProductCategoryRequest
     */
    public createProductCategoryWithHttpInfo(createProductCategoryRequest: CreateProductCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductCategoryWithHttpInfo(createProductCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param createProductCategoryRequest
     */
    public createProductCategory(createProductCategoryRequest: CreateProductCategoryRequest, _options?: PromiseConfigurationOptions): Promise<ProductCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductCategory(createProductCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId
     */
    public deleteImageFileWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageFileWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId
     */
    public deleteImageFile(categoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteImageFile(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId
     */
    public deleteProductCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductCategoryWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId
     */
    public deleteProductCategory(categoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductCategory(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId
     */
    public getProductCategoryWithHttpInfo(categoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductCategoryWithHttpInfo(categoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId
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
     * @param categoryId
     * @param updateProductCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategoryWithHttpInfo(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: 'name,display_order_index,parent_category_id', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param categoryId
     * @param updateProductCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategory(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: 'name,display_order_index,parent_category_id', _options?: PromiseConfigurationOptions): Promise<ProductCategory> {
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
     * @param createProductDiscountRequest
     */
    public createProductDiscountWithHttpInfo(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductDiscountWithHttpInfo(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest
     */
    public createProductDiscount(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductDiscount(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId
     */
    public deleteProductDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId
     */
    public deleteProductDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId
     */
    public getProductDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId
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
     * @param discountId
     * @param updateProductDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscountWithHttpInfo(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,product_id,criteria', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductDiscountWithHttpInfo(discountId, updateProductDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId
     * @param updateProductDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscount(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,product_id,criteria', _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
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
     * @param id
     * @param addProductInterestRequest
     */
    public addProductInterestWithHttpInfo(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterestWithHttpInfo(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id
     * @param addProductInterestRequest
     */
    public addProductInterest(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterest(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest
     */
    public createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest
     */
    public createProductInterestBundle(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundle(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id
     */
    public deleteProductInterestBundleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id
     */
    public deleteProductInterestBundle(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundle(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id
     */
    public getProductInterestBundleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductInterestBundleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id
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
     * @param id
     * @param interestId
     */
    public removeProductInterestWithHttpInfo(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterestWithHttpInfo(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id
     * @param interestId
     */
    public removeProductInterest(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterest(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id
     * @param interestId
     * @param updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestWithHttpInfo(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: 'quantity,price,discount_percent', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id
     * @param interestId
     * @param updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterest(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: 'quantity,price,discount_percent', _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterest(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id
     * @param updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleWithHttpInfo(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id
     * @param updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundle(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
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
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param createProductOptionListOption
     */
    public addProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, createProductOptionListOption: Array<CreateProductOptionListOption>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductOptionListOptionValueWithHttpInfo(productId, productOptionId, createProductOptionListOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param createProductOptionListOption
     */
    public addProductOptionListOptionValue(productId: string, productOptionId: string, createProductOptionListOption: Array<CreateProductOptionListOption>, _options?: PromiseConfigurationOptions): Promise<ProductOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductOptionListOptionValue(productId, productOptionId, createProductOptionListOption, observableOptions);
        return result.toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequestDetail
     */
    public adjustInventoryWithHttpInfo(productId: string, updateProductInventoryRequestDetail: UpdateProductInventoryRequestDetail, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.adjustInventoryWithHttpInfo(productId, updateProductInventoryRequestDetail, observableOptions);
        return result.toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequestDetail
     */
    public adjustInventory(productId: string, updateProductInventoryRequestDetail: UpdateProductInventoryRequestDetail, _options?: PromiseConfigurationOptions): Promise<RestV2ProductDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.adjustInventory(productId, updateProductInventoryRequestDetail, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequestDetail
     */
    public createProductWithHttpInfo(createProductRequestDetail: CreateProductRequestDetail, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductWithHttpInfo(createProductRequestDetail, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequestDetail
     */
    public createProduct(createProductRequestDetail: CreateProductRequestDetail, _options?: PromiseConfigurationOptions): Promise<RestV2ProductDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProduct(createProductRequestDetail, observableOptions);
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
     * Creates a new product option
     * Create a Product Option
     * @param productId product_id
     * @param createProductOptionRequest
     */
    public createProductOptionWithHttpInfo(productId: string, createProductOptionRequest: CreateProductOptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductOptionWithHttpInfo(productId, createProductOptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new product option
     * Create a Product Option
     * @param productId product_id
     * @param createProductOptionRequest
     */
    public createProductOption(productId: string, createProductOptionRequest: CreateProductOptionRequest, _options?: PromiseConfigurationOptions): Promise<ProductOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductOption(productId, createProductOptionRequest, observableOptions);
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
     * Deletes a single product option
     * Delete a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public deleteProductOptionWithHttpInfo(productId: string, productOptionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductOptionWithHttpInfo(productId, productOptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single product option
     * Delete a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public deleteProductOption(productId: string, productOptionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductOption(productId, productOptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     */
    public deleteProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, itemId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     */
    public deleteProductOptionListOptionValue(productId: string, productOptionId: string, itemId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductOptionListOptionValue(productId, productOptionId, itemId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProduct(productId: string, _options?: PromiseConfigurationOptions): Promise<RestV2ProductDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProduct(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public getProductOptionWithHttpInfo(productId: string, productOptionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductOptionWithHttpInfo(productId, productOptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public getProductOption(productId: string, productOptionId: string, _options?: PromiseConfigurationOptions): Promise<ProductOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductOption(productId, productOptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param productId product_id
     */
    public listProductOptionsWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductOptionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductOptionsWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param productId product_id
     */
    public listProductOptions(productId: string, _options?: PromiseConfigurationOptions): Promise<ListProductOptionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductOptions(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductsResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProducts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductsResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProducts(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductWithHttpInfo(productId: string, updateProductRequestDetail: UpdateProductRequestDetail, updateMask?: 'active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications', _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2ProductDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductWithHttpInfo(productId, updateProductRequestDetail, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProduct(productId: string, updateProductRequestDetail: UpdateProductRequestDetail, updateMask?: 'active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications', _options?: PromiseConfigurationOptions): Promise<RestV2ProductDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProduct(productId, updateProductRequestDetail, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param updateProductOptionRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOptionWithHttpInfo(productId: string, productOptionId: string, updateProductOptionRequest: UpdateProductOptionRequest, updateMask?: 'option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductOptionWithHttpInfo(productId, productOptionId, updateProductOptionRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param updateProductOptionRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOption(productId: string, productOptionId: string, updateProductOptionRequest: UpdateProductOptionRequest, updateMask?: 'option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message', _options?: PromiseConfigurationOptions): Promise<ProductOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductOption(productId, productOptionId, updateProductOptionRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single product option value
     * Updates a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     * @param updateProductOptionListOption
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, itemId: string, updateProductOptionListOption: UpdateProductOptionListOption, updateMask?: 'item_label,item_code,item_display_order,price_adjustment ', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductOption>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId, updateProductOptionListOption, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single product option value
     * Updates a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     * @param updateProductOptionListOption
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOptionListOptionValue(productId: string, productOptionId: string, itemId: string, updateProductOptionListOption: UpdateProductOptionListOption, updateMask?: 'item_label,item_code,item_display_order,price_adjustment ', _options?: PromiseConfigurationOptions): Promise<ProductOption> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductOptionListOptionValue(productId, productOptionId, itemId, updateProductOptionListOption, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReferralApi } from './ObservableAPI';

import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";
export class PromiseReferralApi {
    private api: ObservableReferralApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralApiRequestFactory,
        responseProcessor?: ReferralApiResponseProcessor
    ) {
        this.api = new ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest
     */
    public createReferralWithHttpInfo(createReferralRequest: CreateReferralRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Referral>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReferralWithHttpInfo(createReferralRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest
     */
    public createReferral(createReferralRequest: CreateReferralRequest, _options?: PromiseConfigurationOptions): Promise<Referral> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createReferral(createReferralRequest, observableOptions);
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60; 
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
     * @param reportId The unique identifier of the report (Saved Search)
     */
    public retrieveReportWithHttpInfo(reportId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Report>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReportWithHttpInfo(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId The unique identifier of the report (Saved Search)
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
     * @param runReportRequest
     */
    public runReportWithHttpInfo(reportId: string, runReportRequest: RunReportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportExecutionResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReportWithHttpInfo(reportId, runReportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param runReportRequest
     */
    public runReport(reportId: string, runReportRequest: RunReportRequest, _options?: PromiseConfigurationOptions): Promise<ReportExecutionResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReport(reportId, runReportRequest, observableOptions);
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
     * Retrieves a list of payments
     * List Payments
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listPaymentsWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPayments>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaymentsWithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of payments
     * List Payments
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listPayments(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<ListPayments> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPayments(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTransactionsWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTransactions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransactionsWithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTransactions(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<ListTransactions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTransactions(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id
     */
    public setMerchantGatewayAsDefaultWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setMerchantGatewayAsDefaultWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id
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
    public getApplicationConfigurationsWithHttpInfo(fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApplicationConfigurationsWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurations(fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<GetSettingsResponse> {
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
     * @param createShippingDiscountRequest
     */
    public createShippingDiscountWithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createShippingDiscountWithHttpInfo(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest
     */
    public createShippingDiscount(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createShippingDiscount(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId
     */
    public deleteShippingDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteShippingDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId
     */
    public deleteShippingDiscount(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteShippingDiscount(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId
     */
    public getShippingDiscountWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getShippingDiscountWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId
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
     * @param discountId
     * @param updateShippingDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscountWithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: 'name,description,discount_type,discount_value,criteria', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId
     * @param updateShippingDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscount(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: 'name,description,discount_type,discount_value,criteria', _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
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
     * @param productId
     * @param createSubscriptionPlanRequest
     */
    public createSubscriptionPlansWithHttpInfo(productId: string, createSubscriptionPlanRequest: CreateSubscriptionPlanRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param productId
     * @param createSubscriptionPlanRequest
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
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;active&#x60;: true or false - (BillingCycle) &#x60;cycle_type&#x60;: DAILY, WEEKLY, MONTHLY, YEARLY  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;active%3D%3Dtrue&#x60; - &#x60;filter&#x3D;cycle_type%3D%3DDAILY&#x60; - &#x60;filter&#x3D;active%3D%3Dfalse%3Bcycle_type%3D%3DWEEKLY&#x60; 
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
     * @param updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: 'active,allow_prorating,cycle_type,display_order_index,frequency,plan_price,total_cycles', _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionPlan>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     * @param updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlan(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: 'active,allow_prorating,cycle_type,display_order_index,frequency,plan_price,total_cycles', _options?: PromiseConfigurationOptions): Promise<SubscriptionPlan> {
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
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId
     * @param cancelSubscriptionRequest
     */
    public cancelSubscriptionWithHttpInfo(subscriptionId: string, cancelSubscriptionRequest: CancelSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelSubscriptionWithHttpInfo(subscriptionId, cancelSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId
     * @param cancelSubscriptionRequest
     */
    public cancelSubscription(subscriptionId: string, cancelSubscriptionRequest: CancelSubscriptionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.cancelSubscription(subscriptionId, cancelSubscriptionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequestDetail
     */
    public createSubscriptionWithHttpInfo(createSubscriptionRequestDetail: CreateSubscriptionRequestDetail, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionWithHttpInfo(createSubscriptionRequestDetail, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequestDetail
     */
    public createSubscription(createSubscriptionRequestDetail: CreateSubscriptionRequestDetail, _options?: PromiseConfigurationOptions): Promise<SubscriptionDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscription(createSubscriptionRequestDetail, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest
     */
    public createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest
     */
    public createSubscriptionCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId
     */
    public deleteSubscriptionCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId
     */
    public deleteSubscriptionCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param subscriptionId
     */
    public getSubscriptionWithHttpInfo(subscriptionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscriptionWithHttpInfo(subscriptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param subscriptionId
     */
    public getSubscription(subscriptionId: string, _options?: PromiseConfigurationOptions): Promise<SubscriptionDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSubscription(subscriptionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSubscriptionsResponseList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubscriptionsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptions(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListSubscriptionsResponseList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSubscriptions(filter, orderBy, pageSize, pageToken, observableOptions);
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
     * Updates a Subscription
     * Update a Subscription
     * @param subscriptionId
     * @param updateSubscriptionRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionWithHttpInfo(subscriptionId: string, updateSubscriptionRequestDetail: UpdateSubscriptionRequestDetail, updateMask?: 'contact_id,subscription_plan_id,quantity,billing_amount,auto_charge,max_charge_attempts,days_between_retries, active,billing_frequency,billing_cycle,next_bill_date,end_date,payment_method_id,allow_tax,lead_affiliate_id, sale_affiliate_id,promo_code,shipping_option_id,reason_stopped,shipping_address', _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionDetail>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionWithHttpInfo(subscriptionId, updateSubscriptionRequestDetail, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription
     * Update a Subscription
     * @param subscriptionId
     * @param updateSubscriptionRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscription(subscriptionId: string, updateSubscriptionRequestDetail: UpdateSubscriptionRequestDetail, updateMask?: 'contact_id,subscription_plan_id,quantity,billing_amount,auto_charge,max_charge_attempts,days_between_retries, active,billing_frequency,billing_cycle,next_bill_date,end_date,payment_method_id,allow_tax,lead_affiliate_id, sale_affiliate_id,promo_code,shipping_option_id,reason_stopped,shipping_address', _options?: PromiseConfigurationOptions): Promise<SubscriptionDetail> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscription(subscriptionId, updateSubscriptionRequestDetail, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
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
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public applyTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplyTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTagsWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public applyTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<ApplyTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTags(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest
     */
    public createTagWithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagWithHttpInfo(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest
     */
    public createTag(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTag(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest
     */
    public createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest
     */
    public createTagCategory(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<TagCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategory(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId
     */
    public deleteTagWithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId
     */
    public deleteTag(tagId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTag(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId
     */
    public deleteTagCategoryWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategoryWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId
     */
    public deleteTagCategory(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategory(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId
     */
    public getCategoryWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId
     */
    public getCategory(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<GetTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategory(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId
     */
    public getTagWithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTagWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId
     */
    public getTag(tagId: string, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTag(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param tagId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;company_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;company_name%3D%3DCompany&#x60; - &#x60;filter&#x3D;email%3D%3Dtest@gmail.com&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param tagId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param tagId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;email&#x60; - (String) &#x60;since_applied_time&#x60; - (String) &#x60;until_applied_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;email&#x60;, &#x60;given_name&#x60;, or &#x60;family_name&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DJohn&#x60; - &#x60;filter&#x3D;family_name%3D%3DSmith&#x60; - &#x60;filter&#x3D;email%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_applied_time%3D%3D2025-04-16T20:33:02.321Z;until_applied_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
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
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
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
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
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
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public removeTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTagsWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public removeTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTags(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId
     * @param createUpdateTagRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagWithHttpInfo(tagId: string, createUpdateTagRequest: CreateUpdateTagRequest, updateMask?: 'name,description,category', _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagWithHttpInfo(tagId, createUpdateTagRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId
     * @param createUpdateTagRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTag(tagId: string, createUpdateTagRequest: CreateUpdateTagRequest, updateMask?: 'name,description,category', _options?: PromiseConfigurationOptions): Promise<UpdateTagResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTag(tagId, createUpdateTagRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId
     * @param createUpdateTagCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagCategoryWithHttpInfo(tagCategoryId: string, createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategoryWithHttpInfo(tagCategoryId, createUpdateTagCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId
     * @param createUpdateTagCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagCategory(tagCategoryId: string, createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, updateMask?: 'name,description', _options?: PromiseConfigurationOptions): Promise<UpdateTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategory(tagCategoryId, createUpdateTagCategoryRequest, updateMask, observableOptions);
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
     * @param createTaskRequest
     */
    public createTaskWithHttpInfo(createTaskRequest: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskWithHttpInfo(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param createTaskRequest
     */
    public createTask(createTaskRequest: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTask(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createTaskCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomFieldWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createTaskCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CreateCustomFieldResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomField(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId
     */
    public deleteTaskWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId
     */
    public deleteTask(taskId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTask(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteTaskCustomFieldWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomFieldWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteTaskCustomField(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomField(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId
     */
    public getTaskWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaskWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId
     */
    public getTask(taskId: string, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTask(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
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
     * @param taskId
     * @param createUpdateTaskRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskWithHttpInfo(taskId: string, createUpdateTaskRequest: CreateUpdateTaskRequest, updateMask?: 'id,title,description,type,priority,completion_time, due_time,remind_time_mins,assigned_to_user_id,contact_id,completed', _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskWithHttpInfo(taskId, createUpdateTaskRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId
     * @param createUpdateTaskRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTask(taskId: string, createUpdateTaskRequest: CreateUpdateTaskRequest, updateMask?: 'id,title,description,type,priority,completion_time, due_time,remind_time_mins,assigned_to_user_id,contact_id,completed', _options?: PromiseConfigurationOptions): Promise<UpdateTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTask(taskId, createUpdateTaskRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserGroupsApi } from './ObservableAPI';

import { UserGroupsApiRequestFactory, UserGroupsApiResponseProcessor} from "../apis/UserGroupsApi";
export class PromiseUserGroupsApi {
    private api: ObservableUserGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsApiRequestFactory,
        responseProcessor?: UserGroupsApiResponseProcessor
    ) {
        this.api = new ObservableUserGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param userGroupId
     */
    public getUserGroupWithHttpInfo(userGroupId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserGroupWithHttpInfo(userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param userGroupId
     */
    public getUserGroup(userGroupId: string, _options?: PromiseConfigurationOptions): Promise<UserGroup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserGroup(userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     */
    public listUserGroupsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUserGroupsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUserGroupsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     */
    public listUserGroups(_options?: PromiseConfigurationOptions): Promise<ListUserGroupsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUserGroups(observableOptions);
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
     * Retrieves a specific User
     * Get User
     * @param userId
     */
    public getUserByIdWithHttpInfo(userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserByIdWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId
     */
    public getUserById(userId: string, _options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserById(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetUserInfoResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserInfoWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfo(_options?: PromiseConfigurationOptions): Promise<GetUserInfoResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId
     */
    public getUserSignatureWithHttpInfo(userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserSignatureWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId
     */
    public getUserSignature(userId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getUserSignature(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
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
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsers(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListUsersPaginatedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaginatedUsers(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId
     * @param updateUserRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateUserWithHttpInfo(userId: string, updateUserRequest: UpdateUserRequest, updateMask?: 'address,company_name,email_address,family_name,fax_numbers,given_name,job_title,phone_numbers,time_zone,website', _options?: PromiseConfigurationOptions): Promise<HttpInfo<User>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUserWithHttpInfo(userId, updateUserRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId
     * @param updateUserRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateUser(userId: string, updateUserRequest: UpdateUserRequest, updateMask?: 'address,company_name,email_address,family_name,fax_numbers,given_name,job_title,phone_numbers,time_zone,website', _options?: PromiseConfigurationOptions): Promise<User> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateUser(userId, updateUserRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWebformsApi } from './ObservableAPI';

import { WebformsApiRequestFactory, WebformsApiResponseProcessor} from "../apis/WebformsApi";
export class PromiseWebformsApi {
    private api: ObservableWebformsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebformsApiRequestFactory,
        responseProcessor?: WebformsApiResponseProcessor
    ) {
        this.api = new ObservableWebformsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param webformId
     */
    public getHtmlWithHttpInfo(webformId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getHtmlWithHttpInfo(webformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param webformId
     */
    public getHtml(webformId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getHtml(webformId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;webform_type&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DContact Us&#x60; - &#x60;filter&#x3D;webform_type%3D%3Dlegacy&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;webform_type&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listWebformsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListWebformsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebformsWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;webform_type&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DContact Us&#x60; - &#x60;filter&#x3D;webform_type%3D%3Dlegacy&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;webform_type&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listWebforms(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListWebformsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebforms(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }


}



