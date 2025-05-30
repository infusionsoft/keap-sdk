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
 * SocialAccount
 */
@JsonPropertyOrder({
  SocialAccount.JSON_PROPERTY_NAME,
  SocialAccount.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class SocialAccount implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    SOCIAL_ACCOUNT_TYPE_UNSPECIFIED(String.valueOf("SOCIAL_ACCOUNT_TYPE_UNSPECIFIED")),
    
    FACEBOOK(String.valueOf("FACEBOOK")),
    
    LINKED_IN(String.valueOf("LINKED_IN")),
    
    TWITTER(String.valueOf("TWITTER")),
    
    INSTAGRAM(String.valueOf("INSTAGRAM")),
    
    SNAPCHAT(String.valueOf("SNAPCHAT")),
    
    YOUTUBE(String.valueOf("YOUTUBE")),
    
    PINTEREST(String.valueOf("PINTEREST")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    TypeEnum(String value) {
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
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nonnull  private TypeEnum type;

  public SocialAccount() { 
  }

  public SocialAccount name(@jakarta.annotation.Nullable String name) {
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


  public SocialAccount type(@jakarta.annotation.Nonnull TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setType(@jakarta.annotation.Nonnull TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this SocialAccount object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SocialAccount socialAccount = (SocialAccount) o;
    return Objects.equals(this.name, socialAccount.name) &&
        Objects.equals(this.type, socialAccount.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SocialAccount {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private SocialAccount instance;
    
        public Builder() {
          this(new SocialAccount());
        }
    
        protected Builder(SocialAccount instance) {
          this.instance = instance;
        }
    
        public SocialAccount.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public SocialAccount.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built SocialAccount instance.
        *
        * The builder is not reusable.
        */
        public SocialAccount build() {
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
      public static SocialAccount.Builder builder() {
        return new SocialAccount.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public SocialAccount.Builder toBuilder() {
        return new SocialAccount.Builder()
          .name(getName())
          .type(getType());
      }
}

