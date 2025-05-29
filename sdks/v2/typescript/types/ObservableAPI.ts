import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";
export class ObservableAffiliateApi {
    private requestFactory: AffiliateApiRequestFactory;
    private responseProcessor: AffiliateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AffiliateApiRequestFactory,
        responseProcessor?: AffiliateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AffiliateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AffiliateApiResponseProcessor();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateToProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest?: CreateAffiliateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addAffiliateUsingPOST(createAffiliateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOST(createAffiliateRequest?: CreateAffiliateRequest, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addCommissionProgramUsingPOST(createCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: ConfigurationOptions): Observable<AffiliateCommissionProgramResponse> {
        return this.addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignProductCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<ProductCommissionProgram> {
        return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SubscriptionCommissionProgram> {
        return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SetDefaultCommissionProgramResponse> {
        return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRedirectLinkUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOST(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.createRedirectLinkUsingPOSTWithHttpInfo(createOrUpdateAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAffiliateUsingDELETE(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAffiliateUsingDELETEWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRedirectLinkUsingDELETE(redirectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRedirectLinkUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionEarned>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateCommissionTotalUsingGET(affiliateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionTotalUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: ConfigurationOptions): Observable<AffiliateCommissionEarned> {
        return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionEarned>) => apiResponse.data));
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
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateCommissionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionsUsingGETWithHttpInfo(rsp)));
            }));
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
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateCommissionsResponse> {
        return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1WithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateUsingGET1(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1(id: string, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.getAffiliateUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateProgramV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCommissionProgramUsingGET(commissionProgramId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommissionProgramUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: ConfigurationOptions): Observable<AffiliateProgramV2> {
        return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<AffiliateProgramV2>) => apiResponse.data));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRedirectLinkUsingGET(redirectId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRedirectLinkUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateCommissionProgramsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateCommissionProgramsResponse> {
        return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionProgramsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateLinksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateLinksUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateLinksResponse> {
        return this.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateLinksResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateSummariesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSummariesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateSummariesResponse> {
        return this.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateSummariesResponse>) => apiResponse.data));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAffiliateFromProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeProductCommissionFromCommissionsUsingPOST(commissionId, deleteProgramCommissionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId commission_id
     * @param deleteProgramCommissionRequest deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsUsingPOST(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeProductCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteProgramCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateUsingPATCHWithHttpInfo(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAffiliateUsingPATCH(id, updateAffiliateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateUsingPATCH(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.updateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCH(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<AffiliateCommissionProgramResponse> {
        return this.updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDefaultCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public updateDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateDefaultCommissionProgramRequest?: UpdateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SetDefaultCommissionProgramResponse> {
        return this.updateDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateProductCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateProductCommissionProgramRequest] Values of the product Commission Program
     */
    public updateProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateProductCommissionProgramRequest?: UpdateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<ProductCommissionProgram> {
        return this.updateProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRedirectLinkUsingPATCH(redirectId, createOrUpdateAffiliateLinkRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRedirectLinkUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrUpdateAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [updateSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public updateSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, updateSubscriptionCommissionProgramRequest?: UpdateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SubscriptionCommissionProgram> {
        return this.updateSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, updateSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

}

import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";
export class ObservableAutomationApi {
    private requestFactory: AutomationApiRequestFactory;
    private responseProcessor: AutomationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationApiRequestFactory,
        responseProcessor?: AutomationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationApiResponseProcessor();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AddToAutomationSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: ConfigurationOptions): Observable<AddToAutomationSequenceResponse> {
        return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddToAutomationSequenceResponse>) => apiResponse.data));
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesUsingPOSTWithHttpInfo(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bulkAssignmentAutomationsCategoriesUsingPOST(assignAutomationCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkAssignmentAutomationsCategoriesUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesUsingPOST(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.bulkAssignmentAutomationsCategoriesUsingPOSTWithHttpInfo(assignAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETEWithHttpInfo(automationIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAutomationUsingDELETE(automationIds, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAutomationUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGETWithHttpInfo(automationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Automation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAutomationUsingGET(automationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutomationUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGET(automationId: string, _options?: ConfigurationOptions): Observable<Automation> {
        return this.getAutomationUsingGETWithHttpInfo(automationId, _options).pipe(map((apiResponse: HttpInfo<Automation>) => apiResponse.data));
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
    public listAllAutomationIdsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationIdsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAutomationIdsUsingGETWithHttpInfo(rsp)));
            }));
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
    public listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<ListAutomationIdsResponse> {
        return this.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListAutomationIdsResponse>) => apiResponse.data));
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
    public listAutomationsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAutomationsUsingGETWithHttpInfo(rsp)));
            }));
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
    public listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<ListAutomationResponse> {
        return this.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListAutomationResponse>) => apiResponse.data));
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAutomationCategoryUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";
export class ObservableAutomationCategoryApi {
    private requestFactory: AutomationCategoryApiRequestFactory;
    private responseProcessor: AutomationCategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationCategoryApiRequestFactory,
        responseProcessor?: AutomationCategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationCategoryApiResponseProcessor();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutomationCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCategoryUsingPOST(createAutomationCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<AutomationCategory> {
        return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(ids: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCategoriesUsingDELETE(ids, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoriesUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETE(ids: Array<number>, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCategoriesUsingGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGET(_options?: ConfigurationOptions): Observable<ListAutomationCategoryResponse> {
        return this.listCategoriesUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListAutomationCategoryResponse>) => apiResponse.data));
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategoryUsingPATCHWithHttpInfo(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutomationCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.patchCategoryUsingPATCH(id, patchAutomationCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCategoryUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id id
     * @param patchAutomationCategoryRequest patchAutomationCategoryRequest
     */
    public patchCategoryUsingPATCH(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<AutomationCategory> {
        return this.patchCategoryUsingPATCHWithHttpInfo(id, patchAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutomationCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.saveCategoryUsingPUT(saveAutomationCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveCategoryUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<AutomationCategory> {
        return this.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

}

import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";
export class ObservableBusinessProfileApi {
    private requestFactory: BusinessProfileApiRequestFactory;
    private responseProcessor: BusinessProfileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessProfileApiRequestFactory,
        responseProcessor?: BusinessProfileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessProfileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessProfileApiResponseProcessor();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBusinessProfileUsingGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessProfileUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGET(_options?: ConfigurationOptions): Observable<GetBusinessProfileResponse> {
        return this.getBusinessProfileUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileUsingPATCHWithHttpInfo(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBusinessProfileUsingPATCH(updateMask, updateBusinessProfileRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBusinessProfileUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileUsingPATCH(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: ConfigurationOptions): Observable<GetBusinessProfileResponse> {
        return this.updateBusinessProfileUsingPATCHWithHttpInfo(updateMask, updateBusinessProfileRequest, _options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

}

import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";
export class ObservableCampaignApi {
    private requestFactory: CampaignApiRequestFactory;
    private responseProcessor: CampaignApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignApiRequestFactory,
        responseProcessor?: CampaignApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CampaignApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CampaignApiResponseProcessor();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AddContactsToSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: ConfigurationOptions): Observable<AddContactsToSequenceResponse> {
        return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddContactsToSequenceResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1WithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Campaign>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaignUsingGET1(campaignId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1(campaignId: string, _options?: ConfigurationOptions): Observable<Campaign> {
        return this.getCampaignUsingGET1WithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<Campaign>) => apiResponse.data));
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
    public listCampaignsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListCampaignsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignsUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: ConfigurationOptions): Observable<ListCampaignsResponse> {
        return this.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListCampaignsResponse>) => apiResponse.data));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: ConfigurationOptions): Observable<RemoveContactsFromSequenceResponse> {
        return this.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<RemoveContactsFromSequenceResponse>) => apiResponse.data));
    }

}

import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";
export class ObservableCompanyApi {
    private requestFactory: CompanyApiRequestFactory;
    private responseProcessor: CompanyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyApiRequestFactory,
        responseProcessor?: CompanyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompanyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompanyApiResponseProcessor();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyUsingPOST1WithHttpInfo(createCompanyRequest?: CreateCompanyRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCompanyUsingPOST1(createCompanyRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCompanyUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyUsingPOST1(createCompanyRequest?: CreateCompanyRequest, _options?: ConfigurationOptions): Observable<Company> {
        return this.createCompanyUsingPOST1WithHttpInfo(createCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETEWithHttpInfo(companyId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCompanyUsingDELETE(companyId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCompanyUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETE(companyId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1WithHttpInfo(companyId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCompanyUsingGET1(companyId, fields, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<Company> {
        return this.getCompanyUsingGET1WithHttpInfo(companyId, fields, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
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
    public listCompaniesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCompaniesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListCompaniesResponse> {
        return this.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCompaniesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyUsingPATCH1WithHttpInfo(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCompanyUsingPATCH1(companyId, updateMask, updateCompanyRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCompanyUsingPATCH1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyUsingPATCH1(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: ConfigurationOptions): Observable<Company> {
        return this.updateCompanyUsingPATCH1WithHttpInfo(companyId, updateMask, updateCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

}

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class ObservableContactApi {
    private requestFactory: ContactApiRequestFactory;
    private responseProcessor: ContactApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactApiResponseProcessor();
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ContactLinkType>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContactLinkTypeUsingPOST(createContactLinkTypeRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactLinkTypeUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOST(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: ConfigurationOptions): Observable<ContactLinkType> {
        return this.createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLinkType>) => apiResponse.data));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactUsingPOST1WithHttpInfo(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContactUsingPOST1(createUpdateContactRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactUsingPOST1(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: ConfigurationOptions): Observable<Contact> {
        return this.createContactUsingPOST1WithHttpInfo(createUpdateContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1WithHttpInfo(contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteContactUsingDELETE1(contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContactUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1(contactId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteContactUsingDELETE1WithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactUsingGET1WithHttpInfo(contactId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContactUsingGET1(contactId, fields, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<Contact> {
        return this.getContactUsingGET1WithHttpInfo(contactId, fields, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ContactLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.linkContactsUsingPOST(linkContactsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkContactsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<ContactLink> {
        return this.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLink>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGETWithHttpInfo(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactLinkTypesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinkTypesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListContactLinkTypesResponse> {
        return this.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactLinkTypesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGETWithHttpInfo(contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactLinksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactLinksUsingGET(contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinksUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGET(contactId: string, _options?: ConfigurationOptions): Observable<ListContactLinksResponse> {
        return this.listContactLinksUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<ListContactLinksResponse>) => apiResponse.data));
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
    public listContactsUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListContactsResponse> {
        return this.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactsResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1WithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveContactModelUsingGET1(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveContactModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveContactModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unlinkContactsUsingPOST(linkContactsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkContactsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactUsingPATCHWithHttpInfo(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateContactUsingPATCH(contactId, updateMask, createUpdateContactRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContactUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactUsingPATCH(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: ConfigurationOptions): Observable<Contact> {
        return this.updateContactUsingPATCHWithHttpInfo(contactId, updateMask, createUpdateContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

}

import { CustomFieldsApiRequestFactory, CustomFieldsApiResponseProcessor} from "../apis/CustomFieldsApi";
export class ObservableCustomFieldsApi {
    private requestFactory: CustomFieldsApiRequestFactory;
    private responseProcessor: CustomFieldsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomFieldsApiRequestFactory,
        responseProcessor?: CustomFieldsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomFieldsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomFieldsApiResponseProcessor();
    }

    /**
     * Retrieves a list of custom fields in a tenant.
     * Retrieves a list of custom fields in a tenant.
     */
    public getCustomFieldsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<PipelineCustomFields>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCustomFields(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of custom fields in a tenant.
     * Retrieves a list of custom fields in a tenant.
     */
    public getCustomFields(_options?: ConfigurationOptions): Observable<PipelineCustomFields> {
        return this.getCustomFieldsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PipelineCustomFields>) => apiResponse.data));
    }

    /**
     * Updates a custom field
     * Updates a custom field
     * @param customFieldId the identifier of the custom field to update
     * @param updateCustomFieldRequest the request body containing updated custom field details
     */
    public updateCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineCustomField>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCustomField(customFieldId, updateCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field
     * Updates a custom field
     * @param customFieldId the identifier of the custom field to update
     * @param updateCustomFieldRequest the request body containing updated custom field details
     */
    public updateCustomField(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, _options?: ConfigurationOptions): Observable<PipelineCustomField> {
        return this.updateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<PipelineCustomField>) => apiResponse.data));
    }

}

import { DateExpressionApiRequestFactory, DateExpressionApiResponseProcessor} from "../apis/DateExpressionApi";
export class ObservableDateExpressionApi {
    private requestFactory: DateExpressionApiRequestFactory;
    private responseProcessor: DateExpressionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DateExpressionApiRequestFactory,
        responseProcessor?: DateExpressionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DateExpressionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DateExpressionApiResponseProcessor();
    }

    /**
     * @param [timeZone]
     * @param [query]
     */
    public queryDateExpressionsWithHttpInfo(timeZone?: string, query?: string, _options?: ConfigurationOptions): Observable<HttpInfo<DateExpressionResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.queryDateExpressions(timeZone, query, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryDateExpressionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [timeZone]
     * @param [query]
     */
    public queryDateExpressions(timeZone?: string, query?: string, _options?: ConfigurationOptions): Observable<DateExpressionResponse> {
        return this.queryDateExpressionsWithHttpInfo(timeZone, query, _options).pipe(map((apiResponse: HttpInfo<DateExpressionResponse>) => apiResponse.data));
    }

}

import { DealsApiRequestFactory, DealsApiResponseProcessor} from "../apis/DealsApi";
export class ObservableDealsApi {
    private requestFactory: DealsApiRequestFactory;
    private responseProcessor: DealsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DealsApiRequestFactory,
        responseProcessor?: DealsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DealsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DealsApiResponseProcessor();
    }

    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param createDealRequest the request body containing deal details
     */
    public createDealWithHttpInfo(createDealRequest: CreateDealRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Deal>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDeal(createDealRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new deal.
     * Creates a new deal.
     * @param createDealRequest the request body containing deal details
     */
    public createDeal(createDealRequest: CreateDealRequest, _options?: ConfigurationOptions): Observable<Deal> {
        return this.createDealWithHttpInfo(createDealRequest, _options).pipe(map((apiResponse: HttpInfo<Deal>) => apiResponse.data));
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public createNoteWithHttpInfo(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DealNote>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNote(id, createDealNoteRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public createNote(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: ConfigurationOptions): Observable<DealNote> {
        return this.createNoteWithHttpInfo(id, createDealNoteRequest, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
    }

    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param bulkCreateDealNotesRequest the request body containing note details
     */
    public createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest: BulkCreateDealNotesRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BulkCreateDealNotesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNotesBulk(bulkCreateDealNotesRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNotesBulkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates new notes in bulk.
     * Creates new notes in bulk.
     * @param bulkCreateDealNotesRequest the request body containing note details
     */
    public createNotesBulk(bulkCreateDealNotesRequest: BulkCreateDealNotesRequest, _options?: ConfigurationOptions): Observable<BulkCreateDealNotesResponse> {
        return this.createNotesBulkWithHttpInfo(bulkCreateDealNotesRequest, _options).pipe(map((apiResponse: HttpInfo<BulkCreateDealNotesResponse>) => apiResponse.data));
    }

    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param id the ID of the deal to delete
     */
    public deleteDealWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDeal(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific deal by its ID.
     * Deletes a specific deal by its ID.
     * @param id the ID of the deal to delete
     */
    public deleteDeal(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDealWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public deleteNoteWithHttpInfo(noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteNote(noteId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public deleteNote(noteId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteNoteWithHttpInfo(noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param dealId the ID of the deal to retrieve
     */
    public getDealWithHttpInfo(dealId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Deal>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDeal(dealId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific deal by its ID.
     * Retrieves a specific deal by its ID.
     * @param dealId the ID of the deal to retrieve
     */
    public getDeal(dealId: string, _options?: ConfigurationOptions): Observable<Deal> {
        return this.getDealWithHttpInfo(dealId, _options).pipe(map((apiResponse: HttpInfo<Deal>) => apiResponse.data));
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public getNoteWithHttpInfo(noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<DealNote>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNote(noteId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public getNote(noteId: string, _options?: ConfigurationOptions): Observable<DealNote> {
        return this.getNoteWithHttpInfo(noteId, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
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
    public listDealsWithHttpInfo(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<DealListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listDeals(contactId, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDealsWithHttpInfo(rsp)));
            }));
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
    public listDeals(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<DealListResponse> {
        return this.listDealsWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<DealListResponse>) => apiResponse.data));
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
    public listNotesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<DealNoteListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotes(id, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotesWithHttpInfo(rsp)));
            }));
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
    public listNotes(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<DealNoteListResponse> {
        return this.listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<DealNoteListResponse>) => apiResponse.data));
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public updateNoteWithHttpInfo(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DealNote>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateNote(noteId, updateDealNoteRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public updateNote(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: ConfigurationOptions): Observable<DealNote> {
        return this.updateNoteWithHttpInfo(noteId, updateDealNoteRequest, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
    }

}

import { DisplayFormsApiRequestFactory, DisplayFormsApiResponseProcessor} from "../apis/DisplayFormsApi";
export class ObservableDisplayFormsApi {
    private requestFactory: DisplayFormsApiRequestFactory;
    private responseProcessor: DisplayFormsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DisplayFormsApiRequestFactory,
        responseProcessor?: DisplayFormsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DisplayFormsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DisplayFormsApiResponseProcessor();
    }

    /**
     * Retrieves a specific display form by a pipeline ID.
     * Retrieves a specific display form by a pipeline ID.
     * @param pipelineId the ID of the pipeline containing the form
     */
    public getDisplayFormWithHttpInfo(pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<DisplayForm>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDisplayForm(pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDisplayFormWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific display form by a pipeline ID.
     * Retrieves a specific display form by a pipeline ID.
     * @param pipelineId the ID of the pipeline containing the form
     */
    public getDisplayForm(pipelineId: string, _options?: ConfigurationOptions): Observable<DisplayForm> {
        return this.getDisplayFormWithHttpInfo(pipelineId, _options).pipe(map((apiResponse: HttpInfo<DisplayForm>) => apiResponse.data));
    }

    /**
     * Updates a display form
     * Updates a display form
     * @param pipelineId the ID of the pipeline containing the form
     * @param updateDisplayFormRequest the request body containing updated display form details
     */
    public updateDisplayFormWithHttpInfo(pipelineId: string, updateDisplayFormRequest: UpdateDisplayFormRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DisplayForm>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDisplayForm(pipelineId, updateDisplayFormRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDisplayFormWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a display form
     * Updates a display form
     * @param pipelineId the ID of the pipeline containing the form
     * @param updateDisplayFormRequest the request body containing updated display form details
     */
    public updateDisplayForm(pipelineId: string, updateDisplayFormRequest: UpdateDisplayFormRequest, _options?: ConfigurationOptions): Observable<DisplayForm> {
        return this.updateDisplayFormWithHttpInfo(pipelineId, updateDisplayFormRequest, _options).pipe(map((apiResponse: HttpInfo<DisplayForm>) => apiResponse.data));
    }

}

import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";
export class ObservableEmailApi {
    private requestFactory: EmailApiRequestFactory;
    private responseProcessor: EmailApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailApiRequestFactory,
        responseProcessor?: EmailApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailApiResponseProcessor();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailUsingPOST1WithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<EmailSentWithContent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEmailUsingPOST1(createEmailSentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailUsingPOST1(createEmailSentRequest: CreateEmailSentRequest, _options?: ConfigurationOptions): Observable<EmailSentWithContent> {
        return this.createEmailUsingPOST1WithHttpInfo(createEmailSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<EmailsSentList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEmailsUsingPOST1(createEmailsSentRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailsUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: ConfigurationOptions): Observable<EmailsSentList> {
        return this.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailsSentList>) => apiResponse.data));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1WithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEmailUsingDELETE1(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteEmailUsingDELETE1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DeleteEmailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEmailsUsingPOST1(deleteEmailsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailsUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: ConfigurationOptions): Observable<DeleteEmailsResponse> {
        return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteEmailsResponse>) => apiResponse.data));
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGETWithHttpInfo(emailTemplateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<EmailTemplate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEmailTemplateUsingGET(emailTemplateId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailTemplateUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGET(emailTemplateId: string, _options?: ConfigurationOptions): Observable<EmailTemplate> {
        return this.getEmailTemplateUsingGETWithHttpInfo(emailTemplateId, _options).pipe(map((apiResponse: HttpInfo<EmailTemplate>) => apiResponse.data));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1WithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<EmailSentWithContent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEmailUsingGET1(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1(id: string, _options?: ConfigurationOptions): Observable<EmailSentWithContent> {
        return this.getEmailUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplateUsingPOSTWithHttpInfo(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendEmailTemplateUsingPOST(emailSendTemplateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailTemplateUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param [emailSendTemplateRequest] Use a template to send an email to a list of contacts 
     */
    public sendEmailTemplateUsingPOST(emailSendTemplateRequest?: EmailSendTemplateRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.sendEmailTemplateUsingPOSTWithHttpInfo(emailSendTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1WithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendEmailUsingPOST1(emailSendRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
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
    public createFileUsingPOST1WithHttpInfo(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFileUsingPOST1(file, fileAssociation, fileName, isPublic, contactId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFileUsingPOST1WithHttpInfo(rsp)));
            }));
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
    public createFileUsingPOST1(file: string, fileAssociation: string, fileName: string, isPublic: boolean, contactId?: string, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.createFileUsingPOST1WithHttpInfo(file, fileAssociation, fileName, isPublic, contactId, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1WithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFileUsingDELETE1(fileId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1(fileId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFileUsingDELETE1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGETWithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFileDataUsingGET(fileId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileDataUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGET(fileId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getFileDataUsingGETWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1WithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFileUsingGET1(fileId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1(fileId: string, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.getFileUsingGET1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFilesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFilesUsingGET1(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFilesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListFilesResponse> {
        return this.listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFilesResponse>) => apiResponse.data));
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
    public updateFileUsingPOSTWithHttpInfo(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFileUsingPOST(fileId, file, fileName, isPublic, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFileUsingPOSTWithHttpInfo(rsp)));
            }));
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
    public updateFileUsingPOST(fileId: string, file?: string, fileName?: string, isPublic?: boolean, updateMask?: string, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.updateFileUsingPOSTWithHttpInfo(fileId, file, fileName, isPublic, updateMask, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

}

import { FreeTrialDiscountsApiRequestFactory, FreeTrialDiscountsApiResponseProcessor} from "../apis/FreeTrialDiscountsApi";
export class ObservableFreeTrialDiscountsApi {
    private requestFactory: FreeTrialDiscountsApiRequestFactory;
    private responseProcessor: FreeTrialDiscountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FreeTrialDiscountsApiRequestFactory,
        responseProcessor?: FreeTrialDiscountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FreeTrialDiscountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FreeTrialDiscountsApiResponseProcessor();
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest createFreeTrialDiscountRequest
     */
    public createDiscountUsingPOST1WithHttpInfo(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDiscountUsingPOST1(createFreeTrialDiscountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest createFreeTrialDiscountRequest
     */
    public createDiscountUsingPOST1(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.createDiscountUsingPOST1WithHttpInfo(createFreeTrialDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE1(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDiscountUsingGET1(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1(discountId: string, _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.getDiscountUsingGET1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFreeTrialsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFreeTrialDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFreeTrialsUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFreeTrialsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFreeTrialsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListFreeTrialDiscountsResponse> {
        return this.listFreeTrialsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFreeTrialDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1WithHttpInfo(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH1(discountId, updateFreeTrialDiscountRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCH1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId discount_id
     * @param updateFreeTrialDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.updateDiscountUsingPATCH1WithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

}

import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";
export class ObservableLeadSourceCategoriesApi {
    private requestFactory: LeadSourceCategoriesApiRequestFactory;
    private responseProcessor: LeadSourceCategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceCategoriesApiRequestFactory,
        responseProcessor?: LeadSourceCategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourceCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourceCategoriesApiResponseProcessor();
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest The request object to create a new lead source category
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceCategoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Category
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest The request object to create a new lead source category
     */
    public createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryUsingDELETE(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(leadSourceCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceCategoryUsingGET(leadSourceCategoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceCategoryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryUsingGET(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.getLeadSourceCategoryUsingGETWithHttpInfo(leadSourceCategoryId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoriesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceCategoriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCategoriesUsingGET1(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoriesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceCategoriesResponse> {
        return this.listCategoriesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryUsingPATCHWithHttpInfo(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceCategoryUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest The request object to update a lead source category
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryUsingPATCH(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.updateLeadSourceCategoryUsingPATCHWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

}

import { LeadSourceExpensesApiRequestFactory, LeadSourceExpensesApiResponseProcessor} from "../apis/LeadSourceExpensesApi";
export class ObservableLeadSourceExpensesApi {
    private requestFactory: LeadSourceExpensesApiRequestFactory;
    private responseProcessor: LeadSourceExpensesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceExpensesApiRequestFactory,
        responseProcessor?: LeadSourceExpensesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourceExpensesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourceExpensesApiResponseProcessor();
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceExpenseUsingPOST(leadSourceId, createLeadSourceExpenseRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceExpenseUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest The request object to create a new lead source expense
     */
    public createLeadSourceExpenseUsingPOST(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.createLeadSourceExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceUsingDELETE1(leadSourceExpenseId, leadSourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceUsingDELETE1(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceUsingDELETE1WithHttpInfo(leadSourceExpenseId, leadSourceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceExpenseUsingGET(leadSourceExpenseId, leadSourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceExpenseUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseUsingGET(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.getLeadSourceExpenseUsingGETWithHttpInfo(leadSourceExpenseId, leadSourceId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
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
    public listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourceExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourceExpensesUsingGETWithHttpInfo(rsp)));
            }));
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
    public listLeadSourceExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceExpensesResponse> {
        return this.listLeadSourceExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceExpensesResponse>) => apiResponse.data));
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest The request object to update a lead source expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceExpenseUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest The request object to update a lead source expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpenseUsingPATCH(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.updateLeadSourceExpenseUsingPATCHWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
    }

}

import { LeadSourceRecurringExpensesApiRequestFactory, LeadSourceRecurringExpensesApiResponseProcessor} from "../apis/LeadSourceRecurringExpensesApi";
export class ObservableLeadSourceRecurringExpensesApi {
    private requestFactory: LeadSourceRecurringExpensesApiRequestFactory;
    private responseProcessor: LeadSourceRecurringExpensesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceRecurringExpensesApiRequestFactory,
        responseProcessor?: LeadSourceRecurringExpensesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourceRecurringExpensesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourceRecurringExpensesApiResponseProcessor();
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceRecurringExpenseUsingPOST(leadSourceId, createLeadSourceRecurringExpenseRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest The request object to create a new lead source recurring expense
     */
    public createLeadSourceRecurringExpenseUsingPOST(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.createLeadSourceRecurringExpenseUsingPOSTWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId, leadSourceRecurringExpenseId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseUsingDELETE(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceRecurringExpenseUsingDELETEWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceRecurringExpenseUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.getLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
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
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(rsp)));
            }));
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
    public listExpensesIncurredFromLeadSourceRecurringExpenseUsingGET(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceExpensesResponse> {
        return this.listExpensesIncurredFromLeadSourceRecurringExpenseUsingGETWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceExpensesResponse>) => apiResponse.data));
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
    public listLeadSourceRecurringExpensesUsingGETWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourceRecurringExpensesUsingGET(leadSourceId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourceRecurringExpensesUsingGETWithHttpInfo(rsp)));
            }));
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
    public listLeadSourceRecurringExpensesUsingGET(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceRecurringExpensesResponse> {
        return this.listLeadSourceRecurringExpensesUsingGETWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceRecurringExpensesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest The request object to update a lead source recurring expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceRecurringExpenseUsingPATCH(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest The request object to update a lead source recurring expense
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpenseUsingPATCH(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.updateLeadSourceRecurringExpenseUsingPATCHWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
    }

}

import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";
export class ObservableLeadSourcesApi {
    private requestFactory: LeadSourcesApiRequestFactory;
    private responseProcessor: LeadSourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourcesApiRequestFactory,
        responseProcessor?: LeadSourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourcesApiResponseProcessor();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest The request object to create a new lead source
     */
    public createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest: CreateLeadSourceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceUsingPOST(createLeadSourceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest The request object to create a new lead source
     */
    public createLeadSourceUsingPOST(createLeadSourceRequest: CreateLeadSourceRequest, _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceUsingDELETEWithHttpInfo(leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceUsingDELETE(leadSourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceUsingDELETE(leadSourceId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceUsingDELETEWithHttpInfo(leadSourceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceUsingGETWithHttpInfo(leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceUsingGET(leadSourceId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceUsingGET(leadSourceId: string, _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.getLeadSourceUsingGETWithHttpInfo(leadSourceId, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourcesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourcesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourcesResponse> {
        return this.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourcesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceUsingPATCHWithHttpInfo(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceUsingPATCH(leadSourceId, createLeadSourceRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest The request object to update a lead source
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceUsingPATCH(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.updateLeadSourceUsingPATCHWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

}

import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";
export class ObservableNoteApi {
    private requestFactory: NoteApiRequestFactory;
    private responseProcessor: NoteApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NoteApiRequestFactory,
        responseProcessor?: NoteApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NoteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NoteApiResponseProcessor();
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNoteCustomFieldUsingPOST1(createCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1WithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Note>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNoteUsingPOST1(contactId, createNoteRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1(contactId: string, createNoteRequest: CreateNoteRequest, _options?: ConfigurationOptions): Observable<Note> {
        return this.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest, _options).pipe(map((apiResponse: HttpInfo<Note>) => apiResponse.data));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1WithHttpInfo(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteNoteUsingDELETE1(contactId, noteId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNoteUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1WithHttpInfo(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetNoteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNoteUsingGET1(contactId, noteId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNoteUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<GetNoteResponse> {
        return this.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<GetNoteResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListNoteTemplateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNoteTemplatesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNoteTemplatesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListNoteTemplateResponse> {
        return this.listNoteTemplatesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNoteTemplateResponse>) => apiResponse.data));
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
    public listNotesUsingGET1WithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListNotesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListNotesResponse> {
        return this.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNotesResponse>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveNoteModelUsingGET1(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveNoteModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveNoteModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCHWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateNoteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNoteUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<UpdateNoteResponse> {
        return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateNoteResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNotesCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";
export class ObservableOpportunityApi {
    private requestFactory: OpportunityApiRequestFactory;
    private responseProcessor: OpportunityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunityApiRequestFactory,
        responseProcessor?: OpportunityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpportunityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpportunityApiResponseProcessor();
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunityStageUsingPOST(createOpportunityStageRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityStageUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOST(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest?: CreateOpportunityRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunityUsingPOST1(createOpportunityRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1(createOpportunityRequest?: CreateOpportunityRequest, _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOpportunityStageUsingDELETE(stageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityStageUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOpportunityUsingDELETE(opportunityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOpportunityStageUsingGET(stageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityStageUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.getOpportunityStageUsingGETWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOpportunityUsingGET1(opportunityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
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
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOpportunitiesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunitiesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOpportunitiesResponse> {
        return this.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunitiesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOpportunityStagesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunityStagesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOpportunityStagesResponse> {
        return this.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunityStagesResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityStageUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCH(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunityUsingPATCH(opportunityId, updateOpportunityRequestV2, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param updateOpportunityRequestV2 request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

}

import { OrderTotalDiscountsApiRequestFactory, OrderTotalDiscountsApiResponseProcessor} from "../apis/OrderTotalDiscountsApi";
export class ObservableOrderTotalDiscountsApi {
    private requestFactory: OrderTotalDiscountsApiRequestFactory;
    private responseProcessor: OrderTotalDiscountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderTotalDiscountsApiRequestFactory,
        responseProcessor?: OrderTotalDiscountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderTotalDiscountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderTotalDiscountsApiResponseProcessor();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderTotalDiscountUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrderTotalDiscountUsingDELETE(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETE(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrderTotalDiscountUsingGET(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderTotalDiscountUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGET(discountId: string, _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.getOrderTotalDiscountUsingGETWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderTotalDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOrderTotalDiscountsResponse> {
        return this.listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderTotalDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderTotalDiscountUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCH(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

}

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class ObservableOrdersApi {
    private requestFactory: OrdersApiRequestFactory;
    private responseProcessor: OrdersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrdersApiResponseProcessor();
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderCustomFieldUsingPOST(createCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrderCustomFieldUsingDELETE(customFieldId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETE(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModelUsingGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { PaymentMethodConfigsApiRequestFactory, PaymentMethodConfigsApiResponseProcessor} from "../apis/PaymentMethodConfigsApi";
export class ObservablePaymentMethodConfigsApi {
    private requestFactory: PaymentMethodConfigsApiRequestFactory;
    private responseProcessor: PaymentMethodConfigsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodConfigsApiRequestFactory,
        responseProcessor?: PaymentMethodConfigsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentMethodConfigsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentMethodConfigsApiResponseProcessor();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PaymentMethodConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentMethodConfigUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: ConfigurationOptions): Observable<PaymentMethodConfig> {
        return this.createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest, _options).pipe(map((apiResponse: HttpInfo<PaymentMethodConfig>) => apiResponse.data));
    }

}

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class ObservablePipelinesApi {
    private requestFactory: PipelinesApiRequestFactory;
    private responseProcessor: PipelinesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelinesApiResponseProcessor();
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public _deleteWithHttpInfo(id: string, allowCleanup?: boolean, newStageId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory._delete(id, allowCleanup, newStageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public _delete(id: string, allowCleanup?: boolean, newStageId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this._deleteWithHttpInfo(id, allowCleanup, newStageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createPipelineRequest the create request
     */
    public createWithHttpInfo(createPipelineRequest: CreatePipelineRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.create(createPipelineRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createPipelineRequest the create request
     */
    public create(createPipelineRequest: CreatePipelineRequest, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.createWithHttpInfo(createPipelineRequest, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public getWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get(id: string, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.getWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
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
    public getDealCountWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<number>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDealCount(id, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDealCountWithHttpInfo(rsp)));
            }));
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
    public getDealCount(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<number> {
        return this.getDealCountWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
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
    public getOutcomeLabelsWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOutcomeLabels(id, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOutcomeLabelsWithHttpInfo(rsp)));
            }));
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
    public getOutcomeLabels(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<PipelineOutcomeLabelListResponse> {
        return this.getOutcomeLabelsWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<PipelineOutcomeLabelListResponse>) => apiResponse.data));
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list(filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<PipelineListResponse> {
        return this.listWithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<PipelineListResponse>) => apiResponse.data));
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
    public listStagesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineStageListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listStages(id, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStagesWithHttpInfo(rsp)));
            }));
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
    public listStages(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<PipelineStageListResponse> {
        return this.listStagesWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<PipelineStageListResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listSummariesWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineSummariesListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSummaries(filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSummariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public listSummaries(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<PipelineSummariesListResponse> {
        return this.listSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<PipelineSummariesListResponse>) => apiResponse.data));
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param updateOutcomeLabelsRequest the request containing the new outcome labels
     */
    public setOutcomeLabelsWithHttpInfo(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setOutcomeLabels(id, updateOutcomeLabelsRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setOutcomeLabelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param updateOutcomeLabelsRequest the request containing the new outcome labels
     */
    public setOutcomeLabels(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: ConfigurationOptions): Observable<PipelineOutcomeLabelListResponse> {
        return this.setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest, _options).pipe(map((apiResponse: HttpInfo<PipelineOutcomeLabelListResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updatePipelineRequest the update request
     */
    public updateWithHttpInfo(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update(id, updateMask, updatePipelineRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updatePipelineRequest the update request
     */
    public update(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.updateWithHttpInfo(id, updateMask, updatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

}

import { ProductDiscountsApiRequestFactory, ProductDiscountsApiResponseProcessor} from "../apis/ProductDiscountsApi";
export class ObservableProductDiscountsApi {
    private requestFactory: ProductDiscountsApiRequestFactory;
    private responseProcessor: ProductDiscountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductDiscountsApiRequestFactory,
        responseProcessor?: ProductDiscountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductDiscountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductDiscountsApiResponseProcessor();
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest request
     */
    public createDiscountUsingPOST2WithHttpInfo(createProductDiscountRequest: CreateProductDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDiscountUsingPOST2(createProductDiscountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOST2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest request
     */
    public createDiscountUsingPOST2(createProductDiscountRequest: CreateProductDiscountRequest, _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.createDiscountUsingPOST2WithHttpInfo(createProductDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE2(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDiscountUsingDELETE2WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET2WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDiscountUsingGET2(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGET2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET2(discountId: string, _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.getDiscountUsingGET2WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductDiscountsResponse> {
        return this.listDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH2WithHttpInfo(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH2(discountId, updateProductDiscountRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCH2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId discount_id
     * @param updateProductDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH2(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.updateDiscountUsingPATCH2WithHttpInfo(discountId, updateProductDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
    }

}

import { ProductInterestBundlesApiRequestFactory, ProductInterestBundlesApiResponseProcessor} from "../apis/ProductInterestBundlesApi";
export class ObservableProductInterestBundlesApi {
    private requestFactory: ProductInterestBundlesApiRequestFactory;
    private responseProcessor: ProductInterestBundlesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductInterestBundlesApiRequestFactory,
        responseProcessor?: ProductInterestBundlesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductInterestBundlesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductInterestBundlesApiResponseProcessor();
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id id
     * @param addProductInterestRequest request
     */
    public addProductInterestUsingPOSTWithHttpInfo(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addProductInterestUsingPOST(id, addProductInterestRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProductInterestUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id id
     * @param addProductInterestRequest request
     */
    public addProductInterestUsingPOST(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: ConfigurationOptions): Observable<ProductInterest> {
        return this.addProductInterestUsingPOSTWithHttpInfo(id, addProductInterestRequest, _options).pipe(map((apiResponse: HttpInfo<ProductInterest>) => apiResponse.data));
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductInterestBundleUsingPOST(createProductInterestBundleRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductInterestBundleUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest createProductInterestBundleRequest
     */
    public createProductInterestBundleUsingPOST(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.createProductInterestBundleUsingPOSTWithHttpInfo(createProductInterestBundleRequest, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundleUsingDELETEWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductInterestBundleUsingDELETE(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductInterestBundleUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id id
     */
    public deleteProductInterestBundleUsingDELETE(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductInterestBundleUsingDELETEWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundleUsingGETWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductInterestBundleUsingGET(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductInterestBundleUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id id
     */
    public getProductInterestBundleUsingGET(id: string, _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.getProductInterestBundleUsingGETWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductInterestBundlesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductInterestBundleResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductInterestBundlesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductInterestBundlesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductInterestBundlesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductInterestBundleResponse> {
        return this.listProductInterestBundlesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductInterestBundleResponse>) => apiResponse.data));
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterestUsingDELETEWithHttpInfo(id: string, interestId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeProductInterestUsingDELETE(id, interestId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProductInterestUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id id
     * @param interestId interest_id
     */
    public removeProductInterestUsingDELETE(id: string, interestId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.removeProductInterestUsingDELETEWithHttpInfo(id, interestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleUsingPATCHWithHttpInfo(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductInterestBundleUsingPATCH(id, updateProductInterestBundleRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductInterestBundleUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id id
     * @param updateProductInterestBundleRequest updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleUsingPATCH(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.updateProductInterestBundleUsingPATCHWithHttpInfo(id, updateProductInterestBundleRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id id
     * @param interestId interest_id
     * @param updateProductInterestRequest updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestUsingPATCHWithHttpInfo(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductInterestUsingPATCH(id, interestId, updateProductInterestRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductInterestUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id id
     * @param interestId interest_id
     * @param updateProductInterestRequest updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestUsingPATCH(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<ProductInterest> {
        return this.updateProductInterestUsingPATCHWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductInterest>) => apiResponse.data));
    }

}

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class ObservableReportingApi {
    private requestFactory: ReportingApiRequestFactory;
    private responseProcessor: ReportingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportingApiResponseProcessor();
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReportsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListReportsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listReportsUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listReportsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReportsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListReportsResponse> {
        return this.listReportsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListReportsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReportUsingGETWithHttpInfo(reportId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Report>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveReportUsingGET(reportId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveReportUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId report_id
     */
    public retrieveReportUsingGET(reportId: string, _options?: ConfigurationOptions): Observable<Report> {
        return this.retrieveReportUsingGETWithHttpInfo(reportId, _options).pipe(map((apiResponse: HttpInfo<Report>) => apiResponse.data));
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
    public runReportUsingPOSTWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ReportExecutionResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runReportUsingPOSTWithHttpInfo(rsp)));
            }));
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
    public runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ReportExecutionResult> {
        return this.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ReportExecutionResult>) => apiResponse.data));
    }

}

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class ObservableSalesApi {
    private requestFactory: SalesApiRequestFactory;
    private responseProcessor: SalesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SalesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SalesApiResponseProcessor();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setMerchantGatewayAsDefaultUsingPOST(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOST(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGETWithHttpInfo(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: ConfigurationOptions): Observable<HttpInfo<GetSettingsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getApplicationConfigurationsUsingGET(fields, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationConfigurationsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGET(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: ConfigurationOptions): Observable<GetSettingsResponse> {
        return this.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options).pipe(map((apiResponse: HttpInfo<GetSettingsResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetContactOptionTypesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContactOptionTypesUsingGET1(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactOptionTypesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1(_options?: ConfigurationOptions): Observable<GetContactOptionTypesResponse> {
        return this.getContactOptionTypesUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetContactOptionTypesResponse>) => apiResponse.data));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.isApplicationEnabledUsingGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.isApplicationEnabledUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGET(_options?: ConfigurationOptions): Observable<GetApplicationEnabledStatusResponse> {
        return this.isApplicationEnabledUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetApplicationEnabledStatusResponse>) => apiResponse.data));
    }

}

import { ShippingDiscountsApiRequestFactory, ShippingDiscountsApiResponseProcessor} from "../apis/ShippingDiscountsApi";
export class ObservableShippingDiscountsApi {
    private requestFactory: ShippingDiscountsApiRequestFactory;
    private responseProcessor: ShippingDiscountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingDiscountsApiRequestFactory,
        responseProcessor?: ShippingDiscountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShippingDiscountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShippingDiscountsApiResponseProcessor();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST3WithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDiscountUsingPOST3(createShippingDiscountRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOST3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST3(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.createDiscountUsingPOST3WithHttpInfo(createShippingDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE3WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE3(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE3(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDiscountUsingDELETE3WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET3WithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDiscountUsingGET3(discountId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGET3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET3(discountId: string, _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.getDiscountUsingGET3WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListShippingDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listDiscountsUsingGET1(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDiscountsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListShippingDiscountsResponse> {
        return this.listDiscountsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListShippingDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH3WithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH3(discountId, updateShippingDiscountRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCH3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH3(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.updateDiscountUsingPATCH3WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

}

import { StagesApiRequestFactory, StagesApiResponseProcessor} from "../apis/StagesApi";
export class ObservableStagesApi {
    private requestFactory: StagesApiRequestFactory;
    private responseProcessor: StagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StagesApiRequestFactory,
        responseProcessor?: StagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StagesApiResponseProcessor();
    }

    /**
     * Counts the number of deals in a specific stage.
     * Counts the number of deals in a specific stage.
     * @param id the stage identifier
     */
    public countDealsInStageWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<number>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.countDealsInStage(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countDealsInStageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Counts the number of deals in a specific stage.
     * Counts the number of deals in a specific stage.
     * @param id the stage identifier
     */
    public countDealsInStage(id: string, _options?: ConfigurationOptions): Observable<number> {
        return this.countDealsInStageWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createStageRequest the create request
     */
    public create1WithHttpInfo(createStageRequest: CreateStageRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Stage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.create1(createStageRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param createStageRequest the create request
     */
    public create1(createStageRequest: CreateStageRequest, _options?: ConfigurationOptions): Observable<Stage> {
        return this.create1WithHttpInfo(createStageRequest, _options).pipe(map((apiResponse: HttpInfo<Stage>) => apiResponse.data));
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1WithHttpInfo(id: string, newStageId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.delete1(id, newStageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.delete1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1(id: string, newStageId?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.delete1WithHttpInfo(id, newStageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get1WithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<Stage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.get1(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.get1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get1(id: string, _options?: ConfigurationOptions): Observable<Stage> {
        return this.get1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Stage>) => apiResponse.data));
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list1WithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<StageListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.list1(filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param [filter]
     * @param [pageToken]
     * @param [orderBy]
     * @param [pageSize]
     */
    public list1(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<StageListResponse> {
        return this.list1WithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<StageListResponse>) => apiResponse.data));
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
    public listStageDealsWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<StageDealListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listStageDeals(id, filter, pageToken, orderBy, pageSize, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStageDealsWithHttpInfo(rsp)));
            }));
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
    public listStageDeals(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<StageDealListResponse> {
        return this.listStageDealsWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<StageDealListResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update1WithHttpInfo(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Stage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.update1(id, updateMask, updateStageRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update1(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: ConfigurationOptions): Observable<Stage> {
        return this.update1WithHttpInfo(id, updateMask, updateStageRequest, _options).pipe(map((apiResponse: HttpInfo<Stage>) => apiResponse.data));
    }

}

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class ObservableSubscriptionsApi {
    private requestFactory: SubscriptionsApiRequestFactory;
    private responseProcessor: SubscriptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApiResponseProcessor();
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2: CreateSubscriptionV2, _options?: ConfigurationOptions): Observable<HttpInfo<RestSubscriptionV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubscriptionV2UsingPOST(createSubscriptionV2, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionV2UsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: ConfigurationOptions): Observable<RestSubscriptionV2> {
        return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options).pipe(map((apiResponse: HttpInfo<RestSubscriptionV2>) => apiResponse.data));
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSubscriptionCustomFieldUsingDELETE(customFieldId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteSubscriptionCustomFieldUsingDELETE(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSubscriptionCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModelUsingGET(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ApplyTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTagsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<ApplyTagsResponse> {
        return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<ApplyTagsResponse>) => apiResponse.data));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Tag>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagCategoryUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<Tag> {
        return this.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1WithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Tag>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTagUsingPOST1(createUpdateTagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1(createUpdateTagRequest: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<Tag> {
        return this.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTagCategoryUsingDELETE(tagCategoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagCategoryUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETEWithHttpInfo(tagId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTagUsingDELETE(tagId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETE(tagId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTagUsingDELETEWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGETWithHttpInfo(tagCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetTagCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCategoryUsingGET(tagCategoryId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGET(tagCategoryId: string, _options?: ConfigurationOptions): Observable<GetTagCategoryResponse> {
        return this.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<GetTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1WithHttpInfo(tagId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Tag>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTagUsingGET1(tagId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1(tagId: string, _options?: ConfigurationOptions): Observable<Tag> {
        return this.getTagUsingGET1WithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
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
    public listCompaniesForTagIdUsingGET1WithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTaggedCompaniesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesForTagIdUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTaggedCompaniesResponse> {
        return this.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedCompaniesResponse>) => apiResponse.data));
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
    public listContactsWithTagIdUsingGETWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTaggedContactsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsWithTagIdUsingGETWithHttpInfo(rsp)));
            }));
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
    public listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTaggedContactsResponse> {
        return this.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedContactsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTagCategoriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagCategoriesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTagCategoriesResponse> {
        return this.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTagsResponse> {
        return this.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagsResponse>) => apiResponse.data));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTagsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTagCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagCategoryUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<UpdateTagCategoryResponse> {
        return this.updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagUsingPATCHWithHttpInfo(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTagResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagUsingPATCH(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<UpdateTagResponse> {
        return this.updateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagResponse>) => apiResponse.data));
    }

}

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class ObservableTaskApi {
    private requestFactory: TaskApiRequestFactory;
    private responseProcessor: TaskApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskApiResponseProcessor();
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateCustomFieldResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTaskCustomFieldUsingPOST1(createCustomFieldRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CreateCustomFieldResponse> {
        return this.createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1WithHttpInfo(createTaskRequest?: CreateTaskRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Task>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTaskUsingPOST1(createTaskRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1(createTaskRequest?: CreateTaskRequest, _options?: ConfigurationOptions): Observable<Task> {
        return this.createTaskUsingPOST1WithHttpInfo(createTaskRequest, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTaskCustomFieldUsingDELETE(customFieldId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTaskUsingDELETE1(taskId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Task>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTaskUsingGET1(taskId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: ConfigurationOptions): Observable<Task> {
        return this.getTaskUsingGET1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
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
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTasksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTasksUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: ConfigurationOptions): Observable<ListTasksResponse> {
        return this.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options).pipe(map((apiResponse: HttpInfo<ListTasksResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveTaskModelUsingGET1(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveTaskModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveTaskModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTaskUsingPATCH(taskId, updateMask, createUpdateTaskRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTaskRequest] task
     */
    public updateTaskUsingPATCH(taskId: string, updateMask?: Array<string>, createUpdateTaskRequest?: CreateUpdateTaskRequest, _options?: ConfigurationOptions): Observable<UpdateTaskResponse> {
        return this.updateTaskUsingPATCHWithHttpInfo(taskId, updateMask, createUpdateTaskRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTaskResponse>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsersUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListUsersPaginatedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPaginatedUsersUsingGET(filter, orderBy, pageSize, pageToken, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaginatedUsersUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsersUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListUsersPaginatedResponse> {
        return this.listPaginatedUsersUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListUsersPaginatedResponse>) => apiResponse.data));
    }

}
