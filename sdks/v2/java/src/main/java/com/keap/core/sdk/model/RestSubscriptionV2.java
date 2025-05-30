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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestSubscriptionV2
 */
@JsonPropertyOrder({
  RestSubscriptionV2.JSON_PROPERTY_ACTIVE,
  RestSubscriptionV2.JSON_PROPERTY_ALLOW_TAX,
  RestSubscriptionV2.JSON_PROPERTY_AUTO_CHARGE,
  RestSubscriptionV2.JSON_PROPERTY_BILLING_AMOUNT,
  RestSubscriptionV2.JSON_PROPERTY_BILLING_CYCLE,
  RestSubscriptionV2.JSON_PROPERTY_BILLING_FREQUENCY,
  RestSubscriptionV2.JSON_PROPERTY_CONTACT_ID,
  RestSubscriptionV2.JSON_PROPERTY_END_DATE,
  RestSubscriptionV2.JSON_PROPERTY_ID,
  RestSubscriptionV2.JSON_PROPERTY_NEXT_BILL_DATE,
  RestSubscriptionV2.JSON_PROPERTY_PAYMENT_GATEWAY_ID,
  RestSubscriptionV2.JSON_PROPERTY_PAYMENT_METHOD_ID,
  RestSubscriptionV2.JSON_PROPERTY_PRODUCT_ID,
  RestSubscriptionV2.JSON_PROPERTY_QUANTITY,
  RestSubscriptionV2.JSON_PROPERTY_SALE_AFFILIATE_ID,
  RestSubscriptionV2.JSON_PROPERTY_START_DATE,
  RestSubscriptionV2.JSON_PROPERTY_SUBSCRIPTION_PLAN_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class RestSubscriptionV2 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private Boolean active;

  public static final String JSON_PROPERTY_ALLOW_TAX = "allow_tax";
  @jakarta.annotation.Nullable  private Boolean allowTax;

  public static final String JSON_PROPERTY_AUTO_CHARGE = "auto_charge";
  @jakarta.annotation.Nullable  private Boolean autoCharge;

  public static final String JSON_PROPERTY_BILLING_AMOUNT = "billing_amount";
  @jakarta.annotation.Nullable  private Double billingAmount;

  /**
   * Gets or Sets billingCycle
   */
  public enum BillingCycleEnum {
    YEAR(String.valueOf("YEAR")),
    
    MONTH(String.valueOf("MONTH")),
    
    WEEK(String.valueOf("WEEK")),
    
    DAY(String.valueOf("DAY")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    BillingCycleEnum(String value) {
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
    public static BillingCycleEnum fromValue(String value) {
      for (BillingCycleEnum b : BillingCycleEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_BILLING_CYCLE = "billing_cycle";
  @jakarta.annotation.Nullable  private BillingCycleEnum billingCycle;

  public static final String JSON_PROPERTY_BILLING_FREQUENCY = "billing_frequency";
  @jakarta.annotation.Nullable  private Integer billingFrequency;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_END_DATE = "end_date";
  @jakarta.annotation.Nullable  private String endDate;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NEXT_BILL_DATE = "next_bill_date";
  @jakarta.annotation.Nullable  private String nextBillDate;

  public static final String JSON_PROPERTY_PAYMENT_GATEWAY_ID = "payment_gateway_id";
  @jakarta.annotation.Nullable  private String paymentGatewayId;

  public static final String JSON_PROPERTY_PAYMENT_METHOD_ID = "payment_method_id";
  @jakarta.annotation.Nullable  private String paymentMethodId;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nullable  private Long quantity;

  public static final String JSON_PROPERTY_SALE_AFFILIATE_ID = "sale_affiliate_id";
  @jakarta.annotation.Nullable  private String saleAffiliateId;

  public static final String JSON_PROPERTY_START_DATE = "start_date";
  @jakarta.annotation.Nullable  private String startDate;

  public static final String JSON_PROPERTY_SUBSCRIPTION_PLAN_ID = "subscription_plan_id";
  @jakarta.annotation.Nullable  private String subscriptionPlanId;

  public RestSubscriptionV2() { 
  }

  public RestSubscriptionV2 active(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
    return this;
  }

  /**
   * Get active
   * @return active
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getActive() {
    return active;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActive(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
  }


  public RestSubscriptionV2 allowTax(@jakarta.annotation.Nullable Boolean allowTax) {
    this.allowTax = allowTax;
    return this;
  }

  /**
   * Get allowTax
   * @return allowTax
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ALLOW_TAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAllowTax() {
    return allowTax;
  }


  @JsonProperty(JSON_PROPERTY_ALLOW_TAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAllowTax(@jakarta.annotation.Nullable Boolean allowTax) {
    this.allowTax = allowTax;
  }


  public RestSubscriptionV2 autoCharge(@jakarta.annotation.Nullable Boolean autoCharge) {
    this.autoCharge = autoCharge;
    return this;
  }

  /**
   * Get autoCharge
   * @return autoCharge
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAutoCharge() {
    return autoCharge;
  }


  @JsonProperty(JSON_PROPERTY_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutoCharge(@jakarta.annotation.Nullable Boolean autoCharge) {
    this.autoCharge = autoCharge;
  }


  public RestSubscriptionV2 billingAmount(@jakarta.annotation.Nullable Double billingAmount) {
    this.billingAmount = billingAmount;
    return this;
  }

  /**
   * Get billingAmount
   * @return billingAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BILLING_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getBillingAmount() {
    return billingAmount;
  }


  @JsonProperty(JSON_PROPERTY_BILLING_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBillingAmount(@jakarta.annotation.Nullable Double billingAmount) {
    this.billingAmount = billingAmount;
  }


  public RestSubscriptionV2 billingCycle(@jakarta.annotation.Nullable BillingCycleEnum billingCycle) {
    this.billingCycle = billingCycle;
    return this;
  }

  /**
   * Get billingCycle
   * @return billingCycle
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BILLING_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BillingCycleEnum getBillingCycle() {
    return billingCycle;
  }


  @JsonProperty(JSON_PROPERTY_BILLING_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBillingCycle(@jakarta.annotation.Nullable BillingCycleEnum billingCycle) {
    this.billingCycle = billingCycle;
  }


  public RestSubscriptionV2 billingFrequency(@jakarta.annotation.Nullable Integer billingFrequency) {
    this.billingFrequency = billingFrequency;
    return this;
  }

  /**
   * Get billingFrequency
   * @return billingFrequency
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BILLING_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getBillingFrequency() {
    return billingFrequency;
  }


  @JsonProperty(JSON_PROPERTY_BILLING_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBillingFrequency(@jakarta.annotation.Nullable Integer billingFrequency) {
    this.billingFrequency = billingFrequency;
  }


  public RestSubscriptionV2 contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
  }


  public RestSubscriptionV2 endDate(@jakarta.annotation.Nullable String endDate) {
    this.endDate = endDate;
    return this;
  }

  /**
   * Get endDate
   * @return endDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEndDate() {
    return endDate;
  }


  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndDate(@jakarta.annotation.Nullable String endDate) {
    this.endDate = endDate;
  }


  public RestSubscriptionV2 id(@jakarta.annotation.Nullable String id) {
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


  public RestSubscriptionV2 nextBillDate(@jakarta.annotation.Nullable String nextBillDate) {
    this.nextBillDate = nextBillDate;
    return this;
  }

  /**
   * Get nextBillDate
   * @return nextBillDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_BILL_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextBillDate() {
    return nextBillDate;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_BILL_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextBillDate(@jakarta.annotation.Nullable String nextBillDate) {
    this.nextBillDate = nextBillDate;
  }


  public RestSubscriptionV2 paymentGatewayId(@jakarta.annotation.Nullable String paymentGatewayId) {
    this.paymentGatewayId = paymentGatewayId;
    return this;
  }

  /**
   * Get paymentGatewayId
   * @return paymentGatewayId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_GATEWAY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentGatewayId() {
    return paymentGatewayId;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_GATEWAY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentGatewayId(@jakarta.annotation.Nullable String paymentGatewayId) {
    this.paymentGatewayId = paymentGatewayId;
  }


  public RestSubscriptionV2 paymentMethodId(@jakarta.annotation.Nullable String paymentMethodId) {
    this.paymentMethodId = paymentMethodId;
    return this;
  }

  /**
   * Get paymentMethodId
   * @return paymentMethodId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentMethodId() {
    return paymentMethodId;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentMethodId(@jakarta.annotation.Nullable String paymentMethodId) {
    this.paymentMethodId = paymentMethodId;
  }


  public RestSubscriptionV2 productId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Get productId
   * @return productId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProductId() {
    return productId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
  }


  public RestSubscriptionV2 quantity(@jakarta.annotation.Nullable Long quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Get quantity
   * @return quantity
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getQuantity() {
    return quantity;
  }


  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuantity(@jakarta.annotation.Nullable Long quantity) {
    this.quantity = quantity;
  }


  public RestSubscriptionV2 saleAffiliateId(@jakarta.annotation.Nullable String saleAffiliateId) {
    this.saleAffiliateId = saleAffiliateId;
    return this;
  }

  /**
   * Get saleAffiliateId
   * @return saleAffiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SALE_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSaleAffiliateId() {
    return saleAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_SALE_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSaleAffiliateId(@jakarta.annotation.Nullable String saleAffiliateId) {
    this.saleAffiliateId = saleAffiliateId;
  }


  public RestSubscriptionV2 startDate(@jakarta.annotation.Nullable String startDate) {
    this.startDate = startDate;
    return this;
  }

  /**
   * Get startDate
   * @return startDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStartDate() {
    return startDate;
  }


  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartDate(@jakarta.annotation.Nullable String startDate) {
    this.startDate = startDate;
  }


  public RestSubscriptionV2 subscriptionPlanId(@jakarta.annotation.Nullable String subscriptionPlanId) {
    this.subscriptionPlanId = subscriptionPlanId;
    return this;
  }

  /**
   * Get subscriptionPlanId
   * @return subscriptionPlanId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionPlanId() {
    return subscriptionPlanId;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionPlanId(@jakarta.annotation.Nullable String subscriptionPlanId) {
    this.subscriptionPlanId = subscriptionPlanId;
  }

  /**
   * Return true if this RestSubscriptionV2 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestSubscriptionV2 restSubscriptionV2 = (RestSubscriptionV2) o;
    return Objects.equals(this.active, restSubscriptionV2.active) &&
        Objects.equals(this.allowTax, restSubscriptionV2.allowTax) &&
        Objects.equals(this.autoCharge, restSubscriptionV2.autoCharge) &&
        Objects.equals(this.billingAmount, restSubscriptionV2.billingAmount) &&
        Objects.equals(this.billingCycle, restSubscriptionV2.billingCycle) &&
        Objects.equals(this.billingFrequency, restSubscriptionV2.billingFrequency) &&
        Objects.equals(this.contactId, restSubscriptionV2.contactId) &&
        Objects.equals(this.endDate, restSubscriptionV2.endDate) &&
        Objects.equals(this.id, restSubscriptionV2.id) &&
        Objects.equals(this.nextBillDate, restSubscriptionV2.nextBillDate) &&
        Objects.equals(this.paymentGatewayId, restSubscriptionV2.paymentGatewayId) &&
        Objects.equals(this.paymentMethodId, restSubscriptionV2.paymentMethodId) &&
        Objects.equals(this.productId, restSubscriptionV2.productId) &&
        Objects.equals(this.quantity, restSubscriptionV2.quantity) &&
        Objects.equals(this.saleAffiliateId, restSubscriptionV2.saleAffiliateId) &&
        Objects.equals(this.startDate, restSubscriptionV2.startDate) &&
        Objects.equals(this.subscriptionPlanId, restSubscriptionV2.subscriptionPlanId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, allowTax, autoCharge, billingAmount, billingCycle, billingFrequency, contactId, endDate, id, nextBillDate, paymentGatewayId, paymentMethodId, productId, quantity, saleAffiliateId, startDate, subscriptionPlanId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestSubscriptionV2 {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    allowTax: ").append(toIndentedString(allowTax)).append("\n");
    sb.append("    autoCharge: ").append(toIndentedString(autoCharge)).append("\n");
    sb.append("    billingAmount: ").append(toIndentedString(billingAmount)).append("\n");
    sb.append("    billingCycle: ").append(toIndentedString(billingCycle)).append("\n");
    sb.append("    billingFrequency: ").append(toIndentedString(billingFrequency)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    nextBillDate: ").append(toIndentedString(nextBillDate)).append("\n");
    sb.append("    paymentGatewayId: ").append(toIndentedString(paymentGatewayId)).append("\n");
    sb.append("    paymentMethodId: ").append(toIndentedString(paymentMethodId)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    saleAffiliateId: ").append(toIndentedString(saleAffiliateId)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    subscriptionPlanId: ").append(toIndentedString(subscriptionPlanId)).append("\n");
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
    
        private RestSubscriptionV2 instance;
    
        public Builder() {
          this(new RestSubscriptionV2());
        }
    
        protected Builder(RestSubscriptionV2 instance) {
          this.instance = instance;
        }
    
        public RestSubscriptionV2.Builder active(Boolean active) {
              this.instance.active = active;
          return this;
        }
            public RestSubscriptionV2.Builder allowTax(Boolean allowTax) {
              this.instance.allowTax = allowTax;
          return this;
        }
            public RestSubscriptionV2.Builder autoCharge(Boolean autoCharge) {
              this.instance.autoCharge = autoCharge;
          return this;
        }
            public RestSubscriptionV2.Builder billingAmount(Double billingAmount) {
              this.instance.billingAmount = billingAmount;
          return this;
        }
            public RestSubscriptionV2.Builder billingCycle(BillingCycleEnum billingCycle) {
              this.instance.billingCycle = billingCycle;
          return this;
        }
            public RestSubscriptionV2.Builder billingFrequency(Integer billingFrequency) {
              this.instance.billingFrequency = billingFrequency;
          return this;
        }
            public RestSubscriptionV2.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public RestSubscriptionV2.Builder endDate(String endDate) {
              this.instance.endDate = endDate;
          return this;
        }
            public RestSubscriptionV2.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestSubscriptionV2.Builder nextBillDate(String nextBillDate) {
              this.instance.nextBillDate = nextBillDate;
          return this;
        }
            public RestSubscriptionV2.Builder paymentGatewayId(String paymentGatewayId) {
              this.instance.paymentGatewayId = paymentGatewayId;
          return this;
        }
            public RestSubscriptionV2.Builder paymentMethodId(String paymentMethodId) {
              this.instance.paymentMethodId = paymentMethodId;
          return this;
        }
            public RestSubscriptionV2.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public RestSubscriptionV2.Builder quantity(Long quantity) {
              this.instance.quantity = quantity;
          return this;
        }
            public RestSubscriptionV2.Builder saleAffiliateId(String saleAffiliateId) {
              this.instance.saleAffiliateId = saleAffiliateId;
          return this;
        }
            public RestSubscriptionV2.Builder startDate(String startDate) {
              this.instance.startDate = startDate;
          return this;
        }
            public RestSubscriptionV2.Builder subscriptionPlanId(String subscriptionPlanId) {
              this.instance.subscriptionPlanId = subscriptionPlanId;
          return this;
        }
        
    
        /**
        * returns a built RestSubscriptionV2 instance.
        *
        * The builder is not reusable.
        */
        public RestSubscriptionV2 build() {
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
      public static RestSubscriptionV2.Builder builder() {
        return new RestSubscriptionV2.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestSubscriptionV2.Builder toBuilder() {
        return new RestSubscriptionV2.Builder()
          .active(getActive())
          .allowTax(getAllowTax())
          .autoCharge(getAutoCharge())
          .billingAmount(getBillingAmount())
          .billingCycle(getBillingCycle())
          .billingFrequency(getBillingFrequency())
          .contactId(getContactId())
          .endDate(getEndDate())
          .id(getId())
          .nextBillDate(getNextBillDate())
          .paymentGatewayId(getPaymentGatewayId())
          .paymentMethodId(getPaymentMethodId())
          .productId(getProductId())
          .quantity(getQuantity())
          .saleAffiliateId(getSaleAffiliateId())
          .startDate(getStartDate())
          .subscriptionPlanId(getSubscriptionPlanId());
      }
}

