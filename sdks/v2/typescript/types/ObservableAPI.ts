import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
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
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListNoteTemplateResponse } from '../models/ListNoteTemplateResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOrderPaymentsResponse } from '../models/ListOrderPaymentsResponse';
import { ListOrderTotalDiscountsResponse } from '../models/ListOrderTotalDiscountsResponse';
import { ListOrders } from '../models/ListOrders';
import { ListProductCategoriesResponse } from '../models/ListProductCategoriesResponse';
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
import { PaymentMethodList } from '../models/PaymentMethodList';
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
import { RestPaymentMethod } from '../models/RestPaymentMethod';
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
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest?: CreateAffiliateRequest, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.addAffiliateUsingPOST(createAffiliateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public addAffiliateUsingPOST(createAffiliateRequest?: CreateAffiliateRequest, _options?: Configuration): Observable<RestAffiliate> {
        return this.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.getAffiliateUsingGET1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getAffiliateUsingGET1(id: string, _options?: Configuration): Observable<RestAffiliate> {
        return this.getAffiliateUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [updateAffiliateRequest] Request to update an affiliate
     */
    public updateAffiliateUsingPATCHWithHttpInfo(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.updateAffiliateUsingPATCH(id, updateAffiliateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateAffiliateUsingPATCH(id: string, updateAffiliateRequest?: UpdateAffiliateRequest, _options?: Configuration): Observable<RestAffiliate> {
        return this.updateAffiliateUsingPATCHWithHttpInfo(id, updateAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.updateCommissionProgramUsingPATCH(commissionProgramId, updateCommissionProgramRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param updateCommissionProgramRequest updateCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateCommissionProgramUsingPATCH(commissionProgramId: string, updateCommissionProgramRequest: UpdateCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Observable<AffiliateCommissionProgramResponse> {
        return this.updateCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
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
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Observable<HttpInfo<AddToAutomationSequenceResponse>> {
        const requestContextPromise = this.requestFactory.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Observable<AddToAutomationSequenceResponse> {
        return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddToAutomationSequenceResponse>) => apiResponse.data));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETEWithHttpInfo(automationIds: Array<number>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAutomationUsingDELETE(automationIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: Configuration): Observable<void> {
        return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGETWithHttpInfo(automationId: string, _options?: Configuration): Observable<HttpInfo<Automation>> {
        const requestContextPromise = this.requestFactory.getAutomationUsingGET(automationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getAutomationUsingGET(automationId: string, _options?: Configuration): Observable<Automation> {
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
    public listAllAutomationIdsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListAutomationIdsResponse>> {
        const requestContextPromise = this.requestFactory.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListAutomationIdsResponse> {
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
    public listAutomationsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListAutomationResponse>> {
        const requestContextPromise = this.requestFactory.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListAutomationResponse> {
        return this.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListAutomationResponse>) => apiResponse.data));
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Observable<void> {
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
    public createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<AutomationCategory>> {
        const requestContextPromise = this.requestFactory.createCategoryUsingPOST(createAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Observable<AutomationCategory> {
        return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCategoriesUsingDELETE(ids, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteCategoriesUsingDELETE(ids: Array<number>, _options?: Configuration): Observable<void> {
        return this.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListAutomationCategoryResponse>> {
        const requestContextPromise = this.requestFactory.listCategoriesUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of automation categories
     * List automation categories
     */
    public listCategoriesUsingGET(_options?: Configuration): Observable<ListAutomationCategoryResponse> {
        return this.listCategoriesUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListAutomationCategoryResponse>) => apiResponse.data));
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<AutomationCategory>> {
        const requestContextPromise = this.requestFactory.saveCategoryUsingPUT(saveAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Observable<AutomationCategory> {
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
    public getBusinessProfileUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const requestContextPromise = this.requestFactory.getBusinessProfileUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessProfileUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGET(_options?: Configuration): Observable<GetBusinessProfileResponse> {
        return this.getBusinessProfileUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateBusinessProfileRequest] businessProfile
     */
    public updateBusinessProfileUsingPATCHWithHttpInfo(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: Configuration): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const requestContextPromise = this.requestFactory.updateBusinessProfileUsingPATCH(updateMask, updateBusinessProfileRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateBusinessProfileUsingPATCH(updateMask?: Array<string>, updateBusinessProfileRequest?: UpdateBusinessProfileRequest, _options?: Configuration): Observable<GetBusinessProfileResponse> {
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
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Observable<HttpInfo<AddContactsToSequenceResponse>> {
        const requestContextPromise = this.requestFactory.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Observable<AddContactsToSequenceResponse> {
        return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddContactsToSequenceResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1WithHttpInfo(campaignId: string, _options?: Configuration): Observable<HttpInfo<Campaign>> {
        const requestContextPromise = this.requestFactory.getCampaignUsingGET1(campaignId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getCampaignUsingGET1(campaignId: string, _options?: Configuration): Observable<Campaign> {
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
    public listCampaignsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListCampaignsResponse>> {
        const requestContextPromise = this.requestFactory.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListCampaignsResponse> {
        return this.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListCampaignsResponse>) => apiResponse.data));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Observable<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const requestContextPromise = this.requestFactory.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Observable<RemoveContactsFromSequenceResponse> {
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
    public createCompanyUsingPOST1WithHttpInfo(createCompanyRequest?: CreateCompanyRequest, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.createCompanyUsingPOST1(createCompanyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createCompanyUsingPOST1(createCompanyRequest?: CreateCompanyRequest, _options?: Configuration): Observable<Company> {
        return this.createCompanyUsingPOST1WithHttpInfo(createCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETEWithHttpInfo(companyId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCompanyUsingDELETE(companyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteCompanyUsingDELETE(companyId: string, _options?: Configuration): Observable<void> {
        return this.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1WithHttpInfo(companyId: string, fields?: Array<string>, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.getCompanyUsingGET1(companyId, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: Configuration): Observable<Company> {
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
    public listCompaniesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListCompaniesResponse>> {
        const requestContextPromise = this.requestFactory.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListCompaniesResponse> {
        return this.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCompaniesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [updateCompanyRequest] company
     */
    public updateCompanyUsingPATCH1WithHttpInfo(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.updateCompanyUsingPATCH1(companyId, updateMask, updateCompanyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateCompanyUsingPATCH1(companyId: string, updateMask?: Array<string>, updateCompanyRequest?: UpdateCompanyRequest, _options?: Configuration): Observable<Company> {
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
    public createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: Configuration): Observable<HttpInfo<ContactLinkType>> {
        const requestContextPromise = this.requestFactory.createContactLinkTypeUsingPOST(createContactLinkTypeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createContactLinkTypeUsingPOST(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: Configuration): Observable<ContactLinkType> {
        return this.createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLinkType>) => apiResponse.data));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createUpdateContactRequest] contact
     */
    public createContactUsingPOST1WithHttpInfo(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.createContactUsingPOST1(createUpdateContactRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createContactUsingPOST1(createUpdateContactRequest?: CreateUpdateContactRequest, _options?: Configuration): Observable<Contact> {
        return this.createContactUsingPOST1WithHttpInfo(createUpdateContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Deletes the specified Contact
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1WithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteContactUsingDELETE1(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteContactUsingDELETE1(contactId: string, _options?: Configuration): Observable<void> {
        return this.deleteContactUsingDELETE1WithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     */
    public getContactUsingGET1WithHttpInfo(contactId: string, fields?: Array<string>, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.getContactUsingGET1(contactId, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     */
    public getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: Configuration): Observable<Contact> {
        return this.getContactUsingGET1WithHttpInfo(contactId, fields, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<HttpInfo<ContactLink>> {
        const requestContextPromise = this.requestFactory.linkContactsUsingPOST(linkContactsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<ContactLink> {
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
    public listContactLinkTypesUsingGETWithHttpInfo(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListContactLinkTypesResponse>> {
        const requestContextPromise = this.requestFactory.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListContactLinkTypesResponse> {
        return this.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactLinkTypesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGETWithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<ListContactLinksResponse>> {
        const requestContextPromise = this.requestFactory.listContactLinksUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listContactLinksUsingGET(contactId: string, _options?: Configuration): Observable<ListContactLinksResponse> {
        return this.listContactLinksUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<ListContactLinksResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListContactsResponse>> {
        const requestContextPromise = this.requestFactory.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: addresses,anniversary_date,birth_date,company,contact_type,create_time, custom_fields,email_addresses,family_name,fax_numbers,given_name,id,job_title,leadsource_id, links,middle_name,notes,origin,owner_id,phone_numbers,preferred_locale,preferred_name,prefix, referral_code,score_value,social_accounts,source_type,spouse_name,suffix,tag_ids,time_zone, update_date,update_time,utm_parameters,website)
     * @param [filter] Filter to apply, allowed fields are: - (String) &#x60;email&#x60; - (String) &#x60;given_name&#x60; - (String) &#x60;family_name&#x60; - (String) &#x60;company_id&#x60; - (Set[String]) &#x60;contact_ids&#x60; - (String) &#x60;start_update_time&#x60; - (String) &#x60;end_update_time&#x60;  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;given_name%3D%3DMary&#x60; - &#x60;filter&#x3D;company_id%3D%3D123&#x60; - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - &#x60;id&#x60; - &#x60;date_created&#x60; - &#x60;email&#x60;  One of the following directions: - &#x60;asc&#x60; - &#x60;desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListContactsResponse> {
        return this.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactsResponse>) => apiResponse.data));
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGETWithHttpInfo(contactId: number, _options?: Configuration): Observable<HttpInfo<PaymentMethodList>> {
        const requestContextPromise = this.requestFactory.listPaymentMethodsUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentMethodsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGET(contactId: number, _options?: Configuration): Observable<PaymentMethodList> {
        return this.listPaymentMethodsUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<PaymentMethodList>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveContactModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveContactModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveContactModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unlinkContactsUsingPOST(linkContactsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<void> {
        return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateContactRequest] contact
     */
    public updateContactUsingPATCHWithHttpInfo(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.updateContactUsingPATCH(contactId, updateMask, createUpdateContactRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateContactUsingPATCH(contactId: string, updateMask?: Array<string>, createUpdateContactRequest?: CreateUpdateContactRequest, _options?: Configuration): Observable<Contact> {
        return this.updateContactUsingPATCHWithHttpInfo(contactId, updateMask, createUpdateContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
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
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public _deleteWithHttpInfo(noteId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory._delete(noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param noteId the ID of the note to delete
     */
    public _delete(noteId: string, _options?: Configuration): Observable<void> {
        return this._deleteWithHttpInfo(noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param id the deal ID to associate the new note with
     * @param createDealNoteRequest the request body containing note details
     */
    public createNoteWithHttpInfo(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: Configuration): Observable<HttpInfo<DealNote>> {
        const requestContextPromise = this.requestFactory.createNote(id, createDealNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createNote(id: string, createDealNoteRequest: CreateDealNoteRequest, _options?: Configuration): Observable<DealNote> {
        return this.createNoteWithHttpInfo(id, createDealNoteRequest, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param noteId the ID of the note to retrieve
     */
    public getNoteWithHttpInfo(noteId: string, _options?: Configuration): Observable<HttpInfo<DealNote>> {
        const requestContextPromise = this.requestFactory.getNote(noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getNote(noteId: string, _options?: Configuration): Observable<DealNote> {
        return this.getNoteWithHttpInfo(noteId, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
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
    public listNotesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<DealNoteListResponse>> {
        const requestContextPromise = this.requestFactory.listNotes(id, filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listNotes(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<DealNoteListResponse> {
        return this.listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<DealNoteListResponse>) => apiResponse.data));
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public updateWithHttpInfo(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: Configuration): Observable<HttpInfo<DealNote>> {
        const requestContextPromise = this.requestFactory.update(noteId, updateDealNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param noteId the ID of the note to update
     * @param updateDealNoteRequest the request body containing updated note details
     */
    public update(noteId: string, updateDealNoteRequest: UpdateDealNoteRequest, _options?: Configuration): Observable<DealNote> {
        return this.updateWithHttpInfo(noteId, updateDealNoteRequest, _options).pipe(map((apiResponse: HttpInfo<DealNote>) => apiResponse.data));
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
    public createEmailUsingPOST1WithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: Configuration): Observable<HttpInfo<EmailSentWithContent>> {
        const requestContextPromise = this.requestFactory.createEmailUsingPOST1(createEmailSentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createEmailUsingPOST1(createEmailSentRequest: CreateEmailSentRequest, _options?: Configuration): Observable<EmailSentWithContent> {
        return this.createEmailUsingPOST1WithHttpInfo(createEmailSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Observable<HttpInfo<EmailsSentList>> {
        const requestContextPromise = this.requestFactory.createEmailsUsingPOST1(createEmailsSentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Observable<EmailsSentList> {
        return this.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailsSentList>) => apiResponse.data));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEmailUsingDELETE1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteEmailUsingDELETE1(id: string, _options?: Configuration): Observable<void> {
        return this.deleteEmailUsingDELETE1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Observable<HttpInfo<DeleteEmailsResponse>> {
        const requestContextPromise = this.requestFactory.deleteEmailsUsingPOST1(deleteEmailsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Observable<DeleteEmailsResponse> {
        return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteEmailsResponse>) => apiResponse.data));
    }

    /**
     * Pre-Release
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGETWithHttpInfo(emailTemplateId: string, _options?: Configuration): Observable<HttpInfo<EmailTemplate>> {
        const requestContextPromise = this.requestFactory.getEmailTemplateUsingGET(emailTemplateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailTemplateUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Pre-Release
     * Retrieve an email template
     * @param emailTemplateId email_template_id
     */
    public getEmailTemplateUsingGET(emailTemplateId: string, _options?: Configuration): Observable<EmailTemplate> {
        return this.getEmailTemplateUsingGETWithHttpInfo(emailTemplateId, _options).pipe(map((apiResponse: HttpInfo<EmailTemplate>) => apiResponse.data));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EmailSentWithContent>> {
        const requestContextPromise = this.requestFactory.getEmailUsingGET1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getEmailUsingGET1(id: string, _options?: Configuration): Observable<EmailSentWithContent> {
        return this.getEmailUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1WithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.sendEmailUsingPOST1(emailSendRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: Configuration): Observable<void> {
        return this.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGETWithHttpInfo(email: string, _options?: Configuration): Observable<HttpInfo<RestEmailAddress>> {
        const requestContextPromise = this.requestFactory.getEmailAddressStatusUsingGET(email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailAddressStatusUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGET(email: string, _options?: Configuration): Observable<RestEmailAddress> {
        return this.getEmailAddressStatusUsingGETWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddress>) => apiResponse.data));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUTWithHttpInfo(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Observable<HttpInfo<RestEmailAddress>> {
        const requestContextPromise = this.requestFactory.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmailAddressOptStatusUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUT(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Observable<RestEmailAddress> {
        return this.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddress>) => apiResponse.data));
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
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1WithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: Configuration): Observable<HttpInfo<Note>> {
        const requestContextPromise = this.requestFactory.createNoteUsingPOST1(contactId, createNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createNoteUsingPOST1(contactId: string, createNoteRequest: CreateNoteRequest, _options?: Configuration): Observable<Note> {
        return this.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest, _options).pipe(map((apiResponse: HttpInfo<Note>) => apiResponse.data));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteNoteUsingDELETE1(contactId, noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: Configuration): Observable<void> {
        return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Observable<HttpInfo<GetNoteResponse>> {
        const requestContextPromise = this.requestFactory.getNoteUsingGET1(contactId, noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getNoteUsingGET1(contactId: string, noteId: string, _options?: Configuration): Observable<GetNoteResponse> {
        return this.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<GetNoteResponse>) => apiResponse.data));
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
    public listNotesUsingGET1WithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListNotesResponse>> {
        const requestContextPromise = this.requestFactory.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListNotesResponse> {
        return this.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNotesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCHWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<UpdateNoteResponse>> {
        const requestContextPromise = this.requestFactory.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Observable<UpdateNoteResponse> {
        return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateNoteResponse>) => apiResponse.data));
    }

}

import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor} from "../apis/PaymentMethodConfigApi";
export class ObservablePaymentMethodConfigApi {
    private requestFactory: PaymentMethodConfigApiRequestFactory;
    private responseProcessor: PaymentMethodConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodConfigApiRequestFactory,
        responseProcessor?: PaymentMethodConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentMethodConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentMethodConfigApiResponseProcessor();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: Configuration): Observable<HttpInfo<PaymentMethodConfig>> {
        const requestContextPromise = this.requestFactory.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: Configuration): Observable<PaymentMethodConfig> {
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
     * Creates a new entity.
     * Creates a new entity.
     * @param createPipelineRequest the create request
     */
    public createWithHttpInfo(createPipelineRequest: CreatePipelineRequest, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.create(createPipelineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public create(createPipelineRequest: CreatePipelineRequest, _options?: Configuration): Observable<Pipeline> {
        return this.createWithHttpInfo(createPipelineRequest, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1WithHttpInfo(id: string, allowCleanup?: boolean, newStageId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.delete1(id, allowCleanup, newStageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.delete1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param id the pipeline identifier
     * @param [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete1(id: string, allowCleanup?: boolean, newStageId?: string, _options?: Configuration): Observable<void> {
        return this.delete1WithHttpInfo(id, allowCleanup, newStageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public getWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.get(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public get(id: string, _options?: Configuration): Observable<Pipeline> {
        return this.getWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
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
    public getOutcomeLabelsWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const requestContextPromise = this.requestFactory.getOutcomeLabels(id, filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getOutcomeLabels(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<PipelineOutcomeLabelListResponse> {
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
    public listWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<PipelineListResponse>> {
        const requestContextPromise = this.requestFactory.list(filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public list(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<PipelineListResponse> {
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
    public listStagesWithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<PipelineStageListResponse>> {
        const requestContextPromise = this.requestFactory.listStages(id, filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listStages(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<PipelineStageListResponse> {
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
    public listSummariesWithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<PipelineSummariesListResponse>> {
        const requestContextPromise = this.requestFactory.listSummaries(filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listSummaries(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<PipelineSummariesListResponse> {
        return this.listSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<PipelineSummariesListResponse>) => apiResponse.data));
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param id the pipeline identifier
     * @param updateOutcomeLabelsRequest the request containing the new outcome labels
     */
    public setOutcomeLabelsWithHttpInfo(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: Configuration): Observable<HttpInfo<PipelineOutcomeLabelListResponse>> {
        const requestContextPromise = this.requestFactory.setOutcomeLabels(id, updateOutcomeLabelsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public setOutcomeLabels(id: string, updateOutcomeLabelsRequest: UpdateOutcomeLabelsRequest, _options?: Configuration): Observable<PipelineOutcomeLabelListResponse> {
        return this.setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest, _options).pipe(map((apiResponse: HttpInfo<PipelineOutcomeLabelListResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updatePipelineRequest the update request
     */
    public update1WithHttpInfo(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.update1(id, updateMask, updatePipelineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param updatePipelineRequest the update request
     */
    public update1(id: string, updateMask: Array<string>, updatePipelineRequest: UpdatePipelineRequest, _options?: Configuration): Observable<Pipeline> {
        return this.update1WithHttpInfo(id, updateMask, updatePipelineRequest, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
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
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     */
    public runReportUsingPOSTWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ReportExecutionResult>> {
        const requestContextPromise = this.requestFactory.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ReportExecutionResult> {
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
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setMerchantGatewayAsDefaultUsingPOST(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public setMerchantGatewayAsDefaultUsingPOST(id: string, _options?: Configuration): Observable<void> {
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
    public getApplicationConfigurationsUsingGETWithHttpInfo(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: Configuration): Observable<HttpInfo<GetSettingsResponse>> {
        const requestContextPromise = this.requestFactory.getApplicationConfigurationsUsingGET(fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getApplicationConfigurationsUsingGET(fields?: Array<'AFFILIATE' | 'APPOINTMENT' | 'CONTACT' | 'ECOMMERCE' | 'EMAIL' | 'FORMS' | 'FULFILLMENT' | 'INVOICE' | 'NOTE' | 'OPPORTUNITY' | 'TASK' | 'TEMPLATE'>, _options?: Configuration): Observable<GetSettingsResponse> {
        return this.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options).pipe(map((apiResponse: HttpInfo<GetSettingsResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetContactOptionTypesResponse>> {
        const requestContextPromise = this.requestFactory.getContactOptionTypesUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactOptionTypesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1(_options?: Configuration): Observable<GetContactOptionTypesResponse> {
        return this.getContactOptionTypesUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetContactOptionTypesResponse>) => apiResponse.data));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const requestContextPromise = this.requestFactory.isApplicationEnabledUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.isApplicationEnabledUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGET(_options?: Configuration): Observable<GetApplicationEnabledStatusResponse> {
        return this.isApplicationEnabledUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetApplicationEnabledStatusResponse>) => apiResponse.data));
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
     * Creates a new entity.
     * Creates a new entity.
     * @param createStageRequest the create request
     */
    public create1WithHttpInfo(createStageRequest: CreateStageRequest, _options?: Configuration): Observable<HttpInfo<Stage>> {
        const requestContextPromise = this.requestFactory.create1(createStageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public create1(createStageRequest: CreateStageRequest, _options?: Configuration): Observable<Stage> {
        return this.create1WithHttpInfo(createStageRequest, _options).pipe(map((apiResponse: HttpInfo<Stage>) => apiResponse.data));
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete2WithHttpInfo(id: string, newStageId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.delete2(id, newStageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.delete2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param id the stage identifier
     * @param [newStageId] the new stage identifier, can be null
     */
    public delete2(id: string, newStageId?: string, _options?: Configuration): Observable<void> {
        return this.delete2WithHttpInfo(id, newStageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param id the entity identifier
     */
    public get1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Stage>> {
        const requestContextPromise = this.requestFactory.get1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public get1(id: string, _options?: Configuration): Observable<Stage> {
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
    public list1WithHttpInfo(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<StageListResponse>> {
        const requestContextPromise = this.requestFactory.list1(filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public list1(filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<StageListResponse> {
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
    public listStages1WithHttpInfo(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<StageDealListResponse>> {
        const requestContextPromise = this.requestFactory.listStages1(id, filter, pageToken, orderBy, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStages1WithHttpInfo(rsp)));
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
    public listStages1(id: string, filter?: string, pageToken?: string, orderBy?: string, pageSize?: number, _options?: Configuration): Observable<StageDealListResponse> {
        return this.listStages1WithHttpInfo(id, filter, pageToken, orderBy, pageSize, _options).pipe(map((apiResponse: HttpInfo<StageDealListResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update2WithHttpInfo(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: Configuration): Observable<HttpInfo<Stage>> {
        const requestContextPromise = this.requestFactory.update2(id, updateMask, updateStageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param id the entity identifier
     * @param updateMask the fields to update
     * @param updateStageRequest the update request
     */
    public update2(id: string, updateMask: Array<string>, updateStageRequest: UpdateStageRequest, _options?: Configuration): Observable<Stage> {
        return this.update2WithHttpInfo(id, updateMask, updateStageRequest, _options).pipe(map((apiResponse: HttpInfo<Stage>) => apiResponse.data));
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
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Observable<HttpInfo<RestSubscriptionV2>> {
        const requestContextPromise = this.requestFactory.createSubscriptionV2UsingPOST(createSubscriptionV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Observable<RestSubscriptionV2> {
        return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options).pipe(map((apiResponse: HttpInfo<RestSubscriptionV2>) => apiResponse.data));
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
    public applyTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<HttpInfo<ApplyTagsResponse>> {
        const requestContextPromise = this.requestFactory.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<ApplyTagsResponse> {
        return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<ApplyTagsResponse>) => apiResponse.data));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createTagCategoryUsingPOST1(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<Tag> {
        return this.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1WithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.createTagUsingPOST1(createUpdateTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public createTagUsingPOST1(createUpdateTagRequest: CreateUpdateTagRequest, _options?: Configuration): Observable<Tag> {
        return this.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTagCategoryUsingDELETE(tagCategoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: Configuration): Observable<void> {
        return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETEWithHttpInfo(tagId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTagUsingDELETE(tagId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public deleteTagUsingDELETE(tagId: string, _options?: Configuration): Observable<void> {
        return this.deleteTagUsingDELETEWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGETWithHttpInfo(tagCategoryId: string, _options?: Configuration): Observable<HttpInfo<GetTagCategoryResponse>> {
        const requestContextPromise = this.requestFactory.getCategoryUsingGET(tagCategoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getCategoryUsingGET(tagCategoryId: string, _options?: Configuration): Observable<GetTagCategoryResponse> {
        return this.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<GetTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1WithHttpInfo(tagId: string, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.getTagUsingGET1(tagId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public getTagUsingGET1(tagId: string, _options?: Configuration): Observable<Tag> {
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
    public listCompaniesForTagIdUsingGET1WithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTaggedCompaniesResponse>> {
        const requestContextPromise = this.requestFactory.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTaggedCompaniesResponse> {
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
    public listContactsWithTagIdUsingGETWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTaggedContactsResponse>> {
        const requestContextPromise = this.requestFactory.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTaggedContactsResponse> {
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
    public listTagCategoriesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTagCategoriesResponse>> {
        const requestContextPromise = this.requestFactory.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTagCategoriesResponse> {
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
    public listTagsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTagsResponse>> {
        const requestContextPromise = this.requestFactory.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTagsResponse> {
        return this.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagsResponse>) => apiResponse.data));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<void> {
        return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<HttpInfo<UpdateTagCategoryResponse>> {
        const requestContextPromise = this.requestFactory.updateTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<UpdateTagCategoryResponse> {
        return this.updateTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public updateTagUsingPATCHWithHttpInfo(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: Configuration): Observable<HttpInfo<UpdateTagResponse>> {
        const requestContextPromise = this.requestFactory.updateTagUsingPATCH(tagId, updateMask, createUpdateTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
    public updateTagUsingPATCH(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: Configuration): Observable<UpdateTagResponse> {
        return this.updateTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagResponse>) => apiResponse.data));
    }

}
