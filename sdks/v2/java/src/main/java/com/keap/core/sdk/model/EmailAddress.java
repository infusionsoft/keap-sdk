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
 * EmailAddress
 */
@JsonPropertyOrder({
  EmailAddress.JSON_PROPERTY_EMAIL,
  EmailAddress.JSON_PROPERTY_EMAIL_OPT_STATUS,
  EmailAddress.JSON_PROPERTY_FIELD,
  EmailAddress.JSON_PROPERTY_IS_OPT_IN,
  EmailAddress.JSON_PROPERTY_OPT_IN_REASON
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class EmailAddress implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  /**
   * Gets or Sets emailOptStatus
   */
  public enum EmailOptStatusEnum {
    UNENGAGED_MARKETABLE(String.valueOf("UNENGAGED_MARKETABLE")),
    
    SINGLE_OPT_IN(String.valueOf("SINGLE_OPT_IN")),
    
    DOUBLE_OPT_IN(String.valueOf("DOUBLE_OPT_IN")),
    
    CONFIRMED(String.valueOf("CONFIRMED")),
    
    UNENGAGED_NON_MARKETABLE(String.valueOf("UNENGAGED_NON_MARKETABLE")),
    
    NON_MARKETABLE(String.valueOf("NON_MARKETABLE")),
    
    LOCKDOWN(String.valueOf("LOCKDOWN")),
    
    BOUNCE(String.valueOf("BOUNCE")),
    
    HARD_BOUNCE(String.valueOf("HARD_BOUNCE")),
    
    MANUAL(String.valueOf("MANUAL")),
    
    ADMIN(String.valueOf("ADMIN")),
    
    SYSTEM(String.valueOf("SYSTEM")),
    
    LIST_UNSUBSCRIBE(String.valueOf("LIST_UNSUBSCRIBE")),
    
    FEEDBACK(String.valueOf("FEEDBACK")),
    
    SPAM(String.valueOf("SPAM")),
    
    INVALID(String.valueOf("INVALID")),
    
    DEACTIVATED(String.valueOf("DEACTIVATED")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    EmailOptStatusEnum(String value) {
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
    public static EmailOptStatusEnum fromValue(String value) {
      for (EmailOptStatusEnum b : EmailOptStatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_EMAIL_OPT_STATUS = "email_opt_status";
  @jakarta.annotation.Nullable  private EmailOptStatusEnum emailOptStatus;

  /**
   * Gets or Sets field
   */
  public enum FieldEnum {
    EMAIL_FIELD_UNSPECIFIED(String.valueOf("EMAIL_FIELD_UNSPECIFIED")),
    
    EMAIL1(String.valueOf("EMAIL1")),
    
    EMAIL2(String.valueOf("EMAIL2")),
    
    EMAIL3(String.valueOf("EMAIL3")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldEnum(String value) {
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
    public static FieldEnum fromValue(String value) {
      for (FieldEnum b : FieldEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD = "field";
  @jakarta.annotation.Nullable  private FieldEnum field;

  public static final String JSON_PROPERTY_IS_OPT_IN = "is_opt_in";
  @jakarta.annotation.Nullable  private Boolean isOptIn;

  public static final String JSON_PROPERTY_OPT_IN_REASON = "opt_in_reason";
  @jakarta.annotation.Nullable  private String optInReason;

  public EmailAddress() { 
  }

  public EmailAddress email(@jakarta.annotation.Nullable String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEmail() {
    return email;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmail(@jakarta.annotation.Nullable String email) {
    this.email = email;
  }


  public EmailAddress emailOptStatus(@jakarta.annotation.Nullable EmailOptStatusEnum emailOptStatus) {
    this.emailOptStatus = emailOptStatus;
    return this;
  }

  /**
   * Get emailOptStatus
   * @return emailOptStatus
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL_OPT_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public EmailOptStatusEnum getEmailOptStatus() {
    return emailOptStatus;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_OPT_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmailOptStatus(@jakarta.annotation.Nullable EmailOptStatusEnum emailOptStatus) {
    this.emailOptStatus = emailOptStatus;
  }


  public EmailAddress field(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
    return this;
  }

  /**
   * Get field
   * @return field
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldEnum getField() {
    return field;
  }


  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
  }


  public EmailAddress isOptIn(@jakarta.annotation.Nullable Boolean isOptIn) {
    this.isOptIn = isOptIn;
    return this;
  }

  /**
   * Get isOptIn
   * @return isOptIn
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_OPT_IN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsOptIn() {
    return isOptIn;
  }


  @JsonProperty(JSON_PROPERTY_IS_OPT_IN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsOptIn(@jakarta.annotation.Nullable Boolean isOptIn) {
    this.isOptIn = isOptIn;
  }


  public EmailAddress optInReason(@jakarta.annotation.Nullable String optInReason) {
    this.optInReason = optInReason;
    return this;
  }

  /**
   * Get optInReason
   * @return optInReason
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPT_IN_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOptInReason() {
    return optInReason;
  }


  @JsonProperty(JSON_PROPERTY_OPT_IN_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptInReason(@jakarta.annotation.Nullable String optInReason) {
    this.optInReason = optInReason;
  }

  /**
   * Return true if this EmailAddress object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailAddress emailAddress = (EmailAddress) o;
    return Objects.equals(this.email, emailAddress.email) &&
        Objects.equals(this.emailOptStatus, emailAddress.emailOptStatus) &&
        Objects.equals(this.field, emailAddress.field) &&
        Objects.equals(this.isOptIn, emailAddress.isOptIn) &&
        Objects.equals(this.optInReason, emailAddress.optInReason);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, emailOptStatus, field, isOptIn, optInReason);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailAddress {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    emailOptStatus: ").append(toIndentedString(emailOptStatus)).append("\n");
    sb.append("    field: ").append(toIndentedString(field)).append("\n");
    sb.append("    isOptIn: ").append(toIndentedString(isOptIn)).append("\n");
    sb.append("    optInReason: ").append(toIndentedString(optInReason)).append("\n");
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
    
        private EmailAddress instance;
    
        public Builder() {
          this(new EmailAddress());
        }
    
        protected Builder(EmailAddress instance) {
          this.instance = instance;
        }
    
        public EmailAddress.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public EmailAddress.Builder emailOptStatus(EmailOptStatusEnum emailOptStatus) {
              this.instance.emailOptStatus = emailOptStatus;
          return this;
        }
            public EmailAddress.Builder field(FieldEnum field) {
              this.instance.field = field;
          return this;
        }
            public EmailAddress.Builder isOptIn(Boolean isOptIn) {
              this.instance.isOptIn = isOptIn;
          return this;
        }
            public EmailAddress.Builder optInReason(String optInReason) {
              this.instance.optInReason = optInReason;
          return this;
        }
        
    
        /**
        * returns a built EmailAddress instance.
        *
        * The builder is not reusable.
        */
        public EmailAddress build() {
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
      public static EmailAddress.Builder builder() {
        return new EmailAddress.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailAddress.Builder toBuilder() {
        return new EmailAddress.Builder()
          .email(getEmail())
          .emailOptStatus(getEmailOptStatus())
          .field(getField())
          .isOptIn(getIsOptIn())
          .optInReason(getOptInReason());
      }
}

