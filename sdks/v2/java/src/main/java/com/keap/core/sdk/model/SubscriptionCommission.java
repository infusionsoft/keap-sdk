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
 * SubscriptionCommission
 */
@JsonPropertyOrder({
  SubscriptionCommission.JSON_PROPERTY_DOLLAR_AMOUNT,
  SubscriptionCommission.JSON_PROPERTY_NAME,
  SubscriptionCommission.JSON_PROPERTY_PERCENTAGE,
  SubscriptionCommission.JSON_PROPERTY_PLAN_PRICE,
  SubscriptionCommission.JSON_PROPERTY_SUBSCRIPTION_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class SubscriptionCommission implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOLLAR_AMOUNT = "dollar_amount";
  @jakarta.annotation.Nullable  private Double dollarAmount;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PERCENTAGE = "percentage";
  @jakarta.annotation.Nullable  private Double percentage;

  public static final String JSON_PROPERTY_PLAN_PRICE = "plan_price";
  @jakarta.annotation.Nullable  private Double planPrice;

  public static final String JSON_PROPERTY_SUBSCRIPTION_ID = "subscription_id";
  @jakarta.annotation.Nullable  private String subscriptionId;

  public SubscriptionCommission() { 
  }

  public SubscriptionCommission dollarAmount(@jakarta.annotation.Nullable Double dollarAmount) {
    this.dollarAmount = dollarAmount;
    return this;
  }

  /**
   * Get dollarAmount
   * @return dollarAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getDollarAmount() {
    return dollarAmount;
  }


  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDollarAmount(@jakarta.annotation.Nullable Double dollarAmount) {
    this.dollarAmount = dollarAmount;
  }


  public SubscriptionCommission name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public SubscriptionCommission percentage(@jakarta.annotation.Nullable Double percentage) {
    this.percentage = percentage;
    return this;
  }

  /**
   * Get percentage
   * @return percentage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPercentage() {
    return percentage;
  }


  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentage(@jakarta.annotation.Nullable Double percentage) {
    this.percentage = percentage;
  }


  public SubscriptionCommission planPrice(@jakarta.annotation.Nullable Double planPrice) {
    this.planPrice = planPrice;
    return this;
  }

  /**
   * Get planPrice
   * @return planPrice
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPlanPrice() {
    return planPrice;
  }


  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPlanPrice(@jakarta.annotation.Nullable Double planPrice) {
    this.planPrice = planPrice;
  }


  public SubscriptionCommission subscriptionId(@jakarta.annotation.Nullable String subscriptionId) {
    this.subscriptionId = subscriptionId;
    return this;
  }

  /**
   * Get subscriptionId
   * @return subscriptionId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionId() {
    return subscriptionId;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionId(@jakarta.annotation.Nullable String subscriptionId) {
    this.subscriptionId = subscriptionId;
  }

  /**
   * Return true if this SubscriptionCommission object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionCommission subscriptionCommission = (SubscriptionCommission) o;
    return Objects.equals(this.dollarAmount, subscriptionCommission.dollarAmount) &&
        Objects.equals(this.name, subscriptionCommission.name) &&
        Objects.equals(this.percentage, subscriptionCommission.percentage) &&
        Objects.equals(this.planPrice, subscriptionCommission.planPrice) &&
        Objects.equals(this.subscriptionId, subscriptionCommission.subscriptionId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dollarAmount, name, percentage, planPrice, subscriptionId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionCommission {\n");
    sb.append("    dollarAmount: ").append(toIndentedString(dollarAmount)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
    sb.append("    planPrice: ").append(toIndentedString(planPrice)).append("\n");
    sb.append("    subscriptionId: ").append(toIndentedString(subscriptionId)).append("\n");
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
    
        private SubscriptionCommission instance;
    
        public Builder() {
          this(new SubscriptionCommission());
        }
    
        protected Builder(SubscriptionCommission instance) {
          this.instance = instance;
        }
    
        public SubscriptionCommission.Builder dollarAmount(Double dollarAmount) {
              this.instance.dollarAmount = dollarAmount;
          return this;
        }
            public SubscriptionCommission.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public SubscriptionCommission.Builder percentage(Double percentage) {
              this.instance.percentage = percentage;
          return this;
        }
            public SubscriptionCommission.Builder planPrice(Double planPrice) {
              this.instance.planPrice = planPrice;
          return this;
        }
            public SubscriptionCommission.Builder subscriptionId(String subscriptionId) {
              this.instance.subscriptionId = subscriptionId;
          return this;
        }
        
    
        /**
        * returns a built SubscriptionCommission instance.
        *
        * The builder is not reusable.
        */
        public SubscriptionCommission build() {
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
      public static SubscriptionCommission.Builder builder() {
        return new SubscriptionCommission.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public SubscriptionCommission.Builder toBuilder() {
        return new SubscriptionCommission.Builder()
          .dollarAmount(getDollarAmount())
          .name(getName())
          .percentage(getPercentage())
          .planPrice(getPlanPrice())
          .subscriptionId(getSubscriptionId());
      }
}

