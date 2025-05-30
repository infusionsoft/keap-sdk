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
import com.keap.core.sdk.model.StackTraceElement;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Throwable
 */
@JsonPropertyOrder({
  Throwable.JSON_PROPERTY_CAUSE,
  Throwable.JSON_PROPERTY_LOCALIZED_MESSAGE,
  Throwable.JSON_PROPERTY_MESSAGE,
  Throwable.JSON_PROPERTY_STACK_TRACE,
  Throwable.JSON_PROPERTY_SUPPRESSED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class Throwable implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CAUSE = "cause";
  @jakarta.annotation.Nullable  private Throwable cause;

  public static final String JSON_PROPERTY_LOCALIZED_MESSAGE = "localizedMessage";
  @jakarta.annotation.Nullable  private String localizedMessage;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  @jakarta.annotation.Nullable  private String message;

  public static final String JSON_PROPERTY_STACK_TRACE = "stackTrace";
  @jakarta.annotation.Nullable  private List<@Valid StackTraceElement> stackTrace = new ArrayList<>();

  public static final String JSON_PROPERTY_SUPPRESSED = "suppressed";
  @jakarta.annotation.Nullable  private List<@Valid Throwable> suppressed = new ArrayList<>();

  public Throwable() { 
  }

  public Throwable cause(@jakarta.annotation.Nullable Throwable cause) {
    this.cause = cause;
    return this;
  }

  /**
   * Get cause
   * @return cause
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CAUSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Throwable getCause() {
    return cause;
  }


  @JsonProperty(JSON_PROPERTY_CAUSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCause(@jakarta.annotation.Nullable Throwable cause) {
    this.cause = cause;
  }


  public Throwable localizedMessage(@jakarta.annotation.Nullable String localizedMessage) {
    this.localizedMessage = localizedMessage;
    return this;
  }

  /**
   * Get localizedMessage
   * @return localizedMessage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LOCALIZED_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLocalizedMessage() {
    return localizedMessage;
  }


  @JsonProperty(JSON_PROPERTY_LOCALIZED_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLocalizedMessage(@jakarta.annotation.Nullable String localizedMessage) {
    this.localizedMessage = localizedMessage;
  }


  public Throwable message(@jakarta.annotation.Nullable String message) {
    this.message = message;
    return this;
  }

  /**
   * Get message
   * @return message
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMessage() {
    return message;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMessage(@jakarta.annotation.Nullable String message) {
    this.message = message;
  }


  public Throwable stackTrace(@jakarta.annotation.Nullable List<@Valid StackTraceElement> stackTrace) {
    this.stackTrace = stackTrace;
    return this;
  }

  public Throwable addStackTraceItem(StackTraceElement stackTraceItem) {
    if (this.stackTrace == null) {
      this.stackTrace = new ArrayList<>();
    }
    this.stackTrace.add(stackTraceItem);
    return this;
  }

  /**
   * Get stackTrace
   * @return stackTrace
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STACK_TRACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid StackTraceElement> getStackTrace() {
    return stackTrace;
  }


  @JsonProperty(JSON_PROPERTY_STACK_TRACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStackTrace(@jakarta.annotation.Nullable List<@Valid StackTraceElement> stackTrace) {
    this.stackTrace = stackTrace;
  }


  public Throwable suppressed(@jakarta.annotation.Nullable List<@Valid Throwable> suppressed) {
    this.suppressed = suppressed;
    return this;
  }

  public Throwable addSuppressedItem(Throwable suppressedItem) {
    if (this.suppressed == null) {
      this.suppressed = new ArrayList<>();
    }
    this.suppressed.add(suppressedItem);
    return this;
  }

  /**
   * Get suppressed
   * @return suppressed
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUPPRESSED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Throwable> getSuppressed() {
    return suppressed;
  }


  @JsonProperty(JSON_PROPERTY_SUPPRESSED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSuppressed(@jakarta.annotation.Nullable List<@Valid Throwable> suppressed) {
    this.suppressed = suppressed;
  }

  /**
   * Return true if this Throwable object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Throwable throwable = (Throwable) o;
    return Objects.equals(this.cause, throwable.cause) &&
        Objects.equals(this.localizedMessage, throwable.localizedMessage) &&
        Objects.equals(this.message, throwable.message) &&
        Objects.equals(this.stackTrace, throwable.stackTrace) &&
        Objects.equals(this.suppressed, throwable.suppressed);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cause, localizedMessage, message, stackTrace, suppressed);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Throwable {\n");
    sb.append("    cause: ").append(toIndentedString(cause)).append("\n");
    sb.append("    localizedMessage: ").append(toIndentedString(localizedMessage)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    stackTrace: ").append(toIndentedString(stackTrace)).append("\n");
    sb.append("    suppressed: ").append(toIndentedString(suppressed)).append("\n");
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
    
        private Throwable instance;
    
        public Builder() {
          this(new Throwable());
        }
    
        protected Builder(Throwable instance) {
          this.instance = instance;
        }
    
        public Throwable.Builder cause(Throwable cause) {
              this.instance.cause = cause;
          return this;
        }
            public Throwable.Builder localizedMessage(String localizedMessage) {
              this.instance.localizedMessage = localizedMessage;
          return this;
        }
            public Throwable.Builder message(String message) {
              this.instance.message = message;
          return this;
        }
            public Throwable.Builder stackTrace(List<StackTraceElement> stackTrace) {
              this.instance.stackTrace = stackTrace;
          return this;
        }
            public Throwable.Builder suppressed(List<Throwable> suppressed) {
              this.instance.suppressed = suppressed;
          return this;
        }
        
    
        /**
        * returns a built Throwable instance.
        *
        * The builder is not reusable.
        */
        public Throwable build() {
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
      public static Throwable.Builder builder() {
        return new Throwable.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Throwable.Builder toBuilder() {
        return new Throwable.Builder()
          .cause(getCause())
          .localizedMessage(getLocalizedMessage())
          .message(getMessage())
          .stackTrace(getStackTrace())
          .suppressed(getSuppressed());
      }
}

