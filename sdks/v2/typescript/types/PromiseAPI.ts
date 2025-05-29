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
import { AssignProductCategoriesRequest } from '../models/AssignProductCategoriesRequest';
import { AssignProductsRequest } from '../models/AssignProductsRequest';
import { Automation } from '../models/Automation';
import { AutomationCategory } from '../models/AutomationCategory';
import { AutomationLockStatus } from '../models/AutomationLockStatus';
import { BaseListResponseDeal } from '../models/BaseListResponseDeal';
import { BaseListResponseDealNote } from '../models/BaseListResponseDealNote';
import { BaseListResponsePipeline } from '../models/BaseListResponsePipeline';
import { BaseListResponsePipelineCustomField } from '../models/BaseListResponsePipelineCustomField';
import { BaseListResponsePipelineSummary } from '../models/BaseListResponsePipelineSummary';
import { BaseListResponseStage } from '../models/BaseListResponseStage';
import { BasicCompany } from '../models/BasicCompany';
import { BasicContact } from '../models/BasicContact';
import { BasicUser } from '../models/BasicUser';
import { BulkCreateDealNoteRequest } from '../models/BulkCreateDealNoteRequest';
import { BulkCreateDealNoteResponse } from '../models/BulkCreateDealNoteResponse';
import { BulkCreateDealNotesRequest } from '../models/BulkCreateDealNotesRequest';
import { BulkCreateDealNotesResponse } from '../models/BulkCreateDealNotesResponse';
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
import { CreateDealNoteRequest } from '../models/CreateDealNoteRequest';
import { CreateDealRequest } from '../models/CreateDealRequest';
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
import { DateExpression } from '../models/DateExpression';
import { DateExpressionResponse } from '../models/DateExpressionResponse';
import { Deal } from '../models/Deal';
import { DealContact } from '../models/DealContact';
import { DealListResponse } from '../models/DealListResponse';
import { DealNote } from '../models/DealNote';
import { DealNoteListResponse } from '../models/DealNoteListResponse';
import { DealStatus } from '../models/DealStatus';
import { DefaultCommission } from '../models/DefaultCommission';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteProgramCommissionRequest } from '../models/DeleteProgramCommissionRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { Discount } from '../models/Discount';
import { DiscountCriteria } from '../models/DiscountCriteria';
import { DisplayForm } from '../models/DisplayForm';
import { DisplayGroup } from '../models/DisplayGroup';
import { DisplayProperty } from '../models/DisplayProperty';
import { DisplayPropertySource } from '../models/DisplayPropertySource';
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
import { ListUsersPaginatedResponse } from '../models/ListUsersPaginatedResponse';
import { LogicalDate } from '../models/LogicalDate';
import { ModelError } from '../models/ModelError';
import { ModelFile } from '../models/ModelFile';
import { Money } from '../models/Money';
import { MoveDealsForContactsRequest } from '../models/MoveDealsForContactsRequest';
import { MoveDealsForContactsResponse } from '../models/MoveDealsForContactsResponse';
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
import { PatchAutomationCategoryRequest } from '../models/PatchAutomationCategoryRequest';
import { PaymentMethod } from '../models/PaymentMethod';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
import { PaymentPlan } from '../models/PaymentPlan';
import { PaymentResult } from '../models/PaymentResult';
import { PhoneNumber } from '../models/PhoneNumber';
import { Pipeline } from '../models/Pipeline';
import { PipelineCustomField } from '../models/PipelineCustomField';
import { PipelineCustomFieldArrayDisplayOptions } from '../models/PipelineCustomFieldArrayDisplayOptions';
import { PipelineCustomFieldArrayPropertyType } from '../models/PipelineCustomFieldArrayPropertyType';
import { PipelineCustomFieldBooleanDisplayOptions } from '../models/PipelineCustomFieldBooleanDisplayOptions';
import { PipelineCustomFieldBooleanDisplayType } from '../models/PipelineCustomFieldBooleanDisplayType';
import { PipelineCustomFieldCardDisplayOptions } from '../models/PipelineCustomFieldCardDisplayOptions';
import { PipelineCustomFieldCardProperty } from '../models/PipelineCustomFieldCardProperty';
import { PipelineCustomFieldDateTimeOptions } from '../models/PipelineCustomFieldDateTimeOptions';
import { PipelineCustomFieldDisplayOptions } from '../models/PipelineCustomFieldDisplayOptions';
import { PipelineCustomFieldDisplayOptionsType } from '../models/PipelineCustomFieldDisplayOptionsType';
import { PipelineCustomFieldDisplayStyle } from '../models/PipelineCustomFieldDisplayStyle';
import { PipelineCustomFieldDurationDisplayOptions } from '../models/PipelineCustomFieldDurationDisplayOptions';
import { PipelineCustomFieldDurationOptionsDurationUnit } from '../models/PipelineCustomFieldDurationOptionsDurationUnit';
import { PipelineCustomFieldEmptyStateContent } from '../models/PipelineCustomFieldEmptyStateContent';
import { PipelineCustomFieldModelPropertyTypeDiscriminator } from '../models/PipelineCustomFieldModelPropertyTypeDiscriminator';
import { PipelineCustomFieldOption } from '../models/PipelineCustomFieldOption';
import { PipelineCustomFieldOptionDisplayType } from '../models/PipelineCustomFieldOptionDisplayType';
import { PipelineCustomFieldOptionGroup } from '../models/PipelineCustomFieldOptionGroup';
import { PipelineCustomFieldOptions } from '../models/PipelineCustomFieldOptions';
import { PipelineCustomFieldPrimitiveType } from '../models/PipelineCustomFieldPrimitiveType';
import { PipelineCustomFieldPropertyValidator } from '../models/PipelineCustomFieldPropertyValidator';
import { PipelineCustomFieldRefDisplayOptions } from '../models/PipelineCustomFieldRefDisplayOptions';
import { PipelineCustomFieldRefDisplayType } from '../models/PipelineCustomFieldRefDisplayType';
import { PipelineCustomFieldRefPropertyType } from '../models/PipelineCustomFieldRefPropertyType';
import { PipelineCustomFieldRefType } from '../models/PipelineCustomFieldRefType';
import { PipelineCustomFieldSizeValidationType } from '../models/PipelineCustomFieldSizeValidationType';
import { PipelineCustomFieldSizeValidator } from '../models/PipelineCustomFieldSizeValidator';
import { PipelineCustomFieldType } from '../models/PipelineCustomFieldType';
import { PipelineCustomFields } from '../models/PipelineCustomFields';
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
import { Stage } from '../models/Stage';
import { StageDealListResponse } from '../models/StageDealListResponse';
import { StageDetails } from '../models/StageDetails';
import { StageListResponse } from '../models/StageListResponse';
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
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
import { UpdateBusinessProfileRequest } from '../models/UpdateBusinessProfileRequest';
import { UpdateCategoryDiscountRequest } from '../models/UpdateCategoryDiscountRequest';
import { UpdateCommissionProgramRequest } from '../models/UpdateCommissionProgramRequest';
import { UpdateCompanyRequest } from '../models/UpdateCompanyRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateCustomFieldRequest } from '../models/UpdateCustomFieldRequest';
import { UpdateDealNoteRequest } from '../models/UpdateDealNoteRequest';
import { UpdateDefaultCommissionProgramRequest } from '../models/UpdateDefaultCommissionProgramRequest';
import { UpdateDisplayFormRequest } from '../models/UpdateDisplayFormRequest';
import { UpdateDisplayGroupRequest } from '../models/UpdateDisplayGroupRequest';
import { UpdateDisplayPropertyRequest } from '../models/UpdateDisplayPropertyRequest';
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
import { UpdateOutcomeLabelsRequest } from '../models/UpdateOutcomeLabelsRequest';
import { UpdatePipelineRequest } from '../models/UpdatePipelineRequest';
import { UpdateProductCategoryRequest } from '../models/UpdateProductCategoryRequest';
import { UpdateProductCommissionProgramRequest } from '../models/UpdateProductCommissionProgramRequest';
import { UpdateProductDiscountRequest } from '../models/UpdateProductDiscountRequest';
import { UpdateProductInterestBundleRequest } from '../models/UpdateProductInterestBundleRequest';
import { UpdateProductInterestRequest } from '../models/UpdateProductInterestRequest';
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
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest?: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOST(createAffiliateRequest?: CreateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addAffiliateUsingPOST(createAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addCommissionProgramUsingPOST(createCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateUsingDELETEWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAffiliateUsingDELETE(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteRedirectLinkUsingDELETE(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionEarned>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionEarned> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionTotalUsingGET(affiliateId, observableOptions);
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
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateCommissionsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1WithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateUsingGET1WithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1(id: string, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAffiliateUsingGET1(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateProgramV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateProgramV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCommissionProgramUsingGET(commissionProgramId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLinkUsingGETWithHttpInfo(redirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRedirectLinkUsingGET(redirectId, observableOptions);
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
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateCommissionProgramsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateLinksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListAffiliateSummariesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsUsingPOST(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateUsingPATCHWithHttpInfo(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestAffiliate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateUsingPATCH(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: PromiseConfigurationOptions): Promise<RestAffiliate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAffiliateUsingPATCH(id, updateAffiliateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCH(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<AffiliateCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SetDefaultCommissionProgramResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<ProductCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateProductCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AffiliateLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: PromiseConfigurationOptions): Promise<AffiliateLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionCommissionProgram> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, observableOptions);
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
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddToAutomationSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesUsingPOSTWithHttpInfo(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategoriesUsingPOSTWithHttpInfo(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesUsingPOST(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bulkAssignmentAutomationsCategoriesUsingPOST(assignAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETEWithHttpInfo(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomationUsingDELETEWithHttpInfo(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAutomationUsingDELETE(automationIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGETWithHttpInfo(automationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Automation>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAutomationUsingGETWithHttpInfo(automationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGET(automationId: string, _options?: PromiseConfigurationOptions): Promise<Automation> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAutomationUsingGET(automationId, observableOptions);
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
    public listAllAutomationIdsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationIdsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
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
    public listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListAutomationIdsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, observableOptions);
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
    public listAutomationsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
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
    public listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListAutomationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, observableOptions);
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
    public createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCategoryUsingPOST(createAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(ids: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoriesUsingDELETEWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETE(ids: Array<number>, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCategoriesUsingDELETE(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoriesUsingGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGET(_options?: PromiseConfigurationOptions): Promise<ListAutomationCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoriesUsingGET(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategoryUsingPATCHWithHttpInfo(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchCategoryUsingPATCHWithHttpInfo(id, patchAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategoryUsingPATCH(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.patchCategoryUsingPATCH(id, patchAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutomationCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: PromiseConfigurationOptions): Promise<AutomationCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.saveCategoryUsingPUT(saveAutomationCategoryRequest, observableOptions);
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
    public getBusinessProfileUsingGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBusinessProfileUsingGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGET(_options?: PromiseConfigurationOptions): Promise<GetBusinessProfileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBusinessProfileUsingGET(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileUsingPATCHWithHttpInfo(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfileUsingPATCHWithHttpInfo(updateMask, updateBusinessProfileRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileUsingPATCH(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: PromiseConfigurationOptions): Promise<GetBusinessProfileResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBusinessProfileUsingPATCH(updateMask, updateBusinessProfileRequest, observableOptions);
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
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: PromiseConfigurationOptions): Promise<AddContactsToSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1WithHttpInfo(campaignId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Campaign>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignUsingGET1WithHttpInfo(campaignId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1(campaignId: string, _options?: PromiseConfigurationOptions): Promise<Campaign> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCampaignUsingGET1(campaignId, observableOptions);
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
    public listCampaignsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCampaignsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, observableOptions);
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
    public listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: PromiseConfigurationOptions): Promise<ListCampaignsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: PromiseConfigurationOptions): Promise<RemoveContactsFromSequenceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, observableOptions);
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
    public createCompanyUsingPOST1WithHttpInfo(createCompanyRequest?: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyUsingPOST1WithHttpInfo(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyUsingPOST1(createCompanyRequest?: CreateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCompanyUsingPOST1(createCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETEWithHttpInfo(companyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompanyUsingDELETEWithHttpInfo(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETE(companyId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCompanyUsingDELETE(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1WithHttpInfo(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompanyUsingGET1WithHttpInfo(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompanyUsingGET1(companyId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCompaniesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListCompaniesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyUsingPATCH1WithHttpInfo(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Company>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyUsingPATCH1WithHttpInfo(companyId, updateMask, updateCompanyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyUsingPATCH1(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: PromiseConfigurationOptions): Promise<Company> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCompanyUsingPATCH1(companyId, updateMask, updateCompanyRequest, observableOptions);
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
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLinkType>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOST(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: PromiseConfigurationOptions): Promise<ContactLinkType> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactLinkTypeUsingPOST(createContactLinkTypeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactUsingPOST1WithHttpInfo(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactUsingPOST1WithHttpInfo(createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactUsingPOST1(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactUsingPOST1(createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1WithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContactUsingDELETE1WithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1(contactId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContactUsingDELETE1(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactUsingGET1WithHttpInfo(contactId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactUsingGET1WithHttpInfo(contactId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactUsingGET1(contactId, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactLink>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<ContactLink> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.linkContactsUsingPOST(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGETWithHttpInfo(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListContactLinkTypesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGETWithHttpInfo(contactId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactLinksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinksUsingGETWithHttpInfo(contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGET(contactId: string, _options?: PromiseConfigurationOptions): Promise<ListContactLinksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactLinksUsingGET(contactId, observableOptions);
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
    public listContactsUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContactsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContactModelUsingGET1WithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveContactModelUsingGET1(observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.unlinkContactsUsingPOST(linkContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactUsingPATCHWithHttpInfo(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Contact>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContactUsingPATCHWithHttpInfo(contactId, updateMask, createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactUsingPATCH(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: PromiseConfigurationOptions): Promise<Contact> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContactUsingPATCH(contactId, updateMask, createUpdateContactRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCustomFieldsApi } from './ObservableAPI';

import { CustomFieldsApiRequestFactory, CustomFieldsApiResponseProcessor} from "../apis/CustomFieldsApi";
export class PromiseCustomFieldsApi {
    private api: ObservableCustomFieldsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomFieldsApiRequestFactory,
        responseProcessor?: CustomFieldsApiResponseProcessor
    ) {
        this.api = new ObservableCustomFieldsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of custom fields in a tenant.
     * Retrieves a list of custom fields in a tenant.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getCustomFieldsWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineCustomFields>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCustomFieldsWithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of custom fields in a tenant.
     * Retrieves a list of custom fields in a tenant.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getCustomFields(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PipelineCustomFields> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCustomFields(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field
     * Updates a custom field
     * @param id the identifier of the custom field to update
     * @param updateCustomFieldRequest the request body containing updated custom field details
     */
    public updateCustomFieldWithHttpInfo(id: string, updateCustomFieldRequest: UpdateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineCustomField>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomFieldWithHttpInfo(id, updateCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field
     * Updates a custom field
     * @param id the identifier of the custom field to update
     * @param updateCustomFieldRequest the request body containing updated custom field details
     */
    public updateCustomField(id: string, updateCustomFieldRequest: UpdateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<PipelineCustomField> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCustomField(id, updateCustomFieldRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDateExpressionApi } from './ObservableAPI';

import { DateExpressionApiRequestFactory, DateExpressionApiResponseProcessor} from "../apis/DateExpressionApi";
export class PromiseDateExpressionApi {
    private api: ObservableDateExpressionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DateExpressionApiRequestFactory,
        responseProcessor?: DateExpressionApiResponseProcessor
    ) {
        this.api = new ObservableDateExpressionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [timeZone]
     * @param [query]
     */
    public queryDateExpressionsWithHttpInfo(timeZone?: string, query?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DateExpressionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.queryDateExpressionsWithHttpInfo(timeZone, query, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [timeZone]
     * @param [query]
     */
    public queryDateExpressions(timeZone?: string, query?: string, _options?: PromiseConfigurationOptions): Promise<DateExpressionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.queryDateExpressions(timeZone, query, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDealsApi } from './ObservableAPI';

import { DealsApiRequestFactory, DealsApiResponseProcessor} from "../apis/DealsApi";
export class PromiseDealsApi {
    private api: ObservableDealsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DealsApiRequestFactory,
        responseProcessor?: DealsApiResponseProcessor
    ) {
        this.api = new ObservableDealsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param createDealRequest the request body containing deal details
     */
    public createDealWithHttpInfo(createDealRequest: CreateDealRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Deal>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDealWithHttpInfo(createDealRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param createDealRequest the request body containing deal details
     */
    public createDeal(createDealRequest: CreateDealRequest, _options?: PromiseConfigurationOptions): Promise<Deal> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDeal(createDealRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public createNoteWithHttpInfo(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealNote>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteWithHttpInfo(id, createDealNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public createNote(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: PromiseConfigurationOptions): Promise<DealNote> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNote(id, createDealNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param bulkCreateDealNotesRequest the request body containing note details
     */
    public createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest: BulkCreateDealNotesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BulkCreateDealNotesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param bulkCreateDealNotesRequest the request body containing note details
     */
    public createNotesBulk(bulkCreateDealNotesRequest: BulkCreateDealNotesRequest, _options?: PromiseConfigurationOptions): Promise<BulkCreateDealNotesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNotesBulk(bulkCreateDealNotesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param id the ID of the deal to delete
     */
    public deleteDealWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDealWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param id the ID of the deal to delete
     */
    public deleteDeal(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDeal(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public deleteNoteWithHttpInfo(noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNoteWithHttpInfo(noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public deleteNote(noteId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNote(noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param id the ID of the deal to retrieve
     */
    public getDealWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Deal>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param id the ID of the deal to retrieve
     */
    public getDeal(id: string, _options?: PromiseConfigurationOptions): Promise<Deal> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDeal(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public getNoteWithHttpInfo(noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealNote>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNoteWithHttpInfo(noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public getNote(noteId: string, _options?: PromiseConfigurationOptions): Promise<DealNote> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNote(noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all deals associated with a specific contact.
     * Lists all deals associated with a specific contact.
     * @param contactId the contact ID to list deals for
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listDealsWithHttpInfo(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDealsWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all deals associated with a specific contact.
     * Lists all deals associated with a specific contact.
     * @param contactId the contact ID to list deals for
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listDeals(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<DealListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDeals(contactId, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param id the deal ID to list notes for
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listNotesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealNoteListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param id the deal ID to list notes for
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listNotes(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<DealNoteListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotes(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * @param moveDealsForContactsRequest the request body containing move details
     */
    public moveDealsForContactsWithHttpInfo(moveDealsForContactsRequest: MoveDealsForContactsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MoveDealsForContactsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveDealsForContactsWithHttpInfo(moveDealsForContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * Moves the active deals of specified contacts from one stage to another, in bulk.
     * @param moveDealsForContactsRequest the request body containing move details
     */
    public moveDealsForContacts(moveDealsForContactsRequest: MoveDealsForContactsRequest, _options?: PromiseConfigurationOptions): Promise<MoveDealsForContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.moveDealsForContacts(moveDealsForContactsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public updateNoteWithHttpInfo(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DealNote>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNoteWithHttpInfo(noteId, updateDealNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public updateNote(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: PromiseConfigurationOptions): Promise<DealNote> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNote(noteId, updateDealNoteRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDisplayFormsApi } from './ObservableAPI';

import { DisplayFormsApiRequestFactory, DisplayFormsApiResponseProcessor} from "../apis/DisplayFormsApi";
export class PromiseDisplayFormsApi {
    private api: ObservableDisplayFormsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DisplayFormsApiRequestFactory,
        responseProcessor?: DisplayFormsApiResponseProcessor
    ) {
        this.api = new ObservableDisplayFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a specific display form by a pipeline ID.
     * Retrieves a specific display form by a pipeline ID.
     * @param id the ID of the pipeline containing the form
     */
    public getDisplayFormWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DisplayForm>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDisplayFormWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a specific display form by a pipeline ID.
     * Retrieves a specific display form by a pipeline ID.
     * @param id the ID of the pipeline containing the form
     */
    public getDisplayForm(id: string, _options?: PromiseConfigurationOptions): Promise<DisplayForm> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDisplayForm(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a display form
     * Updates a display form
     * @param id the ID of the pipeline containing the form
     * @param updateDisplayFormRequest the request body containing updated display form details
     */
    public updateDisplayFormWithHttpInfo(id: string, updateDisplayFormRequest: UpdateDisplayFormRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DisplayForm>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDisplayFormWithHttpInfo(id, updateDisplayFormRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a display form
     * Updates a display form
     * @param id the ID of the pipeline containing the form
     * @param updateDisplayFormRequest the request body containing updated display form details
     */
    public updateDisplayForm(id: string, updateDisplayFormRequest: UpdateDisplayFormRequest, _options?: PromiseConfigurationOptions): Promise<DisplayForm> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDisplayForm(id, updateDisplayFormRequest, observableOptions);
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
    public createEmailUsingPOST1WithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailUsingPOST1WithHttpInfo(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailUsingPOST1(createEmailSentRequest: CreateEmailSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailUsingPOST1(createEmailSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailsSentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: PromiseConfigurationOptions): Promise<EmailsSentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createEmailsUsingPOST1(createEmailsSentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1WithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailUsingDELETE1WithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailUsingDELETE1(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteEmailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: PromiseConfigurationOptions): Promise<DeleteEmailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteEmailsUsingPOST1(deleteEmailsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGETWithHttpInfo(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailTemplate>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplateUsingGETWithHttpInfo(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGET(emailTemplateId: string, _options?: PromiseConfigurationOptions): Promise<EmailTemplate> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailTemplateUsingGET(emailTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1WithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSentWithContent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailUsingGET1WithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1(id: string, _options?: PromiseConfigurationOptions): Promise<EmailSentWithContent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEmailUsingGET1(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplateUsingPOSTWithHttpInfo(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplateUsingPOSTWithHttpInfo(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplateUsingPOST(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailTemplateUsingPOST(emailSendTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1WithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendEmailUsingPOST1(emailSendRequest, observableOptions);
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
    public createFileUsingPOST1WithHttpInfo(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFileUsingPOST1WithHttpInfo(file, fileAssociation, fileName, isPublic, contactId, observableOptions);
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
    public createFileUsingPOST1(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createFileUsingPOST1(file, fileAssociation, fileName, isPublic, contactId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1WithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFileUsingDELETE1WithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1(fileId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteFileUsingDELETE1(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGETWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileDataUsingGETWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGET(fileId: string, _options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileDataUsingGET(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1WithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileUsingGET1WithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1(fileId: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getFileUsingGET1(fileId, observableOptions);
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
    public listFilesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFilesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listFilesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListFilesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFilesUsingGET1(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public updateFileUsingPOSTWithHttpInfo(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileMetadata>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFileUsingPOSTWithHttpInfo(fileId, file, fileName, isPublic, updateMask, observableOptions);
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
    public updateFileUsingPOST(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: PromiseConfigurationOptions): Promise<FileMetadata> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateFileUsingPOST(fileId, file, fileName, isPublic, updateMask, observableOptions);
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
    public createDiscountUsingPOST1WithHttpInfo(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST1WithHttpInfo(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest createFreeTrialDiscountRequest
     */
    public createDiscountUsingPOST1(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST1(createFreeTrialDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE1WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE1(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET1WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1(discountId: string, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET1(discountId, observableOptions);
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
    public listFreeTrialsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFreeTrialDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFreeTrialsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listFreeTrialsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListFreeTrialDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFreeTrialsUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1WithHttpInfo(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FreeTrialDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH1WithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<FreeTrialDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH1(discountId, updateFreeTrialDiscountRequest, updateMask, observableOptions);
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
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest The request object to create a new lead source category
     */
    public createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceCategoryUsingGETWithHttpInfo(leadSourceCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryUsingGET(leadSourceCategoryId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceCategoryUsingGET(leadSourceCategoryId, observableOptions);
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
    public listCategoriesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceCategoriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoriesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listCategoriesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceCategoriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCategoriesUsingGET1(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryUsingPATCHWithHttpInfo(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceCategory>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceCategoryUsingPATCHWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceCategory> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, observableOptions);
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
    public createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public createLeadSourceExpenseUsingPOST(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceUsingDELETE1(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId, leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseUsingGET(leadSourceExpenseId: string, leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId, observableOptions);
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
    public listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listLeadSourceExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, observableOptions);
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
    public updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, observableOptions);
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
    public createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public createLeadSourceRecurringExpenseUsingPOST(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceRecurringExpenseUsingPOST(leadSourceId, createLeadSourceRecurringExpenseRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId, observableOptions);
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
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listLeadSourceRecurringExpensesUsingGETWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceRecurringExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listLeadSourceRecurringExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourceRecurringExpensesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourceRecurringExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSourceRecurringExpense>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, observableOptions);
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
    public updateLeadSourceRecurringExpenseUsingPATCH(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSourceRecurringExpense> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceRecurringExpenseUsingPATCH(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, observableOptions);
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
    public createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest: CreateLeadSourceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest The request object to create a new lead source
     */
    public createLeadSourceUsingPOST(createLeadSourceRequest: CreateLeadSourceRequest, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLeadSourceUsingPOST(createLeadSourceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceUsingDELETEWithHttpInfo(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceUsingDELETEWithHttpInfo(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceUsingDELETE(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLeadSourceUsingDELETE(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceUsingGETWithHttpInfo(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceUsingGETWithHttpInfo(leadSourceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceUsingGET(leadSourceId: string, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLeadSourceUsingGET(leadSourceId, observableOptions);
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
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListLeadSourcesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListLeadSourcesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceUsingPATCHWithHttpInfo(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeadSource>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceUsingPATCHWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceUsingPATCH(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<LeadSource> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateLeadSourceUsingPATCH(leadSourceId, createLeadSourceRequest, updateMask, observableOptions);
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
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteCustomFieldUsingPOST1(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1WithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Note>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1(contactId: string, createNoteRequest: CreateNoteRequest, _options?: PromiseConfigurationOptions): Promise<Note> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNoteUsingPOST1(contactId, createNoteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1WithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNoteUsingDELETE1(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1WithHttpInfo(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNoteUsingGET1WithHttpInfo(contactId, noteId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1(contactId: string, noteId: string, _options?: PromiseConfigurationOptions): Promise<GetNoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getNoteUsingGET1(contactId, noteId, observableOptions);
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
    public listNoteTemplatesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListNoteTemplateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNoteTemplatesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listNoteTemplatesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListNoteTemplateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNoteTemplatesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotesUsingGET1WithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListNotesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListNotesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNoteModelUsingGET1WithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveNoteModelUsingGET1(observableOptions);
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
    public updateNoteUsingPATCHWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateNoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
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
    public updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UpdateNoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
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
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOST(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityStageUsingPOST(createOpportunityStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest?: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1(createOpportunityRequest?: CreateOpportunityRequest, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpportunityUsingPOST1(createOpportunityRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityStageUsingDELETE(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOpportunityUsingDELETE(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStageUsingGETWithHttpInfo(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityStageUsingGET(stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityUsingGET1WithHttpInfo(opportunityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOpportunityUsingGET1(opportunityId, observableOptions);
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
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOpportunitiesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOpportunitiesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOpportunityStagesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestOpportunityStage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCH(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RestOpportunityStage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestV2Opportunity>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RestV2Opportunity> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOpportunityUsingPATCH(opportunityId, updateOpportunityRequestV2, updateMask, observableOptions);
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
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETE(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderTotalDiscountUsingDELETE(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderTotalDiscountUsingGETWithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGET(discountId: string, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOrderTotalDiscountUsingGET(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListOrderTotalDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrderTotalDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCH(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<OrderTotalDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask, observableOptions);
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
    public createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOrderCustomFieldUsingPOST(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETE(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteOrderCustomFieldUsingDELETE(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveOrderCustomFieldModelUsingGET(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
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
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentMethodConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: PromiseConfigurationOptions): Promise<PaymentMethodConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePipelinesApi } from './ObservableAPI';

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class PromisePipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public _deleteWithHttpInfo(id: string, allowCleanup?: boolean, newStageId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api._deleteWithHttpInfo(id, allowCleanup, newStageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public _delete(id: string, allowCleanup?: boolean, newStageId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api._delete(id, allowCleanup, newStageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createPipelineRequest the create request
     */
    public createWithHttpInfo(createPipelineRequest: CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWithHttpInfo(createPipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createPipelineRequest the create request
     */
    public create(createPipelineRequest: CreatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create(createPipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public getWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get(id: string, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the count of deals for a specific pipeline.
     * Retrieves the count of deals for a specific pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getDealCountWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealCountWithHttpInfo(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the count of deals for a specific pipeline.
     * Retrieves the count of deals for a specific pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getDealCount(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<number> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDealCount(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getOutcomeLabelsWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOutcomeLabelsWithHttpInfo(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public getOutcomeLabels(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PipelineOutcomeLabelListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getOutcomeLabels(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PipelineListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listStagesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineStageListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listStagesWithHttpInfo(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param id the pipeline identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listStages(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PipelineStageListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listStages(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listSummariesWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineSummariesListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listSummaries(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<PipelineSummariesListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSummaries(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param updateOutcomeLabelsRequest the request containing the new outcome labels
     */
    public setOutcomeLabelsWithHttpInfo(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param updateOutcomeLabelsRequest the request containing the new outcome labels
     */
    public setOutcomeLabels(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: PromiseConfigurationOptions): Promise<PipelineOutcomeLabelListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setOutcomeLabels(id, updateOutcomeLabelsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updatePipelineRequest the update request
     */
    public updateWithHttpInfo(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWithHttpInfo(id, updateMask, updatePipelineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updatePipelineRequest the update request
     */
    public update(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update(id, updateMask, updatePipelineRequest, observableOptions);
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
    public createDiscountUsingPOST2WithHttpInfo(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST2WithHttpInfo(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest request
     */
    public createDiscountUsingPOST2(createProductDiscountRequest: CreateProductDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST2(createProductDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE2WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE2(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET2WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET2WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET2(discountId: string, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET2(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDiscountsUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH2WithHttpInfo(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH2WithHttpInfo(discountId, updateProductDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH2(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH2(discountId, updateProductDiscountRequest, updateMask, observableOptions);
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
    public addProductInterestUsingPOSTWithHttpInfo(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterestUsingPOSTWithHttpInfo(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id id
     * @param addProductInterestRequest request
     */
    public addProductInterestUsingPOST(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addProductInterestUsingPOST(id, addProductInterestRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundleUsingPOST(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createProductInterestBundleUsingPOST(createProductInterestBundleRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundleUsingDELETEWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundleUsingDELETEWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundleUsingDELETE(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteProductInterestBundleUsingDELETE(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundleUsingGETWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductInterestBundleUsingGETWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundleUsingGET(id: string, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getProductInterestBundleUsingGET(id, observableOptions);
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
    public listProductInterestBundlesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListProductInterestBundleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductInterestBundlesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listProductInterestBundlesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListProductInterestBundleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listProductInterestBundlesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterestUsingDELETEWithHttpInfo(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterestUsingDELETEWithHttpInfo(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterestUsingDELETE(id: string, interestId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeProductInterestUsingDELETE(id, interestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleUsingPATCHWithHttpInfo(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterestBundle>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestBundleUsingPATCHWithHttpInfo(id, updateProductInterestBundleRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleUsingPATCH(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductInterestBundle> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, updateMask, observableOptions);
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
    public updateProductInterestUsingPATCHWithHttpInfo(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductInterest>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestUsingPATCHWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
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
    public updateProductInterestUsingPATCH(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProductInterest> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, updateMask, observableOptions);
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
    public listReportsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListReportsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReportsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listReportsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListReportsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listReportsUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReportUsingGETWithHttpInfo(reportId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Report>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReportUsingGETWithHttpInfo(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReportUsingGET(reportId: string, _options?: PromiseConfigurationOptions): Promise<Report> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveReportUsingGET(reportId, observableOptions);
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
    public runReportUsingPOSTWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportExecutionResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, observableOptions);
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
    public runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ReportExecutionResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, observableOptions);
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
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOST(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.setMerchantGatewayAsDefaultUsingPOST(id, observableOptions);
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
    public getApplicationConfigurationsUsingGETWithHttpInfo(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApplicationConfigurationsUsingGETWithHttpInfo(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGET(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: PromiseConfigurationOptions): Promise<GetSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApplicationConfigurationsUsingGET(fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactOptionTypesUsingGET1WithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1(_options?: PromiseConfigurationOptions): Promise<GetContactOptionTypesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getContactOptionTypesUsingGET1(observableOptions);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.isApplicationEnabledUsingGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGET(_options?: PromiseConfigurationOptions): Promise<GetApplicationEnabledStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.isApplicationEnabledUsingGET(observableOptions);
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
    public createDiscountUsingPOST3WithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST3WithHttpInfo(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST3(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDiscountUsingPOST3(createShippingDiscountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE3WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE3WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE3(discountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDiscountUsingDELETE3(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET3WithHttpInfo(discountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET3WithHttpInfo(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET3(discountId: string, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDiscountUsingGET3(discountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListShippingDiscountsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDiscountsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListShippingDiscountsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDiscountsUsingGET1(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH3WithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShippingDiscount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH3WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH3(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ShippingDiscount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDiscountUsingPATCH3(discountId, updateShippingDiscountRequest, updateMask, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStagesApi } from './ObservableAPI';

import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";
export class PromiseStagesApi {
    private api: ObservableStagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StagesApiRequestFactory,
        responseProcessor?: StagesApiResponseProcessor
    ) {
        this.api = new ObservableStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Counts the number of deals in a specific stage.
     * Counts the number of deals in a specific stage.
     * @param id the stage identifier
     */
    public countDealsInStageWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<number>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.countDealsInStageWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Counts the number of deals in a specific stage.
     * Counts the number of deals in a specific stage.
     * @param id the stage identifier
     */
    public countDealsInStage(id: string, _options?: PromiseConfigurationOptions): Promise<number> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.countDealsInStage(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createStageRequest the create request
     */
    public create1WithHttpInfo(createStageRequest: CreateStageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Stage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create1WithHttpInfo(createStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createStageRequest the create request
     */
    public create1(createStageRequest: CreateStageRequest, _options?: PromiseConfigurationOptions): Promise<Stage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.create1(createStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1WithHttpInfo(id: string, newStageId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete1WithHttpInfo(id, newStageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1(id: string, newStageId?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.delete1(id, newStageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get1WithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Stage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get1WithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get1(id: string, _options?: PromiseConfigurationOptions): Promise<Stage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.get1(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list1WithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StageListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list1WithHttpInfo(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list1(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<StageListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.list1(filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param id the stage identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listStageDealsWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StageDealListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listStageDealsWithHttpInfo(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param id the stage identifier
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listStageDeals(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<StageDealListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listStageDeals(id, filter, pageToken, orderBy, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update1WithHttpInfo(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Stage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update1WithHttpInfo(id, updateMask, updateStageRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update1(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: PromiseConfigurationOptions): Promise<Stage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.update1(id, updateMask, updateStageRequest, observableOptions);
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
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2: CreateSubscriptionV2, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RestSubscriptionV2>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: PromiseConfigurationOptions): Promise<RestSubscriptionV2> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createSubscriptionV2UsingPOST(createSubscriptionV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomFieldUsingDELETE(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSubscriptionCustomFieldUsingDELETE(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGET(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
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
    public applyTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApplyTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<ApplyTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.applyTagsUsingPOST(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1WithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1(createUpdateTagRequest: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTagUsingPOST1(createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagCategoryUsingDELETE(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETEWithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagUsingDELETEWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETE(tagId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTagUsingDELETE(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGETWithHttpInfo(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryUsingGETWithHttpInfo(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGET(tagCategoryId: string, _options?: PromiseConfigurationOptions): Promise<GetTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCategoryUsingGET(tagCategoryId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1WithHttpInfo(tagId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTagUsingGET1WithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1(tagId: string, _options?: PromiseConfigurationOptions): Promise<Tag> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTagUsingGET1(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagIdUsingGET1WithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTaggedCompaniesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagIdUsingGETWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTaggedContactsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts with the specified Tag To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTaggedContactsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listTagCategoriesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTagCategoriesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTagCategoriesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTagsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListTagsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeTagsUsingPOST(tagId, applyRemoveTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTagCategoryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagUsingPATCHWithHttpInfo(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTagResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagUsingPATCH(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTagResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest, observableOptions);
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
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: PromiseConfigurationOptions): Promise<CreateCustomFieldResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskCustomFieldUsingPOST1(createCustomFieldRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1WithHttpInfo(createTaskRequest?: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskUsingPOST1WithHttpInfo(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1(createTaskRequest?: CreateTaskRequest, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTaskUsingPOST1(createTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskCustomFieldUsingDELETE(customFieldId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskUsingDELETE1WithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTaskUsingDELETE1(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Task>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaskUsingGET1WithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: PromiseConfigurationOptions): Promise<Task> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaskUsingGET1(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListTasksResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: PromiseConfigurationOptions): Promise<ListTasksResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTaskModelUsingGET1WithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: PromiseConfigurationOptions): Promise<ObjectModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.retrieveTaskModelUsingGET1(observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CustomFieldMetaData>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CustomFieldMetaData> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskUsingPATCHWithHttpInfo(taskId, updateMask, createUpdateTaskRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTaskUsingPATCH(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: PromiseConfigurationOptions): Promise<UpdateTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTaskUsingPATCH(taskId, updateMask, createUpdateTaskRequest, observableOptions);
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
    public listPaginatedUsersUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUsersPaginatedResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaginatedUsersUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, observableOptions);
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
    public listPaginatedUsersUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: PromiseConfigurationOptions): Promise<ListUsersPaginatedResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listPaginatedUsersUsingGET(filter, orderBy, pageSize, pageToken, observableOptions);
        return result.toPromise();
    }


}



