import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * Creates a single Affiliate
     * Create an Affiliate
     * @param createAffiliateRequest
     */
    public addAffiliateWithHttpInfo(createAffiliateRequest: CreateAffiliateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addAffiliate(createAffiliateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param createAffiliateRequest
     */
    public addAffiliate(createAffiliateRequest: CreateAffiliateRequest, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.addAffiliateWithHttpInfo(createAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id
     * @param affiliateAddToProgramRequest
     */
    public addAffiliateToProgramWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addAffiliateToProgram(id, affiliateAddToProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateToProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id
     * @param affiliateAddToProgramRequest
     */
    public addAffiliateToProgram(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.addAffiliateToProgramWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param createCommissionProgramRequest
     */
    public addCommissionProgramWithHttpInfo(createCommissionProgramRequest: CreateCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addCommissionProgram(createCommissionProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param createCommissionProgramRequest
     */
    public addCommissionProgram(createCommissionProgramRequest: CreateCommissionProgramRequest, _options?: ConfigurationOptions): Observable<AffiliateCommissionProgramResponse> {
        return this.addCommissionProgramWithHttpInfo(createCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId
     * @param createProductCommissionProgramRequest
     */
    public assignProductCommissionProgramWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest: CreateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignProductCommissionProgram(commissionProgramId, createProductCommissionProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignProductCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId
     * @param createProductCommissionProgramRequest
     */
    public assignProductCommissionProgram(commissionProgramId: string, createProductCommissionProgramRequest: CreateProductCommissionProgramRequest, _options?: ConfigurationOptions): Observable<ProductCommissionProgram> {
        return this.assignProductCommissionProgramWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId
     * @param createSubscriptionCommissionProgramRequest
     */
    public assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest: CreateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgram(commissionProgramId, createSubscriptionCommissionProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignSubscriptionCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId
     * @param createSubscriptionCommissionProgramRequest
     */
    public assignSubscriptionCommissionProgram(commissionProgramId: string, createSubscriptionCommissionProgramRequest: CreateSubscriptionCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SubscriptionCommissionProgram> {
        return this.assignSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest
     */
    public createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAffiliateCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAffiliateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest
     */
    public createAffiliateCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createAffiliateCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId
     * @param createDefaultCommissionProgramRequest
     */
    public createDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest: CreateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDefaultCommissionProgram(commissionProgramId, createDefaultCommissionProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId
     * @param createDefaultCommissionProgramRequest
     */
    public createDefaultCommissionProgram(commissionProgramId: string, createDefaultCommissionProgramRequest: CreateDefaultCommissionProgramRequest, _options?: ConfigurationOptions): Observable<SetDefaultCommissionProgramResponse> {
        return this.createDefaultCommissionProgramWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest
     */
    public createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createRedirectLink(createOrUpdateAffiliateLinkRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRedirectLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrUpdateAffiliateLinkRequest
     */
    public createRedirectLink(createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.createRedirectLinkWithHttpInfo(createOrUpdateAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id
     */
    public deleteAffiliateWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAffiliate(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id
     */
    public deleteAffiliate(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAffiliateWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId
     */
    public deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgram(commissionProgramId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId
     */
    public deleteAffiliateCommissionProgram(commissionProgramId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAffiliateCommissionProgramWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteAffiliateCustomFieldWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAffiliateCustomField(customFieldId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from Affiliate.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteAffiliateCustomField(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAffiliateCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId
     */
    public deleteRedirectLinkWithHttpInfo(redirectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteRedirectLink(redirectId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRedirectLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId
     */
    public deleteRedirectLink(redirectId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteRedirectLinkWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id
     */
    public getAffiliateWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliate(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id
     */
    public getAffiliate(id: string, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.getAffiliateWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId
     */
    public getAffiliateCommissionTotalWithHttpInfo(affiliateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionEarned>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateCommissionTotal(affiliateId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionTotalWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId
     */
    public getAffiliateCommissionTotal(affiliateId: string, _options?: ConfigurationOptions): Observable<AffiliateCommissionEarned> {
        return this.getAffiliateCommissionTotalWithHttpInfo(affiliateId, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionEarned>) => apiResponse.data));
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
    public getAffiliateCommissionsWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateCommissionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateCommissions(affiliateId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionsWithHttpInfo(rsp)));
            }));
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
    public getAffiliateCommissions(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateCommissionsResponse> {
        return this.getAffiliateCommissionsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionsResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAffiliateCustomFields(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCustomFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFields(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.getAffiliateCustomFieldsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId
     */
    public getCommissionProgramWithHttpInfo(commissionProgramId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetRestCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCommissionProgram(commissionProgramId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId
     */
    public getCommissionProgram(commissionProgramId: string, _options?: ConfigurationOptions): Observable<GetRestCommissionProgram> {
        return this.getCommissionProgramWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<GetRestCommissionProgram>) => apiResponse.data));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId
     */
    public getRedirectLinkWithHttpInfo(redirectId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRedirectLink(redirectId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRedirectLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId
     */
    public getRedirectLink(redirectId: string, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.getRedirectLinkWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param affiliateId
     */
    public getReferralsByAffiliateIdWithHttpInfo(affiliateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateReferralsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getReferralsByAffiliateId(affiliateId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReferralsByAffiliateIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all referrals belonging to the given affiliate
     * Retrieve Affiliate Referrals
     * @param affiliateId
     */
    public getReferralsByAffiliateId(affiliateId: string, _options?: ConfigurationOptions): Observable<ListAffiliateReferralsResponse> {
        return this.getReferralsByAffiliateIdWithHttpInfo(affiliateId, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateReferralsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliatesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliate(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliates
     * List Affiliates
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;affiliate_name&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;referral_contact_id&#x60; - (String) &#x60;status&#x60; - (String) &#x60;code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with the value you want to match, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;affiliate_name%3D%3DBob&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;contact_id%3D%3D123%3Bcode%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;code&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliate(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliatesResponse> {
        return this.listAffiliateWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliatesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliateCommissionPrograms(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateCommissionProgramsWithHttpInfo(rsp)));
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
    public listAffiliateCommissionPrograms(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateCommissionProgramsResponse> {
        return this.listAffiliateCommissionProgramsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionProgramsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;affiliate_id&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;date_created&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateLinksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliateLinks(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateLinksWithHttpInfo(rsp)));
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
    public listAffiliateLinks(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateLinksResponse> {
        return this.listAffiliateLinksWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateLinksResponse>) => apiResponse.data));
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
    public listAffiliatePaymentsWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliatePaymentsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAffiliatePayments(affiliateId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliatePaymentsWithHttpInfo(rsp)));
            }));
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
    public listAffiliatePayments(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliatePaymentsResponse> {
        return this.listAffiliatePaymentsWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliatePaymentsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param commissionProgramId
     */
    public listCommissionProgramResourcesWithHttpInfo(commissionProgramId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProgramResourcesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCommissionProgramResources(commissionProgramId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCommissionProgramResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves resources for a commission program
     * Retrieve Commission Program Resources
     * @param commissionProgramId
     */
    public listCommissionProgramResources(commissionProgramId: string, _options?: ConfigurationOptions): Observable<ListProgramResourcesResponse> {
        return this.listCommissionProgramResourcesWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<ListProgramResourcesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAffiliateSummariesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSummaries(filter, orderBy, pageSize, pageToken, _config);
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
     * Retrieves a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) &#x60;affiliate_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;affiliate_id&#x60; - &#x60;amount_earned&#x60; - &#x60;balance&#x60; - &#x60;clawbacks&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummaries(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAffiliateSummariesResponse> {
        return this.listSummariesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateSummariesResponse>) => apiResponse.data));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id
     * @param affiliateRemoveFromProgramRequest
     */
    public removeAffiliateFromProgramWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeAffiliateFromProgram(id, affiliateRemoveFromProgramRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAffiliateFromProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id
     * @param affiliateRemoveFromProgramRequest
     */
    public removeAffiliateFromProgram(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeAffiliateFromProgramWithHttpInfo(id, affiliateRemoveFromProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId
     * @param deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeProductCommissionFromCommissions(commissionId, deleteProgramCommissionRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProductCommissionFromCommissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Product from a Commission Program
     * Remove a Product from a Commission Program
     * @param commissionId
     * @param deleteProgramCommissionRequest
     */
    public removeProductCommissionFromCommissions(commissionId: string, deleteProgramCommissionRequest: DeleteProgramCommissionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeProductCommissionFromCommissionsWithHttpInfo(commissionId, deleteProgramCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId
     * @param deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissions(commissionId, deleteSubscriptionPlanCommissionRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId
     * @param deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissions(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeSubscriptionPlanCommissionFromCommissionsWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id
     * @param updateAffiliateRequest
     */
    public updateAffiliateWithHttpInfo(id: string, updateAffiliateRequest: UpdateAffiliateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestAffiliate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAffiliate(id, updateAffiliateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id
     * @param updateAffiliateRequest
     */
    public updateAffiliate(id: string, updateAffiliateRequest: UpdateAffiliateRequest, _options?: ConfigurationOptions): Observable<RestAffiliate> {
        return this.updateAffiliateWithHttpInfo(id, updateAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAffiliateCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateAffiliateCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId
     * @param updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: 'name,notes,priority', _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCommissionProgram(commissionProgramId, updateCommissionProgramRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update an Affiliate Commission Program
     * @param commissionProgramId
     * @param updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgram(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: 'name,notes,priority', _options?: ConfigurationOptions): Observable<AffiliateCommissionProgramResponse> {
        return this.updateCommissionProgramWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId
     * @param updateDefaultCommissionProgramRequest
     * @param [updateMask]
     */
    public updateDefaultCommissionProgramWithHttpInfo(commissionProgramId: string, updateDefaultCommissionProgramRequest: UpdateDefaultCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDefaultCommissionProgram(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDefaultCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId
     * @param updateDefaultCommissionProgramRequest
     * @param [updateMask]
     */
    public updateDefaultCommissionProgram(commissionProgramId: string, updateDefaultCommissionProgramRequest: UpdateDefaultCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<SetDefaultCommissionProgramResponse> {
        return this.updateDefaultCommissionProgramWithHttpInfo(commissionProgramId, updateDefaultCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId
     * @param updateProductCommissionProgramRequest
     * @param [updateMask]
     */
    public updateProductCommissionProgramWithHttpInfo(commissionProgramId: string, updateProductCommissionProgramRequest: UpdateProductCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductCommissionProgram(commissionProgramId, updateProductCommissionProgramRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId
     * @param updateProductCommissionProgramRequest
     * @param [updateMask]
     */
    public updateProductCommissionProgram(commissionProgramId: string, updateProductCommissionProgramRequest: UpdateProductCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<ProductCommissionProgram> {
        return this.updateProductCommissionProgramWithHttpInfo(commissionProgramId, updateProductCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId
     * @param createOrUpdateAffiliateLinkRequest
     */
    public updateRedirectLinkWithHttpInfo(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AffiliateLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateRedirectLink(redirectId, createOrUpdateAffiliateLinkRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRedirectLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId
     * @param createOrUpdateAffiliateLinkRequest
     */
    public updateRedirectLink(redirectId: string, createOrUpdateAffiliateLinkRequest: CreateOrUpdateAffiliateLinkRequest, _options?: ConfigurationOptions): Observable<AffiliateLink> {
        return this.updateRedirectLinkWithHttpInfo(redirectId, createOrUpdateAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId
     * @param updateSubscriptionCommissionProgramRequest
     * @param [updateMask]
     */
    public updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId: string, updateSubscriptionCommissionProgramRequest: UpdateSubscriptionCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscriptionCommissionProgram(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCommissionProgramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId
     * @param updateSubscriptionCommissionProgramRequest
     * @param [updateMask]
     */
    public updateSubscriptionCommissionProgram(commissionProgramId: string, updateSubscriptionCommissionProgramRequest: UpdateSubscriptionCommissionProgramRequest, updateMask?: Set<string>, _options?: ConfigurationOptions): Observable<SubscriptionCommissionProgram> {
        return this.updateSubscriptionCommissionProgramWithHttpInfo(commissionProgramId, updateSubscriptionCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
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
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param achieveGoalRequest
     */
    public achieveGoalWithHttpInfo(achieveGoalRequest: AchieveGoalRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AchieveGoalResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.achieveGoal(achieveGoalRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.achieveGoalWithHttpInfo(rsp)));
            }));
    }

    /**
     * Achieves a goal in an automation for a contact
     * Achieve an Automation Goal
     * @param achieveGoalRequest
     */
    public achieveGoal(achieveGoalRequest: AchieveGoalRequest, _options?: ConfigurationOptions): Observable<AchieveGoalResponse> {
        return this.achieveGoalWithHttpInfo(achieveGoalRequest, _options).pipe(map((apiResponse: HttpInfo<AchieveGoalResponse>) => apiResponse.data));
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId
     * @param sequenceId
     * @param addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AddToAutomationSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactsToAutomationSequence(automationId, sequenceId, addToAutomationSequenceRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToAutomationSequenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId
     * @param sequenceId
     * @param addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequence(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: ConfigurationOptions): Observable<AddToAutomationSequenceResponse> {
        return this.addContactsToAutomationSequenceWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddToAutomationSequenceResponse>) => apiResponse.data));
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkAssignmentAutomationsCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk updates the categories of one or more automations
     * Bulk update for Automations Categories
     * @param assignAutomationCategoryRequest
     */
    public bulkAssignmentAutomationsCategories(assignAutomationCategoryRequest: AssignAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.bulkAssignmentAutomationsCategoriesWithHttpInfo(assignAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param batchUnpublishAutomationRequest
     */
    public bulkUnpublishAutomationsWithHttpInfo(batchUnpublishAutomationRequest: BatchUnpublishAutomationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bulkUnpublishAutomations(batchUnpublishAutomationRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkUnpublishAutomationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk unpublish one or more automations
     * Bulk unpublish Automations
     * @param batchUnpublishAutomationRequest
     */
    public bulkUnpublishAutomations(batchUnpublishAutomationRequest: BatchUnpublishAutomationRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.bulkUnpublishAutomationsWithHttpInfo(batchUnpublishAutomationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds
     */
    public deleteAutomationWithHttpInfo(automationIds: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAutomation(automationIds, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAutomationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds
     */
    public deleteAutomation(automationIds: Array<number>, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAutomationWithHttpInfo(automationIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId
     */
    public getAutomationWithHttpInfo(automationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Automation>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAutomation(automationId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutomationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId
     */
    public getAutomation(automationId: string, _options?: ConfigurationOptions): Observable<Automation> {
        return this.getAutomationWithHttpInfo(automationId, _options).pipe(map((apiResponse: HttpInfo<Automation>) => apiResponse.data));
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAllAutomationIdsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationIdsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAllAutomationIds(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAutomationIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of automations IDs
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAllAutomationIds(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAutomationIdsResponse> {
        return this.listAllAutomationIdsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAutomationIdsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAutomationsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listAutomations(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAutomationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of automations
     * List Automations
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.  - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;category&#x60; - &#x60;activeContacts&#x60; - &#x60;publishedDate&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAutomations(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListAutomationResponse> {
        return this.listAutomationsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAutomationResponse>) => apiResponse.data));
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param automationId
     * @param unpublishAutomationRequest
     */
    public unpublishAutomationWithHttpInfo(automationId: string, unpublishAutomationRequest: UnpublishAutomationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unpublishAutomation(automationId, unpublishAutomationRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unpublishAutomationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unpublishes a single automation
     * Unpublish an Automation
     * @param automationId
     * @param unpublishAutomationRequest
     */
    public unpublishAutomation(automationId: string, unpublishAutomationRequest: UnpublishAutomationRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.unpublishAutomationWithHttpInfo(automationId, unpublishAutomationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * @param createAutomationCategoryRequest
     */
    public createCategoryWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutomationCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCategory(createAutomationCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest
     */
    public createCategory(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<AutomationCategory> {
        return this.createCategoryWithHttpInfo(createAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids
     */
    public deleteCategoriesWithHttpInfo(ids: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCategories(ids, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids
     */
    public deleteCategories(ids: Array<number>, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCategoriesWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListAutomationCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCategories(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategories(_options?: ConfigurationOptions): Observable<ListAutomationCategoryResponse> {
        return this.listCategoriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListAutomationCategoryResponse>) => apiResponse.data));
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id
     * @param patchAutomationCategoryRequest
     */
    public patchCategoryWithHttpInfo(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AutomationCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.patchCategory(id, patchAutomationCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates part of a single automation category
     * Update automation category
     * @param id
     * @param patchAutomationCategoryRequest
     */
    public patchCategory(id: string, patchAutomationCategoryRequest: PatchAutomationCategoryRequest, _options?: ConfigurationOptions): Observable<AutomationCategory> {
        return this.patchCategoryWithHttpInfo(id, patchAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
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
    public getBusinessProfileWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBusinessProfile(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfile(_options?: ConfigurationOptions): Observable<GetBusinessProfileResponse> {
        return this.getBusinessProfileWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param updateBusinessProfileRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateBusinessProfileWithHttpInfo(updateBusinessProfileRequest: UpdateBusinessProfileRequest, updateMask?: 'name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color', _options?: ConfigurationOptions): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBusinessProfile(updateBusinessProfileRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBusinessProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param updateBusinessProfileRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateBusinessProfile(updateBusinessProfileRequest: UpdateBusinessProfileRequest, updateMask?: 'name,email,website,phone,address,currency_code,business_goals,business_primary_color, business_secondary_color', _options?: ConfigurationOptions): Observable<GetBusinessProfileResponse> {
        return this.updateBusinessProfileWithHttpInfo(updateBusinessProfileRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
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
     * @param campaignId
     * @param sequenceId
     * @param addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AddContactsToSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addContactsToCampaignSequence(campaignId, sequenceId, addContactsToSequenceRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToCampaignSequenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param addContactsToSequenceRequest
     */
    public addContactsToCampaignSequence(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: ConfigurationOptions): Observable<AddContactsToSequenceResponse> {
        return this.addContactsToCampaignSequenceWithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddContactsToSequenceResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId
     */
    public getCampaignWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Campaign>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaign(campaignId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId
     */
    public getCampaign(campaignId: string, _options?: ConfigurationOptions): Observable<Campaign> {
        return this.getCampaignWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<Campaign>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param campaignId
     */
    public getCampaignGoalsWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCampaignGoalsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaignGoals(campaignId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignGoalsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Goals (published) for a Campaign
     * Retrieve a list of Goals for a Campaign
     * @param campaignId
     */
    public getCampaignGoals(campaignId: string, _options?: ConfigurationOptions): Observable<ListCampaignGoalsResponse> {
        return this.getCampaignGoalsWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<ListCampaignGoalsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param campaignId
     */
    public getCampaignSequencesWithHttpInfo(campaignId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCampaignSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCampaignSequences(campaignId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignSequencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Sequences (published) for a Campaign
     * Retrieve a list of Sequences for a Campaign
     * @param campaignId
     */
    public getCampaignSequences(campaignId: string, _options?: ConfigurationOptions): Observable<ListCampaignSequenceResponse> {
        return this.getCampaignSequencesWithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<ListCampaignSequenceResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCampaignsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCampaignsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCampaigns(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name. - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60; - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;publisheddate&#x60; - &#x60;id&#x60; - &#x60;completedContactCount&#x60; - &#x60;activeContacts&#x60; - &#x60;datecreated&#x60; - &#x60;lastupdated&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCampaigns(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListCampaignsResponse> {
        return this.listCampaignsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCampaignsResponse>) => apiResponse.data));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeContactsFromCampaignSequence(campaignId, sequenceId, removeContactsFromSequenceRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactsFromCampaignSequenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId
     * @param sequenceId
     * @param removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequence(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: ConfigurationOptions): Observable<RemoveContactsFromSequenceResponse> {
        return this.removeContactsFromCampaignSequenceWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<RemoveContactsFromSequenceResponse>) => apiResponse.data));
    }

}

import { CategoryDiscountsApiRequestFactory, CategoryDiscountsApiResponseProcessor} from "../apis/CategoryDiscountsApi";
export class ObservableCategoryDiscountsApi {
    private requestFactory: CategoryDiscountsApiRequestFactory;
    private responseProcessor: CategoryDiscountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryDiscountsApiRequestFactory,
        responseProcessor?: CategoryDiscountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryDiscountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryDiscountsApiResponseProcessor();
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param createCategoryDiscountRequest
     */
    public createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CategoryDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCategoryDiscount(createCategoryDiscountRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Category Discount
     * Create a Category Discount
     * @param createCategoryDiscountRequest
     */
    public createCategoryDiscount(createCategoryDiscountRequest: CreateCategoryDiscountRequest, _options?: ConfigurationOptions): Observable<CategoryDiscount> {
        return this.createCategoryDiscountWithHttpInfo(createCategoryDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId
     */
    public deleteCategoryDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCategoryDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoryDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId
     */
    public deleteCategoryDiscount(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCategoryDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId
     */
    public getCategoryDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CategoryDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCategoryDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId
     */
    public getCategoryDiscount(discountId: string, _options?: ConfigurationOptions): Observable<CategoryDiscount> {
        return this.getCategoryDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCategoryDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCategoryDiscounts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoryDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Category Discounts
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) &#x60;product_category_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListCategoryDiscountsResponse> {
        return this.listCategoryDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCategoryDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param discountId
     * @param updateCategoryDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscountWithHttpInfo(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: 'name,description,discount_percent,apply_to_commissions,criteria,product_category_ids', _options?: ConfigurationOptions): Observable<HttpInfo<CategoryDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCategoryDiscount(discountId, updateCategoryDiscountRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCategoryDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Category Discount
     * Update a Category Discount
     * @param discountId
     * @param updateCategoryDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCategoryDiscount(discountId: string, updateCategoryDiscountRequest: UpdateCategoryDiscountRequest, updateMask?: 'name,description,discount_percent,apply_to_commissions,criteria,product_category_ids', _options?: ConfigurationOptions): Observable<CategoryDiscount> {
        return this.updateCategoryDiscountWithHttpInfo(discountId, updateCategoryDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
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
     * @param createCompanyRequest
     */
    public createCompanyWithHttpInfo(createCompanyRequest: CreateCompanyRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCompany(createCompanyRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param createCompanyRequest
     */
    public createCompany(createCompanyRequest: CreateCompanyRequest, _options?: ConfigurationOptions): Observable<Company> {
        return this.createCompanyWithHttpInfo(createCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param createCustomFieldRequest
     */
    public createCompanyCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createCompanyCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCompanyCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Company object
     * Create a Company Custom Field
     * @param createCustomFieldRequest
     */
    public createCompanyCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createCompanyCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId
     */
    public deleteCompanyWithHttpInfo(companyId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCompany(companyId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId
     */
    public deleteCompany(companyId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteCompanyWithHttpInfo(companyId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyWithHttpInfo(companyId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCompany(companyId, fields, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompany(companyId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<Company> {
        return this.getCompanyWithHttpInfo(companyId, fields, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
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
    public listCompaniesWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListCompaniesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCompanies(fields, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesWithHttpInfo(rsp)));
            }));
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
    public listCompanies(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListCompaniesResponse> {
        return this.listCompaniesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCompaniesResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     */
    public retrieveCompanyCustomFieldModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveCompanyCustomFieldModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveCompanyCustomFieldModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Company object
     * Retrieve Company Custom Field Model
     */
    public retrieveCompanyCustomFieldModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveCompanyCustomFieldModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId
     * @param updateCompanyRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyWithHttpInfo(companyId: string, updateCompanyRequest: UpdateCompanyRequest, updateMask?: 'id,company_name,address,phone_number,fax_number,email_address, notes,website,custom_fields,create_time,update_time', _options?: ConfigurationOptions): Observable<HttpInfo<Company>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCompany(companyId, updateCompanyRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId
     * @param updateCompanyRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompany(companyId: string, updateCompanyRequest: UpdateCompanyRequest, updateMask?: 'id,company_name,address,phone_number,fax_number,email_address, notes,website,custom_fields,create_time,update_time', _options?: ConfigurationOptions): Observable<Company> {
        return this.updateCompanyWithHttpInfo(companyId, updateCompanyRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateCompanyCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCompanyCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Company object
     * Update a Company Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCompanyCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateCompanyCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
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
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param createUpdateContactRequest
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [duplicateOption] Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
     */
    public createContactWithHttpInfo(createUpdateContactRequest: CreateUpdateContactRequest, fields?: Array<string>, duplicateOption?: 'Email' | 'EmailAndName' | 'EmailAndNameAndCompany', _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContact(createUpdateContactRequest, fields, duplicateOption, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified. Optionally accepts a `duplicate_option` query parameter which performs duplicate checking by one of the following options: `Email`, `EmailAndName`, `EmailAndNameAndCompany`. If a match is found using the option provided, the existing contact will be updated. If an existing contact was not found using the `duplicate_option` provided, a new contact record will be created. When `duplicate_option` is not specified, a new contact is always created.
     * Create a Contact
     * @param createUpdateContactRequest
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     * @param [duplicateOption] Duplicate check strategy. If provided, performs duplicate checking and updates the existing contact if a match is found.
     */
    public createContact(createUpdateContactRequest: CreateUpdateContactRequest, fields?: Array<string>, duplicateOption?: 'Email' | 'EmailAndName' | 'EmailAndNameAndCompany', _options?: ConfigurationOptions): Observable<Contact> {
        return this.createContactWithHttpInfo(createUpdateContactRequest, fields, duplicateOption, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param createCustomFieldRequest
     */
    public createContactCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContactCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Contact object
     * Create a Contact Custom Field
     * @param createCustomFieldRequest
     */
    public createContactCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createContactCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest
     */
    public createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ContactLinkType>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createContactLinkType(createContactLinkTypeRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactLinkTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new type of Contact Link
     * Create a Contact Link type
     * @param createContactLinkTypeRequest
     */
    public createContactLinkType(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: ConfigurationOptions): Observable<ContactLinkType> {
        return this.createContactLinkTypeWithHttpInfo(createContactLinkTypeRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLinkType>) => apiResponse.data));
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId
     */
    public deleteContactWithHttpInfo(contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteContact(contactId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId
     */
    public deleteContact(contactId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteContactWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContactWithHttpInfo(contactId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContact(contactId, fields, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public getContact(contactId: string, fields?: Array<string>, _options?: ConfigurationOptions): Observable<Contact> {
        return this.getContactWithHttpInfo(contactId, fields, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest
     */
    public linkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ContactLink>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.linkContacts(linkContactsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkContactsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest
     */
    public linkContacts(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<ContactLink> {
        return this.linkContactsWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLink>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactLinkTypesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactLinkTypesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactLinkTypes(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinkTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DexpectedValue&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;max_links&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactLinkTypes(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListContactLinkTypesResponse> {
        return this.listContactLinkTypesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactLinkTypesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId
     */
    public listContactLinksWithHttpInfo(contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactLinksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactLinks(contactId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId
     */
    public listContactLinks(contactId: string, _options?: ConfigurationOptions): Observable<ListContactLinksResponse> {
        return this.listContactLinksWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<ListContactLinksResponse>) => apiResponse.data));
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
    public listContactsWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContacts(fields, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsWithHttpInfo(rsp)));
            }));
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
    public listContacts(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListContactsResponse> {
        return this.listContactsWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactsResponse>) => apiResponse.data));
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
    public listTagsForContactWithHttpInfo(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListContactTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTagsForContact(contactId, filter, pageToken, orderBy, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagsForContactWithHttpInfo(rsp)));
            }));
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
    public listTagsForContact(contactId: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<ListContactTagsResponse> {
        return this.listTagsForContactWithHttpInfo(contactId, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<ListContactTagsResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveContactModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveContactModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveContactModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest
     */
    public unlinkContactsWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.unlinkContacts(linkContactsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkContactsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest
     */
    public unlinkContacts(linkContactsRequest: LinkContactsRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.unlinkContactsWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId
     * @param createUpdateContactRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public updateContactWithHttpInfo(contactId: string, createUpdateContactRequest: CreateUpdateContactRequest, updateMask?: 'addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website', fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Contact>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateContact(contactId, createUpdateContactRequest, updateMask, fields, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId
     * @param createUpdateContactRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website)
     */
    public updateContact(contactId: string, createUpdateContactRequest: CreateUpdateContactRequest, updateMask?: 'addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_time,utm_parameters,website', fields?: Array<string>, _options?: ConfigurationOptions): Observable<Contact> {
        return this.updateContactWithHttpInfo(contactId, createUpdateContactRequest, updateMask, fields, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
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
     * @param createEmailSentRequest
     */
    public createEmailWithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<EmailSentWithContent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEmail(createEmailSentRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest
     */
    public createEmail(createEmailSentRequest: CreateEmailSentRequest, _options?: ConfigurationOptions): Observable<EmailSentWithContent> {
        return this.createEmailWithHttpInfo(createEmailSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param createEmailsSentRequest
     */
    public createEmailsWithHttpInfo(createEmailsSentRequest: CreateEmailsSentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<EmailsSentList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createEmails(createEmailsSentRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param createEmailsSentRequest
     */
    public createEmails(createEmailsSentRequest: CreateEmailsSentRequest, _options?: ConfigurationOptions): Observable<EmailsSentList> {
        return this.createEmailsWithHttpInfo(createEmailsSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailsSentList>) => apiResponse.data));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id
     */
    public deleteEmailWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEmail(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id
     */
    public deleteEmail(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteEmailWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest
     */
    public deleteEmailsWithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DeleteEmailsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteEmails(deleteEmailsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest
     */
    public deleteEmails(deleteEmailsRequest: DeleteEmailsRequest, _options?: ConfigurationOptions): Observable<DeleteEmailsResponse> {
        return this.deleteEmailsWithHttpInfo(deleteEmailsRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteEmailsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id
     */
    public getEmailWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<EmailSentWithContent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEmail(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id
     */
    public getEmail(id: string, _options?: ConfigurationOptions): Observable<EmailSentWithContent> {
        return this.getEmailWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId
     */
    public getEmailTemplateWithHttpInfo(emailTemplateId: string, _options?: ConfigurationOptions): Observable<HttpInfo<EmailTemplate>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEmailTemplate(emailTemplateId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve an email template
     * Retrieve an email template
     * @param emailTemplateId
     */
    public getEmailTemplate(emailTemplateId: string, _options?: ConfigurationOptions): Observable<EmailTemplate> {
        return this.getEmailTemplateWithHttpInfo(emailTemplateId, _options).pipe(map((apiResponse: HttpInfo<EmailTemplate>) => apiResponse.data));
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listEmailsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListEmailsSentResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listEmails(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEmailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of emails that have been sent
     * List Emails
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) email - (String) start_created_time - (String) end_created_time 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listEmails(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListEmailsSentResponse> {
        return this.listEmailsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListEmailsSentResponse>) => apiResponse.data));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param emailSendRequest
     */
    public sendEmailWithHttpInfo(emailSendRequest: EmailSendRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendEmail(emailSendRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param emailSendRequest
     */
    public sendEmail(emailSendRequest: EmailSendRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.sendEmailWithHttpInfo(emailSendRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param emailSendTemplateRequest
     */
    public sendEmailTemplateWithHttpInfo(emailSendTemplateRequest: EmailSendTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.sendEmailTemplate(emailSendTemplateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send an email based on a template
     * Send an email based on a template
     * @param emailSendTemplateRequest
     */
    public sendEmailTemplate(emailSendTemplateRequest: EmailSendTemplateRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.sendEmailTemplateWithHttpInfo(emailSendTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";
export class ObservableEmailAddressApi {
    private requestFactory: EmailAddressApiRequestFactory;
    private responseProcessor: EmailAddressApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressApiRequestFactory,
        responseProcessor?: EmailAddressApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailAddressApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailAddressApiResponseProcessor();
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param email
     */
    public getEmailAddressStatusWithHttpInfo(email: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestEmailAddressStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEmailAddressStatus(email, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailAddressStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the opt-in status for a given Email Address
     * Retrieve an Email Address status
     * @param email
     */
    public getEmailAddressStatus(email: string, _options?: ConfigurationOptions): Observable<RestEmailAddressStatus> {
        return this.getEmailAddressStatusWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddressStatus>) => apiResponse.data));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email
     * @param updateEmailAddress
     */
    public updateEmailAddressOptStatusWithHttpInfo(email: string, updateEmailAddress: UpdateEmailAddress, _options?: ConfigurationOptions): Observable<HttpInfo<RestEmailAddressStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateEmailAddressOptStatus(email, updateEmailAddress, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmailAddressOptStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email
     * @param updateEmailAddress
     */
    public updateEmailAddressOptStatus(email: string, updateEmailAddress: UpdateEmailAddress, _options?: ConfigurationOptions): Observable<RestEmailAddressStatus> {
        return this.updateEmailAddressOptStatusWithHttpInfo(email, updateEmailAddress, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddressStatus>) => apiResponse.data));
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
    public createFileWithHttpInfo(file: HttpFile, fileName: string, isPublic: boolean, fileAssociation: string, file2: HttpFile, fileName2: string, isPublic2: string, fileAssociation2: string, contactId?: string, contactId2?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFile(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFileWithHttpInfo(rsp)));
            }));
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
    public createFile(file: HttpFile, fileName: string, isPublic: boolean, fileAssociation: string, file2: HttpFile, fileName2: string, isPublic2: string, fileAssociation2: string, contactId?: string, contactId2?: string, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.createFileWithHttpInfo(file, fileName, isPublic, fileAssociation, file2, fileName2, isPublic2, fileAssociation2, contactId, contactId2, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId
     */
    public deleteFileWithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFile(fileId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId
     */
    public deleteFile(fileId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFileWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId
     */
    public getFileWithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFile(fileId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId
     */
    public getFile(fileId: string, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.getFileWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId
     */
    public getFileDataWithHttpInfo(fileId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFileData(fileId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId
     */
    public getFileData(fileId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getFileDataWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a list of files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;is_public&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;user_id&#x60; - (FileBoxCategory) &#x60;category&#x60; - (FileBoxType) &#x60;file_box_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;file_name&#x60; - &#x60;updated_time&#x60; - ...  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFilesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFiles(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFilesWithHttpInfo(rsp)));
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
    public listFiles(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListFilesResponse> {
        return this.listFilesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFilesResponse>) => apiResponse.data));
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
    public updateFileWithHttpInfo(fileId: string, updateMask?: string, file?: HttpFile, fileName?: string, isPublic?: boolean, file2?: HttpFile, fileName2?: string, isPublic2?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<FileMetadata>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFile(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFileWithHttpInfo(rsp)));
            }));
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
    public updateFile(fileId: string, updateMask?: string, file?: HttpFile, fileName?: string, isPublic?: boolean, file2?: HttpFile, fileName2?: string, isPublic2?: boolean, _options?: ConfigurationOptions): Observable<FileMetadata> {
        return this.updateFileWithHttpInfo(fileId, updateMask, file, fileName, isPublic, file2, fileName2, isPublic2, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
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
     * @param createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createFreeTrialDiscount(createFreeTrialDiscountRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFreeTrialDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Subscription Free Trial Discount
     * Create a Subscription Free Trial Discount
     * @param createFreeTrialDiscountRequest
     */
    public createFreeTrialDiscount(createFreeTrialDiscountRequest: CreateFreeTrialDiscountRequest, _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.createFreeTrialDiscountWithHttpInfo(createFreeTrialDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId
     */
    public deleteFreeTrialDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteFreeTrialDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFreeTrialDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Subscription Free Trial Discount
     * Delete a Subscription Free Trial Discount
     * @param discountId
     */
    public deleteFreeTrialDiscount(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteFreeTrialDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId
     */
    public getFreeTrialDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getFreeTrialDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFreeTrialDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Subscription Free Trial Discount
     * Retrieve a Subscription Free Trial Discount
     * @param discountId
     */
    public getFreeTrialDiscount(discountId: string, _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.getFreeTrialDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Subscription Free Trial Discounts
     * List all Subscription Free Trial Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Integer) &#x60;free_trial_days&#x60; - (Boolean) &#x60;hide_price&#x60; - (String) &#x60;subscription_plan_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;free_trial_days%3D%3D14&#x60; - &#x60;filter&#x3D;hide_price%3D%3DTrue&#x60; - &#x60;filter&#x3D;subscription_plan_id%3D%3DmySubscriptionPlanId&#x60; - &#x60;filter&#x3D;free_trial_days%3D%3D14%3Bhide_price%3D%3DFalse&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;free_trial_days&#x60; - &#x60;hide_price&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFreeTrialDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFreeTrialDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listFreeTrialDiscounts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFreeTrialDiscountsWithHttpInfo(rsp)));
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
    public listFreeTrialDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListFreeTrialDiscountsResponse> {
        return this.listFreeTrialDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFreeTrialDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId
     * @param updateFreeTrialDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscountWithHttpInfo(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: 'name,description,free_trial_days,hide_price,subscription_plan_id,criteria', _options?: ConfigurationOptions): Observable<HttpInfo<FreeTrialDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateFreeTrialDiscount(discountId, updateFreeTrialDiscountRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFreeTrialDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Free Trial Discount
     * Update a Subscription Free Trial Discount
     * @param discountId
     * @param updateFreeTrialDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFreeTrialDiscount(discountId: string, updateFreeTrialDiscountRequest: UpdateFreeTrialDiscountRequest, updateMask?: 'name,description,free_trial_days,hide_price,subscription_plan_id,criteria', _options?: ConfigurationOptions): Observable<FreeTrialDiscount> {
        return this.updateFreeTrialDiscountWithHttpInfo(discountId, updateFreeTrialDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<FreeTrialDiscount>) => apiResponse.data));
    }

}

import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor} from "../apis/IntegrationsApi";
export class ObservableIntegrationsApi {
    private requestFactory: IntegrationsApiRequestFactory;
    private responseProcessor: IntegrationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IntegrationsApiRequestFactory,
        responseProcessor?: IntegrationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IntegrationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IntegrationsApiResponseProcessor();
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param createIntegrationsWordPressOptInOption
     */
    public addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption: CreateIntegrationsWordPressOptInOption, _options?: ConfigurationOptions): Observable<HttpInfo<WordPressOptInOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addIntegrationsWordPressOptInWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a value to the list of WordPress Opt-In Options Available
     * Add a WordPress Opt-In Option
     * @param createIntegrationsWordPressOptInOption
     */
    public addIntegrationsWordPressOptIn(createIntegrationsWordPressOptInOption: CreateIntegrationsWordPressOptInOption, _options?: ConfigurationOptions): Observable<WordPressOptInOption> {
        return this.addIntegrationsWordPressOptInWithHttpInfo(createIntegrationsWordPressOptInOption, _options).pipe(map((apiResponse: HttpInfo<WordPressOptInOption>) => apiResponse.data));
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param optionKey
     */
    public deleteIntegrationsWordPressOptInWithHttpInfo(optionKey: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteIntegrationsWordPressOptIn(optionKey, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteIntegrationsWordPressOptInWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a value from the list of WordPress Opt-In Options Available
     * Delete a WordPress Opt-In Option
     * @param optionKey
     */
    public deleteIntegrationsWordPressOptIn(optionKey: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteIntegrationsWordPressOptInWithHttpInfo(optionKey, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LeadScoreApiRequestFactory, LeadScoreApiResponseProcessor} from "../apis/LeadScoreApi";
export class ObservableLeadScoreApi {
    private requestFactory: LeadScoreApiRequestFactory;
    private responseProcessor: LeadScoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadScoreApiRequestFactory,
        responseProcessor?: LeadScoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadScoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadScoreApiResponseProcessor();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId
     */
    public getLeadScoreDetailsWithHttpInfo(contactId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadScore>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadScoreDetails(contactId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadScoreDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId
     */
    public getLeadScoreDetails(contactId: string, _options?: ConfigurationOptions): Observable<LeadScore> {
        return this.getLeadScoreDetailsWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<LeadScore>) => apiResponse.data));
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
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest
     */
    public createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceCategory(createUpdateLeadSourceCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Category.
     * Create a Lead Source Category
     * @param createUpdateLeadSourceCategoryRequest
     */
    public createLeadSourceCategory(createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.createLeadSourceCategoryWithHttpInfo(createUpdateLeadSourceCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceCategory(leadSourceCategoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Lead Source Category
     * Delete a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public deleteLeadSourceCategory(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceCategory(leadSourceCategoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Category for a given ID
     * Retrieve a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     */
    public getLeadSourceCategory(leadSourceCategoryId: string, _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.getLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Lead Source Categories
     * List Lead Source Categories
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here is an example:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourceCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceCategoriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourceCategories(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourceCategoriesWithHttpInfo(rsp)));
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
    public listLeadSourceCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceCategoriesResponse> {
        return this.listLeadSourceCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceCategory(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source Category
     * Update a Lead Source Category
     * @param leadSourceCategoryId The ID of a lead source category
     * @param createUpdateLeadSourceCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceCategory(leadSourceCategoryId: string, createUpdateLeadSourceCategoryRequest: CreateUpdateLeadSourceCategoryRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<LeadSourceCategory> {
        return this.updateLeadSourceCategoryWithHttpInfo(leadSourceCategoryId, createUpdateLeadSourceCategoryRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
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
     * @param createLeadSourceExpenseRequest
     */
    public createLeadSourceExpenseWithHttpInfo(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceExpense(leadSourceId, createLeadSourceExpenseRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Expense
     * Create a Lead Source Expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param createLeadSourceExpenseRequest
     */
    public createLeadSourceExpense(leadSourceId: string, createLeadSourceExpenseRequest: CreateLeadSourceExpenseRequest, _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.createLeadSourceExpenseWithHttpInfo(leadSourceId, createLeadSourceExpenseRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceExpense(leadSourceExpenseId, leadSourceId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a lead source expense by ID
     * Delete a lead source expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public deleteLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceExpense(leadSourceExpenseId, leadSourceId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Expense for a given ID
     * Retrieve a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     */
    public getLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.getLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
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
    public listLeadSourceExpensesWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourceExpenses(leadSourceId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourceExpensesWithHttpInfo(rsp)));
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
    public listLeadSourceExpenses(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceExpensesResponse> {
        return this.listLeadSourceExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceExpensesResponse>) => apiResponse.data));
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: 'title,notes,amount,incurred_time', _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceExpense(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a new Lead Source Expense
     * Update a Lead Source Expense
     * @param leadSourceExpenseId The ID of a lead source expense
     * @param leadSourceId The ID of the lead source this expense belongs to
     * @param updateLeadSourceExpenseRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceExpense(leadSourceExpenseId: string, leadSourceId: string, updateLeadSourceExpenseRequest: UpdateLeadSourceExpenseRequest, updateMask?: 'title,notes,amount,incurred_time', _options?: ConfigurationOptions): Observable<LeadSourceExpense> {
        return this.updateLeadSourceExpenseWithHttpInfo(leadSourceExpenseId, leadSourceId, updateLeadSourceExpenseRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceExpense>) => apiResponse.data));
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
     * @param createLeadSourceRecurringExpenseRequest
     */
    public createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSourceRecurringExpense(leadSourceId, createLeadSourceRecurringExpenseRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceRecurringExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source Recurring Expense
     * Create a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param createLeadSourceRecurringExpenseRequest
     */
    public createLeadSourceRecurringExpense(leadSourceId: string, createLeadSourceRecurringExpenseRequest: CreateLeadSourceRecurringExpenseRequest, _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.createLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, createLeadSourceRecurringExpenseRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceRecurringExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a new Lead Source Recurring Expense that belongs to a Lead Source
     * Delete a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public deleteLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceRecurringExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Lead Source Recurring Expense using leadSourceId and leadSourceRecurringExpenseId
     * Retrieve a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     */
    public getLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.getLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
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
    public listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(rsp)));
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
    public listExpensesIncurredFromLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceExpensesResponse> {
        return this.listExpensesIncurredFromLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceExpensesResponse>) => apiResponse.data));
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
    public listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourceRecurringExpensesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSourceRecurringExpenses(leadSourceId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourceRecurringExpensesWithHttpInfo(rsp)));
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
    public listLeadSourceRecurringExpenses(leadSourceId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourceRecurringExpensesResponse> {
        return this.listLeadSourceRecurringExpensesWithHttpInfo(leadSourceId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourceRecurringExpensesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: 'title,notes,amount,start_time,end_time', _options?: ConfigurationOptions): Observable<HttpInfo<LeadSourceRecurringExpense>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSourceRecurringExpense(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceRecurringExpenseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source Recurring Expense
     * Update a Lead Source Recurring Expense
     * @param leadSourceId The ID of the lead source this recurring expense belongs to
     * @param leadSourceRecurringExpenseId The ID of a lead source recurring expense
     * @param leadSourceRecurringExpenseUpdateRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceRecurringExpense(leadSourceId: string, leadSourceRecurringExpenseId: string, leadSourceRecurringExpenseUpdateRequest: LeadSourceRecurringExpenseUpdateRequest, updateMask?: 'title,notes,amount,start_time,end_time', _options?: ConfigurationOptions): Observable<LeadSourceRecurringExpense> {
        return this.updateLeadSourceRecurringExpenseWithHttpInfo(leadSourceId, leadSourceRecurringExpenseId, leadSourceRecurringExpenseUpdateRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSourceRecurringExpense>) => apiResponse.data));
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
     * @param createLeadSourceRequest
     */
    public createLeadSourceWithHttpInfo(createLeadSourceRequest: CreateLeadSourceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createLeadSource(createLeadSourceRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param createLeadSourceRequest
     */
    public createLeadSource(createLeadSourceRequest: CreateLeadSourceRequest, _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.createLeadSourceWithHttpInfo(createLeadSourceRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSourceWithHttpInfo(leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteLeadSource(leadSourceId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Lead Source by ID
     * Delete a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public deleteLeadSource(leadSourceId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteLeadSourceWithHttpInfo(leadSourceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSourceWithHttpInfo(leadSourceId: string, _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLeadSource(leadSourceId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Lead Source by ID
     * Retrieve a Lead Source
     * @param leadSourceId The ID of a lead source
     */
    public getLeadSource(leadSourceId: string, _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.getLeadSourceWithHttpInfo(leadSourceId, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Lead Sources
     * List Lead Sources
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;status&#x60; - (String) &#x60;lead_source_category_id&#x60; - (String) &#x60;vendor&#x60; - (String) &#x60;medium&#x60; - (String) &#x60;start_time&#x60; - (String) &#x60;end_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dexample&#x60; - &#x60;filter&#x3D;start_time%3D%3D2024-12-22T01:00:00.000Z&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;status&#x60; - &#x60;vendor&#x60; - &#x60;medium&#x60; - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListLeadSourcesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listLeadSources(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourcesWithHttpInfo(rsp)));
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
    public listLeadSources(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListLeadSourcesResponse> {
        return this.listLeadSourcesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourcesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSourceWithHttpInfo(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: 'name,description,vendor,medium,message,start_time,end_time,status,lead_source_category_id', _options?: ConfigurationOptions): Observable<HttpInfo<LeadSource>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateLeadSource(leadSourceId, createLeadSourceRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLeadSourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Lead Source with only the values provided in the request
     * Update a Lead Source
     * @param leadSourceId The ID of a lead source
     * @param createLeadSourceRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateLeadSource(leadSourceId: string, createLeadSourceRequest: CreateLeadSourceRequest, updateMask?: 'name,description,vendor,medium,message,start_time,end_time,status,lead_source_category_id', _options?: ConfigurationOptions): Observable<LeadSource> {
        return this.updateLeadSourceWithHttpInfo(leadSourceId, createLeadSourceRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

}

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class ObservableLocaleApi {
    private requestFactory: LocaleApiRequestFactory;
    private responseProcessor: LocaleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocaleApiResponseProcessor();
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param countryCode The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     */
    public getCountryByCodeWithHttpInfo(countryCode: string, _options?: ConfigurationOptions): Observable<HttpInfo<Country>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCountryByCode(countryCode, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCountryByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a country by its code or name
     * Get Country
     * @param countryCode The ISO 3166-2 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     */
    public getCountryByCode(countryCode: string, _options?: ConfigurationOptions): Observable<Country> {
        return this.getCountryByCodeWithHttpInfo(countryCode, _options).pipe(map((apiResponse: HttpInfo<Country>) => apiResponse.data));
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param countryCode The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * @param provinceCode The ISO 3166-2 code or name of the province to be retrieved
     */
    public getProvinceByCodeWithHttpInfo(countryCode: string, provinceCode: string, _options?: ConfigurationOptions): Observable<HttpInfo<Province>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProvinceByCode(countryCode, provinceCode, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProvinceByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a province by its code or name
     * Get Province
     * @param countryCode The ISO 3166-1 alpha-2 code, alpha-3 code, or name of the country to be retrieved
     * @param provinceCode The ISO 3166-2 code or name of the province to be retrieved
     */
    public getProvinceByCode(countryCode: string, provinceCode: string, _options?: ConfigurationOptions): Observable<Province> {
        return this.getProvinceByCodeWithHttpInfo(countryCode, provinceCode, _options).pipe(map((apiResponse: HttpInfo<Province>) => apiResponse.data));
    }

    /**
     * Retrieves a list of countries
     * List Countries
     */
    public listCountriesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListCountriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCountries(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCountriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of countries
     * List Countries
     */
    public listCountries(_options?: ConfigurationOptions): Observable<ListCountriesResponse> {
        return this.listCountriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListCountriesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Provinces
     * @param countryCode
     */
    public listProvincesForCountryWithHttpInfo(countryCode: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProvincesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProvincesForCountry(countryCode, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProvincesForCountryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of provinces for a given country
     * List a Country\'s Provinces
     * @param countryCode
     */
    public listProvincesForCountry(countryCode: string, _options?: ConfigurationOptions): Observable<ListProvincesResponse> {
        return this.listProvincesForCountryWithHttpInfo(countryCode, _options).pipe(map((apiResponse: HttpInfo<ListProvincesResponse>) => apiResponse.data));
    }

}

import { MerchantsApiRequestFactory, MerchantsApiResponseProcessor} from "../apis/MerchantsApi";
export class ObservableMerchantsApi {
    private requestFactory: MerchantsApiRequestFactory;
    private responseProcessor: MerchantsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MerchantsApiRequestFactory,
        responseProcessor?: MerchantsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MerchantsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MerchantsApiResponseProcessor();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListMerchantsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listMerchants(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMerchantsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;name&#x60; - (String) &#x60;type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Bname%3D%3Dabc&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchants(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListMerchantsResponse> {
        return this.listMerchantsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListMerchantsResponse>) => apiResponse.data));
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
     * Creates a new Note.
     * Create a Note
     * @param contactId
     * @param createNoteRequest
     */
    public createNoteWithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Note>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNote(contactId, createNoteRequest, _config);
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
     * Creates a new Note.
     * Create a Note
     * @param contactId
     * @param createNoteRequest
     */
    public createNote(contactId: string, createNoteRequest: CreateNoteRequest, _options?: ConfigurationOptions): Observable<Note> {
        return this.createNoteWithHttpInfo(contactId, createNoteRequest, _options).pipe(map((apiResponse: HttpInfo<Note>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createNoteCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createNoteCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createNoteCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createNoteCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId
     * @param noteId
     */
    public deleteNoteWithHttpInfo(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteNote(contactId, noteId, _config);
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
     * Deletes the specified Note
     * Delete a Note
     * @param contactId
     * @param noteId
     */
    public deleteNote(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteNoteWithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId
     * @param noteId
     */
    public getNoteWithHttpInfo(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetNoteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getNote(contactId, noteId, _config);
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
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId
     * @param noteId
     */
    public getNote(contactId: string, noteId: string, _options?: ConfigurationOptions): Observable<GetNoteResponse> {
        return this.getNoteWithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<GetNoteResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListNoteTemplateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNoteTemplates(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNoteTemplatesWithHttpInfo(rsp)));
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
    public listNoteTemplates(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListNoteTemplateResponse> {
        return this.listNoteTemplatesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNoteTemplateResponse>) => apiResponse.data));
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
    public listNotesWithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListNotesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listNotes(contactId, filter, orderBy, pageSize, pageToken, _config);
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
     * Retrieves a list of Notes
     * List Notes
     * @param contactId
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;assigned_to_user_id&#x60; - (String) &#x60;title&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;assigned_to_user_id%3D%3DUserId&#x60; - &#x60;filter&#x3D;title%3D%3DexpectedTitle&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotes(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListNotesResponse> {
        return this.listNotesWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNotesResponse>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveNoteModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveNoteModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Note Model
     */
    public retrieveNoteModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveNoteModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId
     * @param noteId
     * @param updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: 'contact_id, text, title, type, user_id', _options?: ConfigurationOptions): Observable<HttpInfo<UpdateNoteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateNote(contactId, noteId, updateNoteRequest, updateMask, _config);
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
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId
     * @param noteId
     * @param updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNote(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: 'contact_id, text, title, type, user_id', _options?: ConfigurationOptions): Observable<UpdateNoteResponse> {
        return this.updateNoteWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateNoteResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateNotesCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNotesCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateNotesCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
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
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param createOpportunityRequest
     */
    public createOpportunityWithHttpInfo(createOpportunityRequest: CreateOpportunityRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunity(createOpportunityRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param createOpportunityRequest
     */
    public createOpportunity(createOpportunityRequest: CreateOpportunityRequest, _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.createOpportunityWithHttpInfo(createOpportunityRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest
     */
    public createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunityCustomFields(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityCustomFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Opportunity object
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest
     */
    public createOpportunityCustomFields(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createOpportunityCustomFieldsWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param createOpportunityStageRequest
     */
    public createOpportunityStageWithHttpInfo(createOpportunityStageRequest: CreateOpportunityStageRequest, _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpportunityStage(createOpportunityStageRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityStageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param createOpportunityStageRequest
     */
    public createOpportunityStage(createOpportunityStageRequest: CreateOpportunityStageRequest, _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.createOpportunityStageWithHttpInfo(createOpportunityStageRequest, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId
     */
    public deleteOpportunityWithHttpInfo(opportunityId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOpportunity(opportunityId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId
     */
    public deleteOpportunity(opportunityId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOpportunityWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId
     */
    public deleteOpportunityStageWithHttpInfo(stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOpportunityStage(stageId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityStageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId
     */
    public deleteOpportunityStage(stageId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOpportunityStageWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId
     */
    public getOpportunityWithHttpInfo(opportunityId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOpportunity(opportunityId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId
     */
    public getOpportunity(opportunityId: string, _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.getOpportunityWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId
     */
    public getOpportunityStageWithHttpInfo(stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOpportunityStage(stageId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityStageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId
     */
    public getOpportunityStage(stageId: string, _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.getOpportunityStageWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
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
    public listOpportunitiesWithHttpInfo(fields?: Set<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOpportunitiesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOpportunities(fields, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunitiesWithHttpInfo(rsp)));
            }));
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
    public listOpportunities(fields?: Set<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOpportunitiesResponse> {
        return this.listOpportunitiesWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunitiesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - &#x60;stage_order&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOpportunityStagesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOpportunityStages(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunityStagesWithHttpInfo(rsp)));
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
    public listOpportunityStages(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOpportunityStagesResponse> {
        return this.listOpportunityStagesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunityStagesResponse>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId
     * @param updateOpportunityRequestV2
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityWithHttpInfo(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: 'opportunity_title,next_action_time,next_action_notes,opportunity_notes, estimated_close_time,include_in_forecast,projected_revenue_low,projected_revenue_high, contact_id,stage_id,user_id,custom_fields,affiliate_id', _options?: ConfigurationOptions): Observable<HttpInfo<RestV2Opportunity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunity(opportunityId, updateOpportunityRequestV2, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId
     * @param updateOpportunityRequestV2
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunity(opportunityId: string, updateOpportunityRequestV2: UpdateOpportunityRequestV2, updateMask?: 'opportunity_title,next_action_time,next_action_notes,opportunity_notes, estimated_close_time,include_in_forecast,projected_revenue_low,projected_revenue_high, contact_id,stage_id,user_id,custom_fields,affiliate_id', _options?: ConfigurationOptions): Observable<RestV2Opportunity> {
        return this.updateOpportunityWithHttpInfo(opportunityId, updateOpportunityRequestV2, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunityCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateOpportunityCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId
     * @param updateOpportunityStageRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: 'name,order,target_number_days,probability,checklist_items', _options?: ConfigurationOptions): Observable<HttpInfo<RestOpportunityStage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOpportunityStage(stageId, updateOpportunityStageRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityStageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId
     * @param updateOpportunityStageRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStage(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: 'name,order,target_number_days,probability,checklist_items', _options?: ConfigurationOptions): Observable<RestOpportunityStage> {
        return this.updateOpportunityStageWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
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
     * @param createOrderTotalDiscountRequest
     */
    public createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderTotalDiscount(createOrderTotalDiscountRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderTotalDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest
     */
    public createOrderTotalDiscount(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.createOrderTotalDiscountWithHttpInfo(createOrderTotalDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId
     */
    public deleteOrderTotalDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrderTotalDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderTotalDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId
     */
    public deleteOrderTotalDiscount(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderTotalDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId
     */
    public getOrderTotalDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrderTotalDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderTotalDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId
     */
    public getOrderTotalDiscount(discountId: string, _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.getOrderTotalDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrderTotalDiscounts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderTotalDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountStrategy) &#x60;discount_strategy&#x60;: GROSS or NET - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_strategy%3D%3DGROSS&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_strategy&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOrderTotalDiscountsResponse> {
        return this.listOrderTotalDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderTotalDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId
     * @param updateOrderTotalDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,discount_strategy,criteria', _options?: ConfigurationOptions): Observable<HttpInfo<OrderTotalDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrderTotalDiscount(discountId, updateOrderTotalDiscountRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderTotalDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId
     * @param updateOrderTotalDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscount(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,discount_strategy,criteria', _options?: ConfigurationOptions): Observable<OrderTotalDiscount> {
        return this.updateOrderTotalDiscountWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
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
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param orderId
     * @param orderItemId
     * @param applyCommissionRequest
     */
    public applyCommissionOnOrderItemsWithHttpInfo(orderId: string, orderItemId: string, applyCommissionRequest: ApplyCommissionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyCommissionOnOrderItems(orderId, orderItemId, applyCommissionRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyCommissionOnOrderItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies commission to an order item on an existing order.
     * Apply Commission to an Order Item
     * @param orderId
     * @param orderItemId
     * @param applyCommissionRequest
     */
    public applyCommissionOnOrderItems(orderId: string, orderItemId: string, applyCommissionRequest: ApplyCommissionRequest, _options?: ConfigurationOptions): Observable<OrderItem> {
        return this.applyCommissionOnOrderItemsWithHttpInfo(orderId, orderItemId, applyCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<OrderItem>) => apiResponse.data));
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param orderId
     */
    public applyTaxWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyTax(orderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTaxWithHttpInfo(rsp)));
            }));
    }

    /**
     * Calculate taxes for a single Order for a given order id
     * Apply Taxes on an Order
     * @param orderId
     */
    public applyTax(orderId: string, _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.applyTaxWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public attachFileToOrderWithHttpInfo(orderId: string, fileOperationRequest: FileOperationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.attachFileToOrder(orderId, fileOperationRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachFileToOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attaches an uploaded File to an Order Invoice
     * Attach a File to an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public attachFileToOrder(orderId: string, fileOperationRequest: FileOperationRequest, _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.attachFileToOrderWithHttpInfo(orderId, fileOperationRequest, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param restCreateOrderRequest
     */
    public createOrderWithHttpInfo(restCreateOrderRequest: RestCreateOrderRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrder(restCreateOrderRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a one time Order with Order items
     * Create an Order
     * @param restCreateOrderRequest
     */
    public createOrder(restCreateOrderRequest: RestCreateOrderRequest, _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.createOrderWithHttpInfo(restCreateOrderRequest, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest
     */
    public createOrderCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Order object
     * Create an Order Custom Field
     * @param createCustomFieldRequest
     */
    public createOrderCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createOrderCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param orderId
     * @param createOrderItemRequest
     */
    public createOrderItemWithHttpInfo(orderId: string, createOrderItemRequest: CreateOrderItemRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOrderItem(orderId, createOrderItemRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order item on an existing order
     * Create an Order Item
     * @param orderId
     * @param createOrderItemRequest
     */
    public createOrderItem(orderId: string, createOrderItemRequest: CreateOrderItemRequest, _options?: ConfigurationOptions): Observable<OrderItem> {
        return this.createOrderItemWithHttpInfo(orderId, createOrderItemRequest, _options).pipe(map((apiResponse: HttpInfo<OrderItem>) => apiResponse.data));
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param orderId
     * @param restCreatePaymentRequest
     */
    public createPaymentForAnOrderWithHttpInfo(orderId: string, restCreatePaymentRequest: RestCreatePaymentRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PaymentResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPaymentForAnOrder(orderId, restCreatePaymentRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentForAnOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a payment record. Alternatively, adds a record of historical or external payment of cash or credit card
     * Create a Payment
     * @param orderId
     * @param restCreatePaymentRequest
     */
    public createPaymentForAnOrder(orderId: string, restCreatePaymentRequest: RestCreatePaymentRequest, _options?: ConfigurationOptions): Observable<PaymentResult> {
        return this.createPaymentForAnOrderWithHttpInfo(orderId, restCreatePaymentRequest, _options).pipe(map((apiResponse: HttpInfo<PaymentResult>) => apiResponse.data));
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param orderId
     */
    public deleteOrderWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrder(orderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an Order<br/> Note: The Order must not have any transactions recorded to be available for deletion. 
     * Delete an Order
     * @param orderId
     */
    public deleteOrder(orderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId
     */
    public deleteOrderCustomFieldWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrderCustomField(customFieldId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from the Order object
     * Delete an Order Custom Field
     * @param customFieldId
     */
    public deleteOrderCustomField(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param orderId
     * @param orderItemId
     */
    public deleteOrderItemWithHttpInfo(orderId: string, orderItemId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteOrderItem(orderId, orderItemId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an order item on an existing order
     * Delete an Order Item
     * @param orderId
     * @param orderItemId
     */
    public deleteOrderItem(orderId: string, orderItemId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteOrderItemWithHttpInfo(orderId, orderItemId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public detachFileFromOrderWithHttpInfo(orderId: string, fileOperationRequest: FileOperationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.detachFileFromOrder(orderId, fileOperationRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detachFileFromOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detaches a File from an Order Invoice
     * Detach a File from an Order Invoice
     * @param orderId
     * @param fileOperationRequest
     */
    public detachFileFromOrder(orderId: string, fileOperationRequest: FileOperationRequest, _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.detachFileFromOrderWithHttpInfo(orderId, fileOperationRequest, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId
     */
    public getOrderWithHttpInfo(orderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getOrder(orderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId
     */
    public getOrder(orderId: string, _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.getOrderWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
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
    public listOrderPaymentsWithHttpInfo(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOrderPaymentsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrderPayments(orderId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderPaymentsWithHttpInfo(rsp)));
            }));
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
    public listOrderPayments(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOrderPaymentsResponse> {
        return this.listOrderPaymentsWithHttpInfo(orderId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderPaymentsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_city&#x60; - (String) &#x60;shipping_region&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_city%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region%3D%3DAZ&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DUS&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListOrders>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listOrders(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;invoice_xid&#x60; - (Boolean) &#x60;paid&#x60; - (String) &#x60;created_since_time&#x60; - (String) &#x60;created_until_time&#x60; - (String) &#x60;title&#x60; - (String) &#x60;order_type&#x60; (Allowed values: &#x60;ONLINE&#x60;, &#x60;OFFLINE&#x60;) - (String) &#x60;shipping_city&#x60; - (String) &#x60;shipping_region&#x60; - (String) &#x60;shipping_postal_code&#x60; - (String) &#x60;shipping_country_code&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;invoice_xid%3D%3Df411a79c-9a92-4960-91d9-656f910a25e8&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; - &#x60;filter&#x3D;title%3D%3DOrder&#x60; - &#x60;filter&#x3D;order_type%3D%3DONLINE&#x60; - &#x60;filter&#x3D;shipping_city%3D%3DPhoenix&#x60; - &#x60;filter&#x3D;shipping_region%3D%3DAZ&#x60; - &#x60;filter&#x3D;shipping_postal_code%3D%3D85001&#x60; - &#x60;filter&#x3D;shipping_country_code%3D%3DUS&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;order_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrders(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListOrders> {
        return this.listOrdersWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrders>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveOrderCustomFieldModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Order object
     * Retrieve Order Custom Field Model
     */
    public retrieveOrderCustomFieldModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveOrderCustomFieldModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId
     * @param updateOrderRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderWithHttpInfo(orderId: string, updateOrderRequest: UpdateOrderRequest, updateMask?: 'contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan, custom_fields', _options?: ConfigurationOptions): Observable<HttpInfo<OrderV2>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrder(orderId, updateOrderRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId
     * @param updateOrderRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrder(orderId: string, updateOrderRequest: UpdateOrderRequest, updateMask?: 'contact_id,order_items,order_title,order_time,order_type,promo_codes, lead_affiliate_id,sales_affiliate_id,shipping_address,notes,terms,payment_plan, custom_fields', _options?: ConfigurationOptions): Observable<OrderV2> {
        return this.updateOrderWithHttpInfo(orderId, updateOrderRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderV2>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrderCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object
     * Update an Order Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateOrderCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param orderId
     * @param orderItemId
     * @param updateOrderItemRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderItemWithHttpInfo(orderId: string, orderItemId: string, updateOrderItemRequest: UpdateOrderItemRequest, updateMask?: 'name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description', _options?: ConfigurationOptions): Observable<HttpInfo<OrderItem>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateOrderItem(orderId, orderItemId, updateOrderItemRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order Item
     * Update an Order Item
     * @param orderId
     * @param orderItemId
     * @param updateOrderItemRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderItem(orderId: string, orderItemId: string, updateOrderItemRequest: UpdateOrderItemRequest, updateMask?: 'name,description,notes,quantity,price_per_unit,cost_per_unit, product_id,subscription_plan_id,subscription_plan_description', _options?: ConfigurationOptions): Observable<OrderItem> {
        return this.updateOrderItemWithHttpInfo(orderId, orderItemId, updateOrderItemRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderItem>) => apiResponse.data));
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
     * @param createPaymentMethodConfigRequest
     */
    public createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PaymentMethodConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPaymentMethodConfig(createPaymentMethodConfigRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentMethodConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest
     */
    public createPaymentMethodConfig(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: ConfigurationOptions): Observable<PaymentMethodConfig> {
        return this.createPaymentMethodConfigWithHttpInfo(createPaymentMethodConfigRequest, _options).pipe(map((apiResponse: HttpInfo<PaymentMethodConfig>) => apiResponse.data));
    }

}

import { PaymentMethodsApiRequestFactory, PaymentMethodsApiResponseProcessor} from "../apis/PaymentMethodsApi";
export class ObservablePaymentMethodsApi {
    private requestFactory: PaymentMethodsApiRequestFactory;
    private responseProcessor: PaymentMethodsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodsApiRequestFactory,
        responseProcessor?: PaymentMethodsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentMethodsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentMethodsApiResponseProcessor();
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deactivated.
     */
    public deactivatePaymentMethodWithHttpInfo(contactId: string, paymentMethodId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deactivatePaymentMethod(contactId, paymentMethodId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deactivatePaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deactivate the specified payment method
     * Deactivate a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deactivated.
     */
    public deactivatePaymentMethod(contactId: string, paymentMethodId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deactivatePaymentMethodWithHttpInfo(contactId, paymentMethodId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deleted.
     */
    public deletePaymentMethodWithHttpInfo(contactId: string, paymentMethodId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deletePaymentMethod(contactId, paymentMethodId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePaymentMethodWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified payment method
     * Delete a Payment Method
     * @param contactId ID of the contact to which the payment method belongs.
     * @param paymentMethodId ID of the payment method to be deleted.
     */
    public deletePaymentMethod(contactId: string, paymentMethodId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deletePaymentMethodWithHttpInfo(contactId, paymentMethodId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public listPaymentMethodsWithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListPaymentMethodsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPaymentMethods(contactId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentMethodsWithHttpInfo(rsp)));
            }));
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
    public listPaymentMethods(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListPaymentMethodsResponse> {
        return this.listPaymentMethodsWithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListPaymentMethodsResponse>) => apiResponse.data));
    }

}

import { ProductCategoriesApiRequestFactory, ProductCategoriesApiResponseProcessor} from "../apis/ProductCategoriesApi";
export class ObservableProductCategoriesApi {
    private requestFactory: ProductCategoriesApiRequestFactory;
    private responseProcessor: ProductCategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductCategoriesApiRequestFactory,
        responseProcessor?: ProductCategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductCategoriesApiResponseProcessor();
    }

    /**
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param categoryId
     * @param assignProductsRequest
     */
    public assignProductsToCategoryWithHttpInfo(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.assignProductsToCategory(categoryId, assignProductsRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignProductsToCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the list of products assigned to a Product Category. **Note:** The full list of product IDs that should remain assigned must be provided; any IDs omitted are removed automatically.
     * Assign Products to a Product Category
     * @param categoryId
     * @param assignProductsRequest
     */
    public assignProductsToCategory(categoryId: string, assignProductsRequest: AssignProductsRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.assignProductsToCategoryWithHttpInfo(categoryId, assignProductsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param categoryId
     * @param file File to upload
     */
    public createImageFileWithHttpInfo(categoryId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createImageFile(categoryId, file, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createImageFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the product category image file and uploads it to the specified product category
     * Create the product category image file
     * @param categoryId
     * @param file File to upload
     */
    public createImageFile(categoryId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<void> {
        return this.createImageFileWithHttpInfo(categoryId, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param createProductCategoryRequest
     */
    public createProductCategoryWithHttpInfo(createProductCategoryRequest: CreateProductCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductCategory(createProductCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Product Category
     * Create a Product Category
     * @param createProductCategoryRequest
     */
    public createProductCategory(createProductCategoryRequest: CreateProductCategoryRequest, _options?: ConfigurationOptions): Observable<ProductCategory> {
        return this.createProductCategoryWithHttpInfo(createProductCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCategory>) => apiResponse.data));
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId
     */
    public deleteImageFileWithHttpInfo(categoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteImageFile(categoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteImageFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the image from the specified product category
     * Delete the image from a product category
     * @param categoryId
     */
    public deleteImageFile(categoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteImageFileWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId
     */
    public deleteProductCategoryWithHttpInfo(categoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductCategory(categoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Product Category, its sub-categories, and removes products from it
     * Delete a Product Category
     * @param categoryId
     */
    public deleteProductCategory(categoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId
     */
    public getProductCategoryWithHttpInfo(categoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductCategory(categoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product Category
     * Get a Product Category
     * @param categoryId
     */
    public getProductCategory(categoryId: string, _options?: ConfigurationOptions): Observable<ProductCategory> {
        return this.getProductCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<ProductCategory>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductCategoriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductCategories(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Product Categories
     * List all Product Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D29&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductCategoriesResponse> {
        return this.listProductCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param categoryId
     * @param updateProductCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategoryWithHttpInfo(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: 'name,display_order_index,parent_category_id', _options?: ConfigurationOptions): Observable<HttpInfo<ProductCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductCategory(categoryId, updateProductCategoryRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a single Product Category
     * Update a Product Category
     * @param categoryId
     * @param updateProductCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductCategory(categoryId: string, updateProductCategoryRequest: UpdateProductCategoryRequest, updateMask?: 'name,display_order_index,parent_category_id', _options?: ConfigurationOptions): Observable<ProductCategory> {
        return this.updateProductCategoryWithHttpInfo(categoryId, updateProductCategoryRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductCategory>) => apiResponse.data));
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
     * @param createProductDiscountRequest
     */
    public createProductDiscountWithHttpInfo(createProductDiscountRequest: CreateProductDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductDiscount(createProductDiscountRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Product Discount
     * Create a Product Discount
     * @param createProductDiscountRequest
     */
    public createProductDiscount(createProductDiscountRequest: CreateProductDiscountRequest, _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.createProductDiscountWithHttpInfo(createProductDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId
     */
    public deleteProductDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Product Discount
     * Delete a Product Discount
     * @param discountId
     */
    public deleteProductDiscount(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId
     */
    public getProductDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Product Discount
     * Retrieve a Product Discount
     * @param discountId
     */
    public getProductDiscount(discountId: string, _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.getProductDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductDiscounts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Product Discounts
     * List all Product Discounts
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) &#x60;apply_to_commissions&#x60; - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60; - (String) &#x60;product_id&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;apply_to_commissions%3D%3Dtrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D10.0&#x60; - &#x60;filter&#x3D;product_id%3D%3D2&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D10.0&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;apply_to_commissions&#x60; - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60; - &#x60;product_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductDiscountsResponse> {
        return this.listProductDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId
     * @param updateProductDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscountWithHttpInfo(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,product_id,criteria', _options?: ConfigurationOptions): Observable<HttpInfo<ProductDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductDiscount(discountId, updateProductDiscountRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Discount
     * Update a Product Discount
     * @param discountId
     * @param updateProductDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductDiscount(discountId: string, updateProductDiscountRequest: UpdateProductDiscountRequest, updateMask?: 'name,description,apply_to_commissions,discount_type,discount_value,product_id,criteria', _options?: ConfigurationOptions): Observable<ProductDiscount> {
        return this.updateProductDiscountWithHttpInfo(discountId, updateProductDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductDiscount>) => apiResponse.data));
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
     * @param id
     * @param addProductInterestRequest
     */
    public addProductInterestWithHttpInfo(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addProductInterest(id, addProductInterestRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProductInterestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Product Interest in an existing Bundle.
     * Create a Product Interest in an existing Bundle
     * @param id
     * @param addProductInterestRequest
     */
    public addProductInterest(id: string, addProductInterestRequest: AddProductInterestRequest, _options?: ConfigurationOptions): Observable<ProductInterest> {
        return this.addProductInterestWithHttpInfo(id, addProductInterestRequest, _options).pipe(map((apiResponse: HttpInfo<ProductInterest>) => apiResponse.data));
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest
     */
    public createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductInterestBundle(createProductInterestBundleRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductInterestBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Product Interest Bundle.
     * Create a Product Interest Bundle
     * @param createProductInterestBundleRequest
     */
    public createProductInterestBundle(createProductInterestBundleRequest: CreateProductInterestBundleRequest, _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.createProductInterestBundleWithHttpInfo(createProductInterestBundleRequest, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id
     */
    public deleteProductInterestBundleWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductInterestBundle(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductInterestBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing Product Interest Bundle.
     * Delete a Product Interest Bundle
     * @param id
     */
    public deleteProductInterestBundle(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductInterestBundleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id
     */
    public getProductInterestBundleWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductInterestBundle(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductInterestBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product Interest Bundle.
     * Get a Product Interest Bundle
     * @param id
     */
    public getProductInterestBundle(id: string, _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.getProductInterestBundleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Product Interest Bundles
     * List Product Interest Bundles
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60; 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductInterestBundlesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductInterestBundleResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductInterestBundles(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductInterestBundlesWithHttpInfo(rsp)));
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
    public listProductInterestBundles(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductInterestBundleResponse> {
        return this.listProductInterestBundlesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductInterestBundleResponse>) => apiResponse.data));
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id
     * @param interestId
     */
    public removeProductInterestWithHttpInfo(id: string, interestId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeProductInterest(id, interestId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProductInterestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an existing Product Interest from an existing Bundle.
     * Delete a Product Interest from an existing Bundle
     * @param id
     * @param interestId
     */
    public removeProductInterest(id: string, interestId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.removeProductInterestWithHttpInfo(id, interestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id
     * @param interestId
     * @param updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestWithHttpInfo(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: 'quantity,price,discount_percent', _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterest>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductInterest(id, interestId, updateProductInterestRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductInterestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing Product Interest in an existing Bundle.
     * Update a Product Interest in an existing Bundle
     * @param id
     * @param interestId
     * @param updateProductInterestRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterest(id: string, interestId: string, updateProductInterestRequest: UpdateProductInterestRequest, updateMask?: 'quantity,price,discount_percent', _options?: ConfigurationOptions): Observable<ProductInterest> {
        return this.updateProductInterestWithHttpInfo(id, interestId, updateProductInterestRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductInterest>) => apiResponse.data));
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id
     * @param updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundleWithHttpInfo(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<HttpInfo<ProductInterestBundle>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductInterestBundle(id, updateProductInterestBundleRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductInterestBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing Product Interest Bundle.
     * Update a Product Interest Bundle
     * @param id
     * @param updateProductInterestBundleRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductInterestBundle(id: string, updateProductInterestBundleRequest: UpdateProductInterestBundleRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<ProductInterestBundle> {
        return this.updateProductInterestBundleWithHttpInfo(id, updateProductInterestBundleRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductInterestBundle>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param createProductOptionListOption
     */
    public addProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, createProductOptionListOption: Array<CreateProductOptionListOption>, _options?: ConfigurationOptions): Observable<HttpInfo<ProductOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.addProductOptionListOptionValue(productId, productOptionId, createProductOptionListOption, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProductOptionListOptionValueWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds product option values to a product option of type LIST
     * Add a Product Option List Option Value
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param createProductOptionListOption
     */
    public addProductOptionListOptionValue(productId: string, productOptionId: string, createProductOptionListOption: Array<CreateProductOptionListOption>, _options?: ConfigurationOptions): Observable<ProductOption> {
        return this.addProductOptionListOptionValueWithHttpInfo(productId, productOptionId, createProductOptionListOption, _options).pipe(map((apiResponse: HttpInfo<ProductOption>) => apiResponse.data));
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequestDetail
     */
    public adjustInventoryWithHttpInfo(productId: string, updateProductInventoryRequestDetail: UpdateProductInventoryRequestDetail, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2ProductDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.adjustInventory(productId, updateProductInventoryRequestDetail, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adjustInventoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequestDetail
     */
    public adjustInventory(productId: string, updateProductInventoryRequestDetail: UpdateProductInventoryRequestDetail, _options?: ConfigurationOptions): Observable<RestV2ProductDetail> {
        return this.adjustInventoryWithHttpInfo(productId, updateProductInventoryRequestDetail, _options).pipe(map((apiResponse: HttpInfo<RestV2ProductDetail>) => apiResponse.data));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequestDetail
     */
    public createProductWithHttpInfo(createProductRequestDetail: CreateProductRequestDetail, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2ProductDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProduct(createProductRequestDetail, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequestDetail
     */
    public createProduct(createProductRequestDetail: CreateProductRequestDetail, _options?: ConfigurationOptions): Observable<RestV2ProductDetail> {
        return this.createProductWithHttpInfo(createProductRequestDetail, _options).pipe(map((apiResponse: HttpInfo<RestV2ProductDetail>) => apiResponse.data));
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param productId product_id
     * @param file File to upload
     */
    public createProductImageWithHttpInfo(productId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductImage(productId, file, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductImageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the Product Image file and uploads it to the specified Product
     * Create the Product Image
     * @param productId product_id
     * @param file File to upload
     */
    public createProductImage(productId: string, file: HttpFile, _options?: ConfigurationOptions): Observable<void> {
        return this.createProductImageWithHttpInfo(productId, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new product option
     * Create a Product Option
     * @param productId product_id
     * @param createProductOptionRequest
     */
    public createProductOptionWithHttpInfo(productId: string, createProductOptionRequest: CreateProductOptionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ProductOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createProductOption(productId, createProductOptionRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new product option
     * Create a Product Option
     * @param productId product_id
     * @param createProductOptionRequest
     */
    public createProductOption(productId: string, createProductOptionRequest: CreateProductOptionRequest, _options?: ConfigurationOptions): Observable<ProductOption> {
        return this.createProductOptionWithHttpInfo(productId, createProductOptionRequest, _options).pipe(map((apiResponse: HttpInfo<ProductOption>) => apiResponse.data));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductWithHttpInfo(productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProduct(productId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProduct(productId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param productId product_id
     */
    public deleteProductImageWithHttpInfo(productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductImage(productId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductImageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the Product Image from the specified Product
     * Delete the Product Image
     * @param productId product_id
     */
    public deleteProductImage(productId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductImageWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single product option
     * Delete a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public deleteProductOptionWithHttpInfo(productId: string, productOptionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductOption(productId, productOptionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single product option
     * Delete a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public deleteProductOption(productId: string, productOptionId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductOptionWithHttpInfo(productId, productOptionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     */
    public deleteProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, itemId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteProductOptionListOptionValue(productId, productOptionId, itemId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductOptionListOptionValueWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single option value in a Product Option of type LIST
     * Delete a Product Option List Item
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param itemId item_id
     */
    public deleteProductOptionListOptionValue(productId: string, productOptionId: string, itemId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductWithHttpInfo(productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<RestV2ProductDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProduct(productId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProduct(productId: string, _options?: ConfigurationOptions): Observable<RestV2ProductDetail> {
        return this.getProductWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<RestV2ProductDetail>) => apiResponse.data));
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public getProductOptionWithHttpInfo(productId: string, productOptionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ProductOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getProductOption(productId, productOptionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Product Option
     * Get Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     */
    public getProductOption(productId: string, productOptionId: string, _options?: ConfigurationOptions): Observable<ProductOption> {
        return this.getProductOptionWithHttpInfo(productId, productOptionId, _options).pipe(map((apiResponse: HttpInfo<ProductOption>) => apiResponse.data));
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param productId product_id
     */
    public listProductOptionsWithHttpInfo(productId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductOptionsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProductOptions(productId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all options of a Product
     * List Product Options
     * @param productId product_id
     */
    public listProductOptions(productId: string, _options?: ConfigurationOptions): Observable<ListProductOptionsResponse> {
        return this.listProductOptionsWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<ListProductOptionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListProductsResponseList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listProducts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;sku&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;sku%3D%3Dtestsearch&#x60; - &#x60;filter&#x3D;name%3D%3Dtestsearch%3Bsku%3D%3Dtestsearch&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProducts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListProductsResponseList> {
        return this.listProductsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductsResponseList>) => apiResponse.data));
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductWithHttpInfo(productId: string, updateProductRequestDetail: UpdateProductRequestDetail, updateMask?: 'active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications', _options?: ConfigurationOptions): Observable<HttpInfo<RestV2ProductDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProduct(productId, updateProductRequestDetail, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a product
     * Update a Product
     * @param productId product_id
     * @param updateProductRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProduct(productId: string, updateProductRequestDetail: UpdateProductRequestDetail, updateMask?: 'active,name,description,price,sku,shippable,short_description,subscription_only, storefront_hidden,weight,taxable,country_taxable,city_taxable,state_taxable, inventory_limit,out_of_stock_enabled,email_for_inventory_notifications', _options?: ConfigurationOptions): Observable<RestV2ProductDetail> {
        return this.updateProductWithHttpInfo(productId, updateProductRequestDetail, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestV2ProductDetail>) => apiResponse.data));
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param updateProductOptionRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOptionWithHttpInfo(productId: string, productOptionId: string, updateProductOptionRequest: UpdateProductOptionRequest, updateMask?: 'option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message', _options?: ConfigurationOptions): Observable<HttpInfo<ProductOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductOption(productId, productOptionId, updateProductOptionRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a product option
     * Updates a Product Option
     * @param productId product_id
     * @param productOptionId product_option_id
     * @param updateProductOptionRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateProductOption(productId: string, productOptionId: string, updateProductOptionRequest: UpdateProductOptionRequest, updateMask?: 'option_label,display_order,required,minimum_characters,maximum_characters,allow_spaces, only_starts_with,only_ends_with,only_contains,error_message', _options?: ConfigurationOptions): Observable<ProductOption> {
        return this.updateProductOptionWithHttpInfo(productId, productOptionId, updateProductOptionRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductOption>) => apiResponse.data));
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
    public updateProductOptionListOptionValueWithHttpInfo(productId: string, productOptionId: string, itemId: string, updateProductOptionListOption: UpdateProductOptionListOption, updateMask?: 'item_label,item_code,item_display_order,price_adjustment ', _options?: ConfigurationOptions): Observable<HttpInfo<ProductOption>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateProductOptionListOptionValue(productId, productOptionId, itemId, updateProductOptionListOption, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductOptionListOptionValueWithHttpInfo(rsp)));
            }));
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
    public updateProductOptionListOptionValue(productId: string, productOptionId: string, itemId: string, updateProductOptionListOption: UpdateProductOptionListOption, updateMask?: 'item_label,item_code,item_display_order,price_adjustment ', _options?: ConfigurationOptions): Observable<ProductOption> {
        return this.updateProductOptionListOptionValueWithHttpInfo(productId, productOptionId, itemId, updateProductOptionListOption, updateMask, _options).pipe(map((apiResponse: HttpInfo<ProductOption>) => apiResponse.data));
    }

}

import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";
export class ObservableReferralApi {
    private requestFactory: ReferralApiRequestFactory;
    private responseProcessor: ReferralApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralApiRequestFactory,
        responseProcessor?: ReferralApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralApiResponseProcessor();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest
     */
    public createReferralWithHttpInfo(createReferralRequest: CreateReferralRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Referral>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createReferral(createReferralRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReferralWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest
     */
    public createReferral(createReferralRequest: CreateReferralRequest, _options?: ConfigurationOptions): Observable<Referral> {
        return this.createReferralWithHttpInfo(createReferralRequest, _options).pipe(map((apiResponse: HttpInfo<Referral>) => apiResponse.data));
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
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReportsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListReportsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listReports(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Reports as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * List Reports
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (DateTime) &#x60;since_created_time&#x60; - (DateTime) &#x60;until_created_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMonthly%20Sales&#x60; - &#x60;filter&#x3D;since_created_time%3D%3D2024-01-01&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;created_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listReports(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListReportsResponse> {
        return this.listReportsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListReportsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId The unique identifier of the report (Saved Search)
     */
    public retrieveReportWithHttpInfo(reportId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Report>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveReport(reportId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a Report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Retrieve Report
     * @param reportId The unique identifier of the report (Saved Search)
     */
    public retrieveReport(reportId: string, _options?: ConfigurationOptions): Observable<Report> {
        return this.retrieveReportWithHttpInfo(reportId, _options).pipe(map((apiResponse: HttpInfo<Report>) => apiResponse.data));
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param runReportRequest
     */
    public runReportWithHttpInfo(reportId: string, runReportRequest: RunReportRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ReportExecutionResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.runReport(reportId, runReportRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param runReportRequest
     */
    public runReport(reportId: string, runReportRequest: RunReportRequest, _options?: ConfigurationOptions): Observable<ReportExecutionResult> {
        return this.runReportWithHttpInfo(reportId, runReportRequest, _options).pipe(map((apiResponse: HttpInfo<ReportExecutionResult>) => apiResponse.data));
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
     * Retrieves a list of payments
     * List Payments
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listPaymentsWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListPayments>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPayments(filter, pageToken, orderBy, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of payments
     * List Payments
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;id&#x60; - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;amount&#x60; - &#x60;payment_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listPayments(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<ListPayments> {
        return this.listPaymentsWithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<ListPayments>) => apiResponse.data));
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTransactionsWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ListTransactions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTransactions(filter, pageToken, orderBy, pageSize, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of sales transactions
     * List Transactions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;amount&#x60; - Allowable operators: \&quot;&#x3D;&#x3D;\&quot;,\&quot;&lt;&#x3D;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&gt;\&quot;, \&quot;!&#x3D;\&quot; - (String) &#x60;order_id&#x60; - (String) &#x60;contact_id&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60; - (String) &#x60;merchant_account_id&#x60; - (String) &#x60;merchant_account_type&#x60; - (String) &#x60;status&#x60; - (String) &#x60;transaction_method&#x60; - (String) &#x60;is_successful&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;order_id%3D%3D123&#x60; - &#x60;filter&#x3D;order_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [pageToken] Page token
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;amount&#x60; - &#x60;transaction_time&#x60; - &#x60;contact_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     */
    public listTransactions(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: ConfigurationOptions): Observable<ListTransactions> {
        return this.listTransactionsWithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<ListTransactions>) => apiResponse.data));
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id
     */
    public setMerchantGatewayAsDefaultWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.setMerchantGatewayAsDefault(id, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setMerchantGatewayAsDefaultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id
     */
    public setMerchantGatewayAsDefault(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.setMerchantGatewayAsDefaultWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public getApplicationConfigurationsWithHttpInfo(fields?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<GetSettingsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getApplicationConfigurations(fields, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationConfigurationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurations(fields?: Array<string>, _options?: ConfigurationOptions): Observable<GetSettingsResponse> {
        return this.getApplicationConfigurationsWithHttpInfo(fields, _options).pipe(map((apiResponse: HttpInfo<GetSettingsResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetContactOptionTypesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getContactOptionTypes(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactOptionTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypes(_options?: ConfigurationOptions): Observable<GetContactOptionTypesResponse> {
        return this.getContactOptionTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetContactOptionTypesResponse>) => apiResponse.data));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.isApplicationEnabled(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.isApplicationEnabledWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabled(_options?: ConfigurationOptions): Observable<GetApplicationEnabledStatusResponse> {
        return this.isApplicationEnabledWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetApplicationEnabledStatusResponse>) => apiResponse.data));
    }

}

import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";
export class ObservableShippingApi {
    private requestFactory: ShippingApiRequestFactory;
    private responseProcessor: ShippingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingApiRequestFactory,
        responseProcessor?: ShippingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShippingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShippingApiResponseProcessor();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListRestShippingMethodsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listShippingMethods(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShippingMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethods(_options?: ConfigurationOptions): Observable<ListRestShippingMethodsResponse> {
        return this.listShippingMethodsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListRestShippingMethodsResponse>) => apiResponse.data));
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
     * @param createShippingDiscountRequest
     */
    public createShippingDiscountWithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createShippingDiscount(createShippingDiscountRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShippingDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest
     */
    public createShippingDiscount(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.createShippingDiscountWithHttpInfo(createShippingDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId
     */
    public deleteShippingDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteShippingDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteShippingDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId
     */
    public deleteShippingDiscount(discountId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteShippingDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId
     */
    public getShippingDiscountWithHttpInfo(discountId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getShippingDiscount(discountId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShippingDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId
     */
    public getShippingDiscount(discountId: string, _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.getShippingDiscountWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listShippingDiscountsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListShippingDiscountsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listShippingDiscounts(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShippingDiscountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Shipping Discounts
     * List all Shipping Discounts
     * @param [filter] Filter to apply, allowed fields are: - (DiscountType) &#x60;discount_type&#x60;: AMOUNT or PERCENT - (Double) &#x60;discount_value&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT&#x60; - &#x60;filter&#x3D;discount_value%3D%3D4.5&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_value%3D%3D4.5&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;discount_type&#x60; - &#x60;discount_value&#x60; - &#x60;id&#x60; - &#x60;name&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listShippingDiscounts(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListShippingDiscountsResponse> {
        return this.listShippingDiscountsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListShippingDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId
     * @param updateShippingDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscountWithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: 'name,description,discount_type,discount_value,criteria', _options?: ConfigurationOptions): Observable<HttpInfo<ShippingDiscount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateShippingDiscount(discountId, updateShippingDiscountRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateShippingDiscountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId
     * @param updateShippingDiscountRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateShippingDiscount(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: 'name,description,discount_type,discount_value,criteria', _options?: ConfigurationOptions): Observable<ShippingDiscount> {
        return this.updateShippingDiscountWithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

}

import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";
export class ObservableSubscriptionPlansApi {
    private requestFactory: SubscriptionPlansApiRequestFactory;
    private responseProcessor: SubscriptionPlansApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionPlansApiRequestFactory,
        responseProcessor?: SubscriptionPlansApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionPlansApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionPlansApiResponseProcessor();
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param productId
     * @param createSubscriptionPlanRequest
     */
    public createSubscriptionPlansWithHttpInfo(productId: string, createSubscriptionPlanRequest: CreateSubscriptionPlanRequest, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionPlan>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubscriptionPlans(productId, createSubscriptionPlanRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionPlansWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Subscription Plan
     * Create Subscription Plan
     * @param productId
     * @param createSubscriptionPlanRequest
     */
    public createSubscriptionPlans(productId: string, createSubscriptionPlanRequest: CreateSubscriptionPlanRequest, _options?: ConfigurationOptions): Observable<SubscriptionPlan> {
        return this.createSubscriptionPlansWithHttpInfo(productId, createSubscriptionPlanRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionPlan>) => apiResponse.data));
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public deleteSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSubscriptionPlan(productId, subscriptionPlanId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSubscriptionPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Subscription Plan
     * Delete Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public deleteSubscriptionPlan(productId: string, subscriptionPlanId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public fetchSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionPlan>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.fetchSubscriptionPlan(productId, subscriptionPlanId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchSubscriptionPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Subscription Plan
     * Get Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     */
    public fetchSubscriptionPlan(productId: string, subscriptionPlanId: string, _options?: ConfigurationOptions): Observable<SubscriptionPlan> {
        return this.fetchSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, _options).pipe(map((apiResponse: HttpInfo<SubscriptionPlan>) => apiResponse.data));
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
    public listSubscriptionPlansWithHttpInfo(productId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListSubscriptionPlansResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSubscriptionPlans(productId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionPlansWithHttpInfo(rsp)));
            }));
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
    public listSubscriptionPlans(productId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListSubscriptionPlansResponse> {
        return this.listSubscriptionPlansWithHttpInfo(productId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionPlansResponse>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     * @param updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlanWithHttpInfo(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: 'active,allow_prorating,cycle_type,display_order_index,frequency,plan_price,total_cycles', _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionPlan>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscriptionPlan(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Plan
     * Update Subscription Plan
     * @param productId product_id
     * @param subscriptionPlanId subscription_plan_id
     * @param updateSubscriptionPlanRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionPlan(productId: string, subscriptionPlanId: string, updateSubscriptionPlanRequest: UpdateSubscriptionPlanRequest, updateMask?: 'active,allow_prorating,cycle_type,display_order_index,frequency,plan_price,total_cycles', _options?: ConfigurationOptions): Observable<SubscriptionPlan> {
        return this.updateSubscriptionPlanWithHttpInfo(productId, subscriptionPlanId, updateSubscriptionPlanRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<SubscriptionPlan>) => apiResponse.data));
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
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId
     * @param cancelSubscriptionRequest
     */
    public cancelSubscriptionWithHttpInfo(subscriptionId: string, cancelSubscriptionRequest: CancelSubscriptionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.cancelSubscription(subscriptionId, cancelSubscriptionRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId
     * @param cancelSubscriptionRequest
     */
    public cancelSubscription(subscriptionId: string, cancelSubscriptionRequest: CancelSubscriptionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.cancelSubscriptionWithHttpInfo(subscriptionId, cancelSubscriptionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequestDetail
     */
    public createSubscriptionWithHttpInfo(createSubscriptionRequestDetail: CreateSubscriptionRequestDetail, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubscription(createSubscriptionRequestDetail, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionRequestDetail
     */
    public createSubscription(createSubscriptionRequestDetail: CreateSubscriptionRequestDetail, _options?: ConfigurationOptions): Observable<SubscriptionDetail> {
        return this.createSubscriptionWithHttpInfo(createSubscriptionRequestDetail, _options).pipe(map((apiResponse: HttpInfo<SubscriptionDetail>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest
     */
    public createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createSubscriptionCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Subscription object
     * Create a Subscription Custom Field
     * @param createCustomFieldRequest
     */
    public createSubscriptionCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.createSubscriptionCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId
     */
    public deleteSubscriptionCustomFieldWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteSubscriptionCustomField(customFieldId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSubscriptionCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a custom field from the Subscription object
     * Delete a Subscription Custom Field
     * @param customFieldId
     */
    public deleteSubscriptionCustomField(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteSubscriptionCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param subscriptionId
     */
    public getSubscriptionWithHttpInfo(subscriptionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSubscription(subscriptionId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single subscription
     * Retrieve a Subscription
     * @param subscriptionId
     */
    public getSubscription(subscriptionId: string, _options?: ConfigurationOptions): Observable<SubscriptionDetail> {
        return this.getSubscriptionWithHttpInfo(subscriptionId, _options).pipe(map((apiResponse: HttpInfo<SubscriptionDetail>) => apiResponse.data));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListSubscriptionsResponseList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listSubscriptions(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;subscription_plan_id&#x60; - (String) &#x60;status&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;contact_id&#x60; - &#x60;subscription_plan_id&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptions(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListSubscriptionsResponseList> {
        return this.listSubscriptionsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionsResponseList>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveSubscriptionCustomFieldModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Subscription object
     * Retrieve Subscription Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveSubscriptionCustomFieldModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a Subscription
     * Update a Subscription
     * @param subscriptionId
     * @param updateSubscriptionRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionWithHttpInfo(subscriptionId: string, updateSubscriptionRequestDetail: UpdateSubscriptionRequestDetail, updateMask?: 'contact_id,subscription_plan_id,quantity,billing_amount,auto_charge,max_charge_attempts,days_between_retries, active,billing_frequency,billing_cycle,next_bill_date,end_date,payment_method_id,allow_tax,lead_affiliate_id, sale_affiliate_id,promo_code,shipping_option_id,reason_stopped,shipping_address', _options?: ConfigurationOptions): Observable<HttpInfo<SubscriptionDetail>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscription(subscriptionId, updateSubscriptionRequestDetail, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription
     * Update a Subscription
     * @param subscriptionId
     * @param updateSubscriptionRequestDetail
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscription(subscriptionId: string, updateSubscriptionRequestDetail: UpdateSubscriptionRequestDetail, updateMask?: 'contact_id,subscription_plan_id,quantity,billing_amount,auto_charge,max_charge_attempts,days_between_retries, active,billing_frequency,billing_cycle,next_bill_date,end_date,payment_method_id,allow_tax,lead_affiliate_id, sale_affiliate_id,promo_code,shipping_option_id,reason_stopped,shipping_address', _options?: ConfigurationOptions): Observable<SubscriptionDetail> {
        return this.updateSubscriptionWithHttpInfo(subscriptionId, updateSubscriptionRequestDetail, updateMask, _options).pipe(map((apiResponse: HttpInfo<SubscriptionDetail>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateSubscriptionCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object
     * Update a Subscription Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateSubscriptionCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
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
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public applyTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ApplyTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.applyTags(tagId, applyRemoveTagRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public applyTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<ApplyTagsResponse> {
        return this.applyTagsWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<ApplyTagsResponse>) => apiResponse.data));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest
     */
    public createTagWithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Tag>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTag(createUpdateTagRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest
     */
    public createTag(createUpdateTagRequest: CreateUpdateTagRequest, _options?: ConfigurationOptions): Observable<Tag> {
        return this.createTagWithHttpInfo(createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest
     */
    public createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TagCategory>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTagCategory(createUpdateTagCategoryRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest
     */
    public createTagCategory(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: ConfigurationOptions): Observable<TagCategory> {
        return this.createTagCategoryWithHttpInfo(createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<TagCategory>) => apiResponse.data));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId
     */
    public deleteTagWithHttpInfo(tagId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTag(tagId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId
     */
    public deleteTag(tagId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTagWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId
     */
    public deleteTagCategoryWithHttpInfo(tagCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTagCategory(tagCategoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId
     */
    public deleteTagCategory(tagCategoryId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTagCategoryWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId
     */
    public getCategoryWithHttpInfo(tagCategoryId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetTagCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCategory(tagCategoryId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId
     */
    public getCategory(tagCategoryId: string, _options?: ConfigurationOptions): Observable<GetTagCategoryResponse> {
        return this.getCategoryWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<GetTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId
     */
    public getTagWithHttpInfo(tagId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Tag>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTag(tagId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId
     */
    public getTag(tagId: string, _options?: ConfigurationOptions): Observable<Tag> {
        return this.getTagWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
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
    public listCompaniesForTagIdWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTaggedCompaniesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listCompaniesForTagId(tagId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesForTagIdWithHttpInfo(rsp)));
            }));
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
    public listCompaniesForTagId(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTaggedCompaniesResponse> {
        return this.listCompaniesForTagIdWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedCompaniesResponse>) => apiResponse.data));
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
    public listContactsWithTagIdWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTaggedContactsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listContactsWithTagId(tagId, filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsWithTagIdWithHttpInfo(rsp)));
            }));
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
    public listContactsWithTagId(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTaggedContactsResponse> {
        return this.listContactsWithTagIdWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedContactsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTagCategoriesResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTagCategories(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;name&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3Dmy-tag-category&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategories(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTagCategoriesResponse> {
        return this.listTagCategoriesWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTagsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTags(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Tags defined in the application To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Filter to apply, allowed fields are:  - (String) &#x60;name&#x60; - (String) &#x60;description&#x60; - (String) &#x60;category_id&#x60; - (String) &#x60;tag_ids&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. If NONE is passed in for &#x60;category_id&#x60; or &#x60;description&#x60;, it will check for the non-existence of that field. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;name%3D%3Dmy-tag&#x60; - &#x60;filter&#x3D;category_id%3D%3DNONE&#x60; - &#x60;filter&#x3D;description%3D%3DNONE&#x60; - &#x60;filter&#x3D;tag_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_create_time%3D%3D2024-12-22T01:00:00.000Z;until_create_time%3D%3D2025-01-01T00:00:00.000Z;&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields:  - &#x60;name&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTags(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTagsResponse> {
        return this.listTagsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagsResponse>) => apiResponse.data));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public removeTagsWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.removeTags(tagId, applyRemoveTagRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId
     * @param applyRemoveTagRequest
     */
    public removeTags(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.removeTagsWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId
     * @param createUpdateTagRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagWithHttpInfo(tagId: string, createUpdateTagRequest: CreateUpdateTagRequest, updateMask?: 'name,description,category', _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTagResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTag(tagId, createUpdateTagRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId
     * @param createUpdateTagRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTag(tagId: string, createUpdateTagRequest: CreateUpdateTagRequest, updateMask?: 'name,description,category', _options?: ConfigurationOptions): Observable<UpdateTagResponse> {
        return this.updateTagWithHttpInfo(tagId, createUpdateTagRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateTagResponse>) => apiResponse.data));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId
     * @param createUpdateTagCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagCategoryWithHttpInfo(tagCategoryId: string, createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTagCategoryResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTagCategory(tagCategoryId, createUpdateTagCategoryRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId
     * @param createUpdateTagCategoryRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTagCategory(tagCategoryId: string, createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, updateMask?: 'name,description', _options?: ConfigurationOptions): Observable<UpdateTagCategoryResponse> {
        return this.updateTagCategoryWithHttpInfo(tagCategoryId, createUpdateTagCategoryRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateTagCategoryResponse>) => apiResponse.data));
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
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param createTaskRequest
     */
    public createTaskWithHttpInfo(createTaskRequest: CreateTaskRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Task>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTask(createTaskRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param createTaskRequest
     */
    public createTask(createTaskRequest: CreateTaskRequest, _options?: ConfigurationOptions): Observable<Task> {
        return this.createTaskWithHttpInfo(createTaskRequest, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createTaskCustomFieldWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateCustomFieldResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createTaskCustomField(createCustomFieldRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a custom field of the specified type and options to the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Create a Custom Field
     * @param createCustomFieldRequest
     */
    public createTaskCustomField(createCustomFieldRequest: CreateCustomFieldRequest, _options?: ConfigurationOptions): Observable<CreateCustomFieldResponse> {
        return this.createTaskCustomFieldWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId
     */
    public deleteTaskWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTask(taskId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId
     */
    public deleteTask(taskId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTaskWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteTaskCustomFieldWithHttpInfo(customFieldId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteTaskCustomField(customFieldId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Delete a Custom Field
     * @param customFieldId
     */
    public deleteTaskCustomField(customFieldId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteTaskCustomFieldWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId
     */
    public getTaskWithHttpInfo(taskId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Task>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTask(taskId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId
     */
    public getTask(taskId: string, _options?: ConfigurationOptions): Observable<Task> {
        return this.getTaskWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTasksWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListTasksResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listTasks(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTasksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;contact_id&#x60; - (String) &#x60;has_due_date&#x60; - (String) &#x60;is_completed&#x60; - (String) &#x60;user_id&#x60; - (String) &#x60;task_ids&#x60; - (String) &#x60;since_time&#x60; - (String) &#x60;until_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;has_due_date%3D%3Dtrue&#x60; - &#x60;filter&#x3D;is_completed%3D%3Dtrue&#x60; - &#x60;filter&#x3D;user_id%3D%3D321&#x60; - &#x60;filter&#x3D;task_ids%3D%3D1,2,3&#x60; - &#x60;filter&#x3D;since_time%3D%3D2025-04-16T20:33:02.321Z;&#x60; - &#x60;filter&#x3D;until_time%3D%3D2025-08-16T20:33:02.321Z;&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;create_time&#x60; - &#x60;due_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTasks(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListTasksResponse> {
        return this.listTasksWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTasksResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModelWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ObjectModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.retrieveTaskModel(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveTaskModelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Task object<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Retrieve Task Model
     */
    public retrieveTaskModel(_options?: ConfigurationOptions): Observable<ObjectModel> {
        return this.retrieveTaskModelWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId
     * @param createUpdateTaskRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskWithHttpInfo(taskId: string, createUpdateTaskRequest: CreateUpdateTaskRequest, updateMask?: 'id,title,description,type,priority,completion_time, due_time,remind_time_mins,assigned_to_user_id,contact_id,completed', _options?: ConfigurationOptions): Observable<HttpInfo<UpdateTaskResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTask(taskId, createUpdateTaskRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId
     * @param createUpdateTaskRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTask(taskId: string, createUpdateTaskRequest: CreateUpdateTaskRequest, updateMask?: 'id,title,description,type,priority,completion_time, due_time,remind_time_mins,assigned_to_user_id,contact_id,completed', _options?: ConfigurationOptions): Observable<UpdateTaskResponse> {
        return this.updateTaskWithHttpInfo(taskId, createUpdateTaskRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateTaskResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<HttpInfo<CustomFieldMetaData>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateTaskCustomField(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.<br/>Note: Custom Fields for Tasks, Classic Appointments and Notes are combined.
     * Update a Task\'s Custom Field
     * @param customFieldId
     * @param updateCustomFieldMetaDataRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomField(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: 'group_id,label,options', _options?: ConfigurationOptions): Observable<CustomFieldMetaData> {
        return this.updateTaskCustomFieldWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { UserGroupsApiRequestFactory, UserGroupsApiResponseProcessor} from "../apis/UserGroupsApi";
export class ObservableUserGroupsApi {
    private requestFactory: UserGroupsApiRequestFactory;
    private responseProcessor: UserGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsApiRequestFactory,
        responseProcessor?: UserGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserGroupsApiResponseProcessor();
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param userGroupId
     */
    public getUserGroupWithHttpInfo(userGroupId: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroup>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserGroup(userGroupId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single user group by its ID.
     * Retrieve a User Group
     * @param userGroupId
     */
    public getUserGroup(userGroupId: string, _options?: ConfigurationOptions): Observable<UserGroup> {
        return this.getUserGroupWithHttpInfo(userGroupId, _options).pipe(map((apiResponse: HttpInfo<UserGroup>) => apiResponse.data));
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     */
    public listUserGroupsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ListUserGroupsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listUserGroups(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUserGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of all user groups in the application.
     * List User Groups
     */
    public listUserGroups(_options?: ConfigurationOptions): Observable<ListUserGroupsResponse> {
        return this.listUserGroupsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListUserGroupsResponse>) => apiResponse.data));
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
     * Retrieves a specific User
     * Get User
     * @param userId
     */
    public getUserByIdWithHttpInfo(userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserById(userId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId
     */
    public getUserById(userId: string, _options?: ConfigurationOptions): Observable<User> {
        return this.getUserByIdWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<GetUserInfoResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserInfo(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfo(_options?: ConfigurationOptions): Observable<GetUserInfoResponse> {
        return this.getUserInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetUserInfoResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId
     */
    public getUserSignatureWithHttpInfo(userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getUserSignature(userId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSignatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId
     */
    public getUserSignature(userId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getUserSignatureWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsersWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListUsersPaginatedResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listPaginatedUsers(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaginatedUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (Boolean) &#x60;include_inactive&#x60; - (Boolean) &#x60;include_partners&#x60; - (Set[String]) &#x60;user_ids&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;user_ids%3D%3D123%3Bgiven_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;create_time&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listPaginatedUsers(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListUsersPaginatedResponse> {
        return this.listPaginatedUsersWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListUsersPaginatedResponse>) => apiResponse.data));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId
     * @param updateUserRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateUserWithHttpInfo(userId: string, updateUserRequest: UpdateUserRequest, updateMask?: 'address,company_name,email_address,family_name,fax_numbers,given_name,job_title,phone_numbers,time_zone,website', _options?: ConfigurationOptions): Observable<HttpInfo<User>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateUser(userId, updateUserRequest, updateMask, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId
     * @param updateUserRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateUser(userId: string, updateUserRequest: UpdateUserRequest, updateMask?: 'address,company_name,email_address,family_name,fax_numbers,given_name,job_title,phone_numbers,time_zone,website', _options?: ConfigurationOptions): Observable<User> {
        return this.updateUserWithHttpInfo(userId, updateUserRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { WebformsApiRequestFactory, WebformsApiResponseProcessor} from "../apis/WebformsApi";
export class ObservableWebformsApi {
    private requestFactory: WebformsApiRequestFactory;
    private responseProcessor: WebformsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebformsApiRequestFactory,
        responseProcessor?: WebformsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebformsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebformsApiResponseProcessor();
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param webformId
     */
    public getHtmlWithHttpInfo(webformId: string, _options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getHtml(webformId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHtmlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the HTML
     * Get Webform HTML
     * @param webformId
     */
    public getHtml(webformId: string, _options?: ConfigurationOptions): Observable<string> {
        return this.getHtmlWithHttpInfo(webformId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;webform_type&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DContact Us&#x60; - &#x60;filter&#x3D;webform_type%3D%3Dlegacy&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;webform_type&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listWebformsWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListWebformsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listWebforms(filter, orderBy, pageSize, pageToken, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWebformsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of webforms
     * List Webforms with filter
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;name&#x60; - (String) &#x60;webform_type&#x60; - (String) &#x60;since_create_time&#x60; - (String) &#x60;until_create_time&#x60; - (String) &#x60;since_update_time&#x60; - (String) &#x60;until_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DContact Us&#x60; - &#x60;filter&#x3D;webform_type%3D%3Dlegacy&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;name&#x60; - &#x60;webform_type&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listWebforms(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: ConfigurationOptions): Observable<ListWebformsResponse> {
        return this.listWebformsWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListWebformsResponse>) => apiResponse.data));
    }

}
