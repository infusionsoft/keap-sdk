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
 * PaymentResult
 */
@JsonPropertyOrder({
  PaymentResult.JSON_PROPERTY_ID,
  PaymentResult.JSON_PROPERTY_INVOICE_ID,
  PaymentResult.JSON_PROPERTY_PAYMENT_AMOUNT,
  PaymentResult.JSON_PROPERTY_PAYMENT_STATUS_MESSAGE,
  PaymentResult.JSON_PROPERTY_TRANSACTION_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class PaymentResult implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INVOICE_ID = "invoice_id";
  @jakarta.annotation.Nullable  private String invoiceId;

  public static final String JSON_PROPERTY_PAYMENT_AMOUNT = "payment_amount";
  @jakarta.annotation.Nullable  private Double paymentAmount;

  public static final String JSON_PROPERTY_PAYMENT_STATUS_MESSAGE = "payment_status_message";
  @jakarta.annotation.Nullable  private String paymentStatusMessage;

  public static final String JSON_PROPERTY_TRANSACTION_ID = "transaction_id";
  @jakarta.annotation.Nullable  private String transactionId;

  public PaymentResult() { 
  }

  public PaymentResult id(@jakarta.annotation.Nullable String id) {
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


  public PaymentResult invoiceId(@jakarta.annotation.Nullable String invoiceId) {
    this.invoiceId = invoiceId;
    return this;
  }

  /**
   * Get invoiceId
   * @return invoiceId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INVOICE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getInvoiceId() {
    return invoiceId;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoiceId(@jakarta.annotation.Nullable String invoiceId) {
    this.invoiceId = invoiceId;
  }


  public PaymentResult paymentAmount(@jakarta.annotation.Nullable Double paymentAmount) {
    this.paymentAmount = paymentAmount;
    return this;
  }

  /**
   * Get paymentAmount
   * @return paymentAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPaymentAmount() {
    return paymentAmount;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentAmount(@jakarta.annotation.Nullable Double paymentAmount) {
    this.paymentAmount = paymentAmount;
  }


  public PaymentResult paymentStatusMessage(@jakarta.annotation.Nullable String paymentStatusMessage) {
    this.paymentStatusMessage = paymentStatusMessage;
    return this;
  }

  /**
   * Get paymentStatusMessage
   * @return paymentStatusMessage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_STATUS_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentStatusMessage() {
    return paymentStatusMessage;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_STATUS_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentStatusMessage(@jakarta.annotation.Nullable String paymentStatusMessage) {
    this.paymentStatusMessage = paymentStatusMessage;
  }


  public PaymentResult transactionId(@jakarta.annotation.Nullable String transactionId) {
    this.transactionId = transactionId;
    return this;
  }

  /**
   * Get transactionId
   * @return transactionId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TRANSACTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTransactionId() {
    return transactionId;
  }


  @JsonProperty(JSON_PROPERTY_TRANSACTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTransactionId(@jakarta.annotation.Nullable String transactionId) {
    this.transactionId = transactionId;
  }

  /**
   * Return true if this PaymentResult object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentResult paymentResult = (PaymentResult) o;
    return Objects.equals(this.id, paymentResult.id) &&
        Objects.equals(this.invoiceId, paymentResult.invoiceId) &&
        Objects.equals(this.paymentAmount, paymentResult.paymentAmount) &&
        Objects.equals(this.paymentStatusMessage, paymentResult.paymentStatusMessage) &&
        Objects.equals(this.transactionId, paymentResult.transactionId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, invoiceId, paymentAmount, paymentStatusMessage, transactionId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentResult {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    invoiceId: ").append(toIndentedString(invoiceId)).append("\n");
    sb.append("    paymentAmount: ").append(toIndentedString(paymentAmount)).append("\n");
    sb.append("    paymentStatusMessage: ").append(toIndentedString(paymentStatusMessage)).append("\n");
    sb.append("    transactionId: ").append(toIndentedString(transactionId)).append("\n");
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
    
        private PaymentResult instance;
    
        public Builder() {
          this(new PaymentResult());
        }
    
        protected Builder(PaymentResult instance) {
          this.instance = instance;
        }
    
        public PaymentResult.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public PaymentResult.Builder invoiceId(String invoiceId) {
              this.instance.invoiceId = invoiceId;
          return this;
        }
            public PaymentResult.Builder paymentAmount(Double paymentAmount) {
              this.instance.paymentAmount = paymentAmount;
          return this;
        }
            public PaymentResult.Builder paymentStatusMessage(String paymentStatusMessage) {
              this.instance.paymentStatusMessage = paymentStatusMessage;
          return this;
        }
            public PaymentResult.Builder transactionId(String transactionId) {
              this.instance.transactionId = transactionId;
          return this;
        }
        
    
        /**
        * returns a built PaymentResult instance.
        *
        * The builder is not reusable.
        */
        public PaymentResult build() {
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
      public static PaymentResult.Builder builder() {
        return new PaymentResult.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PaymentResult.Builder toBuilder() {
        return new PaymentResult.Builder()
          .id(getId())
          .invoiceId(getInvoiceId())
          .paymentAmount(getPaymentAmount())
          .paymentStatusMessage(getPaymentStatusMessage())
          .transactionId(getTransactionId());
      }
}

