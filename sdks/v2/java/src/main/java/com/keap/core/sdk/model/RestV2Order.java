/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keap.core.sdk.model.BasicContact;
import com.keap.core.sdk.model.CurrencyValue;
import com.keap.core.sdk.model.InvoiceFile;
import com.keap.core.sdk.model.PaymentPlan;
import com.keap.core.sdk.model.RestV2OrderItem;
import com.keap.core.sdk.model.ShippingInformation;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestV2Order
 */
@JsonPropertyOrder({
  RestV2Order.JSON_PROPERTY_ALLOW_PAYMENT,
  RestV2Order.JSON_PROPERTY_ALLOW_PAYPAL,
  RestV2Order.JSON_PROPERTY_CONTACT,
  RestV2Order.JSON_PROPERTY_CREATION_TIME,
  RestV2Order.JSON_PROPERTY_FILES,
  RestV2Order.JSON_PROPERTY_ID,
  RestV2Order.JSON_PROPERTY_INVOICE_NUMBER,
  RestV2Order.JSON_PROPERTY_LEAD_AFFILIATE_ID,
  RestV2Order.JSON_PROPERTY_MODIFICATION_TIME,
  RestV2Order.JSON_PROPERTY_NOTES,
  RestV2Order.JSON_PROPERTY_ORDER_ITEMS,
  RestV2Order.JSON_PROPERTY_ORDER_TIME,
  RestV2Order.JSON_PROPERTY_ORDER_TYPE,
  RestV2Order.JSON_PROPERTY_PAYMENT_PLAN,
  RestV2Order.JSON_PROPERTY_REFUND_TOTAL,
  RestV2Order.JSON_PROPERTY_SALES_AFFILIATE_ID,
  RestV2Order.JSON_PROPERTY_SHIPPING_INFORMATION,
  RestV2Order.JSON_PROPERTY_SOURCE_TYPE,
  RestV2Order.JSON_PROPERTY_STATUS,
  RestV2Order.JSON_PROPERTY_TERMS,
  RestV2Order.JSON_PROPERTY_TITLE,
  RestV2Order.JSON_PROPERTY_TOTAL,
  RestV2Order.JSON_PROPERTY_TOTAL_DUE,
  RestV2Order.JSON_PROPERTY_TOTAL_PAID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class RestV2Order implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ALLOW_PAYMENT = "allow_payment";
  @jakarta.annotation.Nullable  private Boolean allowPayment;

  public static final String JSON_PROPERTY_ALLOW_PAYPAL = "allow_paypal";
  @jakarta.annotation.Nullable  private Boolean allowPaypal;

  public static final String JSON_PROPERTY_CONTACT = "contact";
  @jakarta.annotation.Nullable  private BasicContact contact;

  public static final String JSON_PROPERTY_CREATION_TIME = "creation_time";
  @jakarta.annotation.Nullable  private String creationTime;

  public static final String JSON_PROPERTY_FILES = "files";
  @jakarta.annotation.Nullable  private List<@Valid InvoiceFile> files = new ArrayList<>();

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INVOICE_NUMBER = "invoice_number";
  @jakarta.annotation.Nullable  private String invoiceNumber;

  public static final String JSON_PROPERTY_LEAD_AFFILIATE_ID = "lead_affiliate_id";
  @jakarta.annotation.Nullable  private String leadAffiliateId;

  public static final String JSON_PROPERTY_MODIFICATION_TIME = "modification_time";
  @jakarta.annotation.Nullable  private String modificationTime;

  public static final String JSON_PROPERTY_NOTES = "notes";
  @jakarta.annotation.Nullable  private String notes;

  public static final String JSON_PROPERTY_ORDER_ITEMS = "order_items";
  @jakarta.annotation.Nullable  private List<@Valid RestV2OrderItem> orderItems = new ArrayList<>();

  public static final String JSON_PROPERTY_ORDER_TIME = "order_time";
  @jakarta.annotation.Nullable  private String orderTime;

  /**
   * The order type. Valid values are: ONLINE, OFFLINE.
   */
  public enum OrderTypeEnum {
    OFFLINE(String.valueOf("OFFLINE")),
    
    ONLINE(String.valueOf("ONLINE")),
    
    UNKNOWN(String.valueOf("UNKNOWN")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    OrderTypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static OrderTypeEnum fromValue(String value) {
      for (OrderTypeEnum b : OrderTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_ORDER_TYPE = "order_type";
  @jakarta.annotation.Nullable  private OrderTypeEnum orderType;

  public static final String JSON_PROPERTY_PAYMENT_PLAN = "payment_plan";
  @jakarta.annotation.Nullable  private PaymentPlan paymentPlan;

  public static final String JSON_PROPERTY_REFUND_TOTAL = "refund_total";
  @jakarta.annotation.Nullable  private CurrencyValue refundTotal;

  public static final String JSON_PROPERTY_SALES_AFFILIATE_ID = "sales_affiliate_id";
  @jakarta.annotation.Nullable  private String salesAffiliateId;

  public static final String JSON_PROPERTY_SHIPPING_INFORMATION = "shipping_information";
  @jakarta.annotation.Nullable  private ShippingInformation shippingInformation;

  /**
   * The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN.
   */
  public enum SourceTypeEnum {
    INVOICE(String.valueOf("INVOICE")),
    
    API(String.valueOf("API")),
    
    CHECKOUT_FORM(String.valueOf("CHECKOUT_FORM")),
    
    MANUAL_PAYMENT(String.valueOf("MANUAL_PAYMENT")),
    
    QUICKBOOKS(String.valueOf("QUICKBOOKS")),
    
    UNKNOWN(String.valueOf("UNKNOWN")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    SourceTypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static SourceTypeEnum fromValue(String value) {
      for (SourceTypeEnum b : SourceTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_SOURCE_TYPE = "source_type";
  @jakarta.annotation.Nullable  private SourceTypeEnum sourceType;

  /**
   * The order status. Valid values are: DRAFT, SENT, VIEWED, PAID.
   */
  public enum StatusEnum {
    DRAFT(String.valueOf("DRAFT")),
    
    PAID(String.valueOf("PAID")),
    
    SENT(String.valueOf("SENT")),
    
    VIEWED(String.valueOf("VIEWED")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static StatusEnum fromValue(String value) {
      for (StatusEnum b : StatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_STATUS = "status";
  @jakarta.annotation.Nullable  private StatusEnum status;

  public static final String JSON_PROPERTY_TERMS = "terms";
  @jakarta.annotation.Nullable  private String terms;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_TOTAL = "total";
  @jakarta.annotation.Nullable  private CurrencyValue total;

  public static final String JSON_PROPERTY_TOTAL_DUE = "total_due";
  @jakarta.annotation.Nullable  private CurrencyValue totalDue;

  public static final String JSON_PROPERTY_TOTAL_PAID = "total_paid";
  @jakarta.annotation.Nullable  private CurrencyValue totalPaid;

  public RestV2Order() { 
  }

  public RestV2Order allowPayment(@jakarta.annotation.Nullable Boolean allowPayment) {
    this.allowPayment = allowPayment;
    return this;
  }

  /**
   * Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition.
   * @return allowPayment
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition.")
  @JsonProperty(JSON_PROPERTY_ALLOW_PAYMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAllowPayment() {
    return allowPayment;
  }


  @JsonProperty(JSON_PROPERTY_ALLOW_PAYMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAllowPayment(@jakarta.annotation.Nullable Boolean allowPayment) {
    this.allowPayment = allowPayment;
  }


  public RestV2Order allowPaypal(@jakarta.annotation.Nullable Boolean allowPaypal) {
    this.allowPaypal = allowPaypal;
    return this;
  }

  /**
   * Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition.
   * @return allowPaypal
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition.")
  @JsonProperty(JSON_PROPERTY_ALLOW_PAYPAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAllowPaypal() {
    return allowPaypal;
  }


  @JsonProperty(JSON_PROPERTY_ALLOW_PAYPAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAllowPaypal(@jakarta.annotation.Nullable Boolean allowPaypal) {
    this.allowPaypal = allowPaypal;
  }


  public RestV2Order contact(@jakarta.annotation.Nullable BasicContact contact) {
    this.contact = contact;
    return this;
  }

  /**
   * Get contact
   * @return contact
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BasicContact getContact() {
    return contact;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContact(@jakarta.annotation.Nullable BasicContact contact) {
    this.contact = contact;
  }


  public RestV2Order creationTime(@jakarta.annotation.Nullable String creationTime) {
    this.creationTime = creationTime;
    return this;
  }

  /**
   * When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)
   * @return creationTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)")
  @JsonProperty(JSON_PROPERTY_CREATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreationTime() {
    return creationTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreationTime(@jakarta.annotation.Nullable String creationTime) {
    this.creationTime = creationTime;
  }


  public RestV2Order files(@jakarta.annotation.Nullable List<@Valid InvoiceFile> files) {
    this.files = files;
    return this;
  }

  public RestV2Order addFilesItem(InvoiceFile filesItem) {
    if (this.files == null) {
      this.files = new ArrayList<>();
    }
    this.files.add(filesItem);
    return this;
  }

  /**
   * A list of attached files to this order. Applies only to Keap Pro/Max edition.
   * @return files
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A list of attached files to this order. Applies only to Keap Pro/Max edition.")
  @JsonProperty(JSON_PROPERTY_FILES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid InvoiceFile> getFiles() {
    return files;
  }


  @JsonProperty(JSON_PROPERTY_FILES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFiles(@jakarta.annotation.Nullable List<@Valid InvoiceFile> files) {
    this.files = files;
  }


  public RestV2Order id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public RestV2Order invoiceNumber(@jakarta.annotation.Nullable String invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }

  /**
   * The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported.
   * @return invoiceNumber
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported.")
  @JsonProperty(JSON_PROPERTY_INVOICE_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getInvoiceNumber() {
    return invoiceNumber;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoiceNumber(@jakarta.annotation.Nullable String invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
  }


  public RestV2Order leadAffiliateId(@jakarta.annotation.Nullable String leadAffiliateId) {
    this.leadAffiliateId = leadAffiliateId;
    return this;
  }

  /**
   * Get leadAffiliateId
   * @return leadAffiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LEAD_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLeadAffiliateId() {
    return leadAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_LEAD_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeadAffiliateId(@jakarta.annotation.Nullable String leadAffiliateId) {
    this.leadAffiliateId = leadAffiliateId;
  }


  public RestV2Order modificationTime(@jakarta.annotation.Nullable String modificationTime) {
    this.modificationTime = modificationTime;
    return this;
  }

  /**
   * When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)
   * @return modificationTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)")
  @JsonProperty(JSON_PROPERTY_MODIFICATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getModificationTime() {
    return modificationTime;
  }


  @JsonProperty(JSON_PROPERTY_MODIFICATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModificationTime(@jakarta.annotation.Nullable String modificationTime) {
    this.modificationTime = modificationTime;
  }


  public RestV2Order notes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
    return this;
  }

  /**
   * Get notes
   * @return notes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNotes() {
    return notes;
  }


  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
  }


  public RestV2Order orderItems(@jakarta.annotation.Nullable List<@Valid RestV2OrderItem> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public RestV2Order addOrderItemsItem(RestV2OrderItem orderItemsItem) {
    if (this.orderItems == null) {
      this.orderItems = new ArrayList<>();
    }
    this.orderItems.add(orderItemsItem);
    return this;
  }

  /**
   * Get orderItems
   * @return orderItems
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid RestV2OrderItem> getOrderItems() {
    return orderItems;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderItems(@jakarta.annotation.Nullable List<@Valid RestV2OrderItem> orderItems) {
    this.orderItems = orderItems;
  }


  public RestV2Order orderTime(@jakarta.annotation.Nullable String orderTime) {
    this.orderTime = orderTime;
    return this;
  }

  /**
   * A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)
   * @return orderTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z)")
  @JsonProperty(JSON_PROPERTY_ORDER_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOrderTime() {
    return orderTime;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderTime(@jakarta.annotation.Nullable String orderTime) {
    this.orderTime = orderTime;
  }


  public RestV2Order orderType(@jakarta.annotation.Nullable OrderTypeEnum orderType) {
    this.orderType = orderType;
    return this;
  }

  /**
   * The order type. Valid values are: ONLINE, OFFLINE.
   * @return orderType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The order type. Valid values are: ONLINE, OFFLINE.")
  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public OrderTypeEnum getOrderType() {
    return orderType;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderType(@jakarta.annotation.Nullable OrderTypeEnum orderType) {
    this.orderType = orderType;
  }


  public RestV2Order paymentPlan(@jakarta.annotation.Nullable PaymentPlan paymentPlan) {
    this.paymentPlan = paymentPlan;
    return this;
  }

  /**
   * Get paymentPlan
   * @return paymentPlan
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_PLAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public PaymentPlan getPaymentPlan() {
    return paymentPlan;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_PLAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentPlan(@jakarta.annotation.Nullable PaymentPlan paymentPlan) {
    this.paymentPlan = paymentPlan;
  }


  public RestV2Order refundTotal(@jakarta.annotation.Nullable CurrencyValue refundTotal) {
    this.refundTotal = refundTotal;
    return this;
  }

  /**
   * Get refundTotal
   * @return refundTotal
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REFUND_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getRefundTotal() {
    return refundTotal;
  }


  @JsonProperty(JSON_PROPERTY_REFUND_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRefundTotal(@jakarta.annotation.Nullable CurrencyValue refundTotal) {
    this.refundTotal = refundTotal;
  }


  public RestV2Order salesAffiliateId(@jakarta.annotation.Nullable String salesAffiliateId) {
    this.salesAffiliateId = salesAffiliateId;
    return this;
  }

  /**
   * Get salesAffiliateId
   * @return salesAffiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SALES_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSalesAffiliateId() {
    return salesAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_SALES_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSalesAffiliateId(@jakarta.annotation.Nullable String salesAffiliateId) {
    this.salesAffiliateId = salesAffiliateId;
  }


  public RestV2Order shippingInformation(@jakarta.annotation.Nullable ShippingInformation shippingInformation) {
    this.shippingInformation = shippingInformation;
    return this;
  }

  /**
   * Get shippingInformation
   * @return shippingInformation
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SHIPPING_INFORMATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ShippingInformation getShippingInformation() {
    return shippingInformation;
  }


  @JsonProperty(JSON_PROPERTY_SHIPPING_INFORMATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShippingInformation(@jakarta.annotation.Nullable ShippingInformation shippingInformation) {
    this.shippingInformation = shippingInformation;
  }


  public RestV2Order sourceType(@jakarta.annotation.Nullable SourceTypeEnum sourceType) {
    this.sourceType = sourceType;
    return this;
  }

  /**
   * The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN.
   * @return sourceType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN.")
  @JsonProperty(JSON_PROPERTY_SOURCE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public SourceTypeEnum getSourceType() {
    return sourceType;
  }


  @JsonProperty(JSON_PROPERTY_SOURCE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSourceType(@jakarta.annotation.Nullable SourceTypeEnum sourceType) {
    this.sourceType = sourceType;
  }


  public RestV2Order status(@jakarta.annotation.Nullable StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * The order status. Valid values are: DRAFT, SENT, VIEWED, PAID.
   * @return status
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The order status. Valid values are: DRAFT, SENT, VIEWED, PAID.")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public StatusEnum getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(@jakarta.annotation.Nullable StatusEnum status) {
    this.status = status;
  }


  public RestV2Order terms(@jakarta.annotation.Nullable String terms) {
    this.terms = terms;
    return this;
  }

  /**
   * Get terms
   * @return terms
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TERMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTerms() {
    return terms;
  }


  @JsonProperty(JSON_PROPERTY_TERMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTerms(@jakarta.annotation.Nullable String terms) {
    this.terms = terms;
  }


  public RestV2Order title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }


  public RestV2Order total(@jakarta.annotation.Nullable CurrencyValue total) {
    this.total = total;
    return this;
  }

  /**
   * Get total
   * @return total
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getTotal() {
    return total;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotal(@jakarta.annotation.Nullable CurrencyValue total) {
    this.total = total;
  }


  public RestV2Order totalDue(@jakarta.annotation.Nullable CurrencyValue totalDue) {
    this.totalDue = totalDue;
    return this;
  }

  /**
   * Get totalDue
   * @return totalDue
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TOTAL_DUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getTotalDue() {
    return totalDue;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_DUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalDue(@jakarta.annotation.Nullable CurrencyValue totalDue) {
    this.totalDue = totalDue;
  }


  public RestV2Order totalPaid(@jakarta.annotation.Nullable CurrencyValue totalPaid) {
    this.totalPaid = totalPaid;
    return this;
  }

  /**
   * Get totalPaid
   * @return totalPaid
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TOTAL_PAID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getTotalPaid() {
    return totalPaid;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_PAID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalPaid(@jakarta.annotation.Nullable CurrencyValue totalPaid) {
    this.totalPaid = totalPaid;
  }

  /**
   * Return true if this RestV2Order object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestV2Order restV2Order = (RestV2Order) o;
    return Objects.equals(this.allowPayment, restV2Order.allowPayment) &&
        Objects.equals(this.allowPaypal, restV2Order.allowPaypal) &&
        Objects.equals(this.contact, restV2Order.contact) &&
        Objects.equals(this.creationTime, restV2Order.creationTime) &&
        Objects.equals(this.files, restV2Order.files) &&
        Objects.equals(this.id, restV2Order.id) &&
        Objects.equals(this.invoiceNumber, restV2Order.invoiceNumber) &&
        Objects.equals(this.leadAffiliateId, restV2Order.leadAffiliateId) &&
        Objects.equals(this.modificationTime, restV2Order.modificationTime) &&
        Objects.equals(this.notes, restV2Order.notes) &&
        Objects.equals(this.orderItems, restV2Order.orderItems) &&
        Objects.equals(this.orderTime, restV2Order.orderTime) &&
        Objects.equals(this.orderType, restV2Order.orderType) &&
        Objects.equals(this.paymentPlan, restV2Order.paymentPlan) &&
        Objects.equals(this.refundTotal, restV2Order.refundTotal) &&
        Objects.equals(this.salesAffiliateId, restV2Order.salesAffiliateId) &&
        Objects.equals(this.shippingInformation, restV2Order.shippingInformation) &&
        Objects.equals(this.sourceType, restV2Order.sourceType) &&
        Objects.equals(this.status, restV2Order.status) &&
        Objects.equals(this.terms, restV2Order.terms) &&
        Objects.equals(this.title, restV2Order.title) &&
        Objects.equals(this.total, restV2Order.total) &&
        Objects.equals(this.totalDue, restV2Order.totalDue) &&
        Objects.equals(this.totalPaid, restV2Order.totalPaid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(allowPayment, allowPaypal, contact, creationTime, files, id, invoiceNumber, leadAffiliateId, modificationTime, notes, orderItems, orderTime, orderType, paymentPlan, refundTotal, salesAffiliateId, shippingInformation, sourceType, status, terms, title, total, totalDue, totalPaid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestV2Order {\n");
    sb.append("    allowPayment: ").append(toIndentedString(allowPayment)).append("\n");
    sb.append("    allowPaypal: ").append(toIndentedString(allowPaypal)).append("\n");
    sb.append("    contact: ").append(toIndentedString(contact)).append("\n");
    sb.append("    creationTime: ").append(toIndentedString(creationTime)).append("\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    invoiceNumber: ").append(toIndentedString(invoiceNumber)).append("\n");
    sb.append("    leadAffiliateId: ").append(toIndentedString(leadAffiliateId)).append("\n");
    sb.append("    modificationTime: ").append(toIndentedString(modificationTime)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    orderTime: ").append(toIndentedString(orderTime)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
    sb.append("    paymentPlan: ").append(toIndentedString(paymentPlan)).append("\n");
    sb.append("    refundTotal: ").append(toIndentedString(refundTotal)).append("\n");
    sb.append("    salesAffiliateId: ").append(toIndentedString(salesAffiliateId)).append("\n");
    sb.append("    shippingInformation: ").append(toIndentedString(shippingInformation)).append("\n");
    sb.append("    sourceType: ").append(toIndentedString(sourceType)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    terms: ").append(toIndentedString(terms)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    totalDue: ").append(toIndentedString(totalDue)).append("\n");
    sb.append("    totalPaid: ").append(toIndentedString(totalPaid)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private RestV2Order instance;
    
        public Builder() {
          this(new RestV2Order());
        }
    
        protected Builder(RestV2Order instance) {
          this.instance = instance;
        }
    
        public RestV2Order.Builder allowPayment(Boolean allowPayment) {
              this.instance.allowPayment = allowPayment;
          return this;
        }
            public RestV2Order.Builder allowPaypal(Boolean allowPaypal) {
              this.instance.allowPaypal = allowPaypal;
          return this;
        }
            public RestV2Order.Builder contact(BasicContact contact) {
              this.instance.contact = contact;
          return this;
        }
            public RestV2Order.Builder creationTime(String creationTime) {
              this.instance.creationTime = creationTime;
          return this;
        }
            public RestV2Order.Builder files(List<InvoiceFile> files) {
              this.instance.files = files;
          return this;
        }
            public RestV2Order.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestV2Order.Builder invoiceNumber(String invoiceNumber) {
              this.instance.invoiceNumber = invoiceNumber;
          return this;
        }
            public RestV2Order.Builder leadAffiliateId(String leadAffiliateId) {
              this.instance.leadAffiliateId = leadAffiliateId;
          return this;
        }
            public RestV2Order.Builder modificationTime(String modificationTime) {
              this.instance.modificationTime = modificationTime;
          return this;
        }
            public RestV2Order.Builder notes(String notes) {
              this.instance.notes = notes;
          return this;
        }
            public RestV2Order.Builder orderItems(List<RestV2OrderItem> orderItems) {
              this.instance.orderItems = orderItems;
          return this;
        }
            public RestV2Order.Builder orderTime(String orderTime) {
              this.instance.orderTime = orderTime;
          return this;
        }
            public RestV2Order.Builder orderType(OrderTypeEnum orderType) {
              this.instance.orderType = orderType;
          return this;
        }
            public RestV2Order.Builder paymentPlan(PaymentPlan paymentPlan) {
              this.instance.paymentPlan = paymentPlan;
          return this;
        }
            public RestV2Order.Builder refundTotal(CurrencyValue refundTotal) {
              this.instance.refundTotal = refundTotal;
          return this;
        }
            public RestV2Order.Builder salesAffiliateId(String salesAffiliateId) {
              this.instance.salesAffiliateId = salesAffiliateId;
          return this;
        }
            public RestV2Order.Builder shippingInformation(ShippingInformation shippingInformation) {
              this.instance.shippingInformation = shippingInformation;
          return this;
        }
            public RestV2Order.Builder sourceType(SourceTypeEnum sourceType) {
              this.instance.sourceType = sourceType;
          return this;
        }
            public RestV2Order.Builder status(StatusEnum status) {
              this.instance.status = status;
          return this;
        }
            public RestV2Order.Builder terms(String terms) {
              this.instance.terms = terms;
          return this;
        }
            public RestV2Order.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public RestV2Order.Builder total(CurrencyValue total) {
              this.instance.total = total;
          return this;
        }
            public RestV2Order.Builder totalDue(CurrencyValue totalDue) {
              this.instance.totalDue = totalDue;
          return this;
        }
            public RestV2Order.Builder totalPaid(CurrencyValue totalPaid) {
              this.instance.totalPaid = totalPaid;
          return this;
        }
        
    
        /**
        * returns a built RestV2Order instance.
        *
        * The builder is not reusable.
        */
        public RestV2Order build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static RestV2Order.Builder builder() {
        return new RestV2Order.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestV2Order.Builder toBuilder() {
        return new RestV2Order.Builder()
          .allowPayment(getAllowPayment())
          .allowPaypal(getAllowPaypal())
          .contact(getContact())
          .creationTime(getCreationTime())
          .files(getFiles())
          .id(getId())
          .invoiceNumber(getInvoiceNumber())
          .leadAffiliateId(getLeadAffiliateId())
          .modificationTime(getModificationTime())
          .notes(getNotes())
          .orderItems(getOrderItems())
          .orderTime(getOrderTime())
          .orderType(getOrderType())
          .paymentPlan(getPaymentPlan())
          .refundTotal(getRefundTotal())
          .salesAffiliateId(getSalesAffiliateId())
          .shippingInformation(getShippingInformation())
          .sourceType(getSourceType())
          .status(getStatus())
          .terms(getTerms())
          .title(getTitle())
          .total(getTotal())
          .totalDue(getTotalDue())
          .totalPaid(getTotalPaid());
      }
}

