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
 * RestApplyCommissionRequest
 */
@JsonPropertyOrder({
  RestApplyCommissionRequest.JSON_PROPERTY_COMMISSION_AMOUNT,
  RestApplyCommissionRequest.JSON_PROPERTY_COMMISSION_DATE,
  RestApplyCommissionRequest.JSON_PROPERTY_DESCRIPTION,
  RestApplyCommissionRequest.JSON_PROPERTY_PAY_PERCENT,
  RestApplyCommissionRequest.JSON_PROPERTY_PAYOUT_TYPE,
  RestApplyCommissionRequest.JSON_PROPERTY_REFERRAL_PARTNER_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class RestApplyCommissionRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COMMISSION_AMOUNT = "commission_amount";
  @jakarta.annotation.Nullable  private Double commissionAmount;

  public static final String JSON_PROPERTY_COMMISSION_DATE = "commission_date";
  @jakarta.annotation.Nullable  private String commissionDate;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_PAY_PERCENT = "pay_percent";
  @jakarta.annotation.Nullable  private Double payPercent;

  /**
   * The payout type
   */
  public enum PayoutTypeEnum {
    UPFRONT(String.valueOf("UPFRONT")),
    
    PAYMENT_RECEIVED(String.valueOf("PAYMENT_RECEIVED")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    PayoutTypeEnum(String value) {
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
    public static PayoutTypeEnum fromValue(String value) {
      for (PayoutTypeEnum b : PayoutTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_PAYOUT_TYPE = "payout_type";
  @jakarta.annotation.Nonnull  private PayoutTypeEnum payoutType;

  public static final String JSON_PROPERTY_REFERRAL_PARTNER_ID = "referral_partner_id";
  @jakarta.annotation.Nonnull  private String referralPartnerId;

  public RestApplyCommissionRequest() { 
  }

  public RestApplyCommissionRequest commissionAmount(@jakarta.annotation.Nullable Double commissionAmount) {
    this.commissionAmount = commissionAmount;
    return this;
  }

  /**
   * Get commissionAmount
   * @return commissionAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMMISSION_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getCommissionAmount() {
    return commissionAmount;
  }


  @JsonProperty(JSON_PROPERTY_COMMISSION_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCommissionAmount(@jakarta.annotation.Nullable Double commissionAmount) {
    this.commissionAmount = commissionAmount;
  }


  public RestApplyCommissionRequest commissionDate(@jakarta.annotation.Nullable String commissionDate) {
    this.commissionDate = commissionDate;
    return this;
  }

  /**
   * Get commissionDate
   * @return commissionDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMMISSION_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCommissionDate() {
    return commissionDate;
  }


  @JsonProperty(JSON_PROPERTY_COMMISSION_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCommissionDate(@jakarta.annotation.Nullable String commissionDate) {
    this.commissionDate = commissionDate;
  }


  public RestApplyCommissionRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public RestApplyCommissionRequest payPercent(@jakarta.annotation.Nullable Double payPercent) {
    this.payPercent = payPercent;
    return this;
  }

  /**
   * Get payPercent
   * @return payPercent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAY_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPayPercent() {
    return payPercent;
  }


  @JsonProperty(JSON_PROPERTY_PAY_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPayPercent(@jakarta.annotation.Nullable Double payPercent) {
    this.payPercent = payPercent;
  }


  public RestApplyCommissionRequest payoutType(@jakarta.annotation.Nonnull PayoutTypeEnum payoutType) {
    this.payoutType = payoutType;
    return this;
  }

  /**
   * The payout type
   * @return payoutType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The payout type")
  @JsonProperty(JSON_PROPERTY_PAYOUT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public PayoutTypeEnum getPayoutType() {
    return payoutType;
  }


  @JsonProperty(JSON_PROPERTY_PAYOUT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPayoutType(@jakarta.annotation.Nonnull PayoutTypeEnum payoutType) {
    this.payoutType = payoutType;
  }


  public RestApplyCommissionRequest referralPartnerId(@jakarta.annotation.Nonnull String referralPartnerId) {
    this.referralPartnerId = referralPartnerId;
    return this;
  }

  /**
   * The referral partner id
   * @return referralPartnerId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The referral partner id")
  @JsonProperty(JSON_PROPERTY_REFERRAL_PARTNER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getReferralPartnerId() {
    return referralPartnerId;
  }


  @JsonProperty(JSON_PROPERTY_REFERRAL_PARTNER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setReferralPartnerId(@jakarta.annotation.Nonnull String referralPartnerId) {
    this.referralPartnerId = referralPartnerId;
  }

  /**
   * Return true if this RestApplyCommissionRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestApplyCommissionRequest restApplyCommissionRequest = (RestApplyCommissionRequest) o;
    return Objects.equals(this.commissionAmount, restApplyCommissionRequest.commissionAmount) &&
        Objects.equals(this.commissionDate, restApplyCommissionRequest.commissionDate) &&
        Objects.equals(this.description, restApplyCommissionRequest.description) &&
        Objects.equals(this.payPercent, restApplyCommissionRequest.payPercent) &&
        Objects.equals(this.payoutType, restApplyCommissionRequest.payoutType) &&
        Objects.equals(this.referralPartnerId, restApplyCommissionRequest.referralPartnerId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(commissionAmount, commissionDate, description, payPercent, payoutType, referralPartnerId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestApplyCommissionRequest {\n");
    sb.append("    commissionAmount: ").append(toIndentedString(commissionAmount)).append("\n");
    sb.append("    commissionDate: ").append(toIndentedString(commissionDate)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    payPercent: ").append(toIndentedString(payPercent)).append("\n");
    sb.append("    payoutType: ").append(toIndentedString(payoutType)).append("\n");
    sb.append("    referralPartnerId: ").append(toIndentedString(referralPartnerId)).append("\n");
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
    
        private RestApplyCommissionRequest instance;
    
        public Builder() {
          this(new RestApplyCommissionRequest());
        }
    
        protected Builder(RestApplyCommissionRequest instance) {
          this.instance = instance;
        }
    
        public RestApplyCommissionRequest.Builder commissionAmount(Double commissionAmount) {
              this.instance.commissionAmount = commissionAmount;
          return this;
        }
            public RestApplyCommissionRequest.Builder commissionDate(String commissionDate) {
              this.instance.commissionDate = commissionDate;
          return this;
        }
            public RestApplyCommissionRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public RestApplyCommissionRequest.Builder payPercent(Double payPercent) {
              this.instance.payPercent = payPercent;
          return this;
        }
            public RestApplyCommissionRequest.Builder payoutType(PayoutTypeEnum payoutType) {
              this.instance.payoutType = payoutType;
          return this;
        }
            public RestApplyCommissionRequest.Builder referralPartnerId(String referralPartnerId) {
              this.instance.referralPartnerId = referralPartnerId;
          return this;
        }
        
    
        /**
        * returns a built RestApplyCommissionRequest instance.
        *
        * The builder is not reusable.
        */
        public RestApplyCommissionRequest build() {
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
      public static RestApplyCommissionRequest.Builder builder() {
        return new RestApplyCommissionRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestApplyCommissionRequest.Builder toBuilder() {
        return new RestApplyCommissionRequest.Builder()
          .commissionAmount(getCommissionAmount())
          .commissionDate(getCommissionDate())
          .description(getDescription())
          .payPercent(getPayPercent())
          .payoutType(getPayoutType())
          .referralPartnerId(getReferralPartnerId());
      }
}

