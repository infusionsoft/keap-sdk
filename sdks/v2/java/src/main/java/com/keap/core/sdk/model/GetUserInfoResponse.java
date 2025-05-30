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
 * GetUserInfoResponse
 */
@JsonPropertyOrder({
  GetUserInfoResponse.JSON_PROPERTY_EMAIL,
  GetUserInfoResponse.JSON_PROPERTY_FAMILY_NAME,
  GetUserInfoResponse.JSON_PROPERTY_GIVEN_NAME,
  GetUserInfoResponse.JSON_PROPERTY_ID,
  GetUserInfoResponse.JSON_PROPERTY_IS_ADMIN,
  GetUserInfoResponse.JSON_PROPERTY_KEAP_ID,
  GetUserInfoResponse.JSON_PROPERTY_MIDDLE_NAME,
  GetUserInfoResponse.JSON_PROPERTY_PREFERRED_NAME,
  GetUserInfoResponse.JSON_PROPERTY_SUB
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class GetUserInfoResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_IS_ADMIN = "is_admin";
  @jakarta.annotation.Nullable  private Boolean isAdmin;

  public static final String JSON_PROPERTY_KEAP_ID = "keap_id";
  @jakarta.annotation.Nullable  private String keapId;

  public static final String JSON_PROPERTY_MIDDLE_NAME = "middle_name";
  @jakarta.annotation.Nullable  private String middleName;

  public static final String JSON_PROPERTY_PREFERRED_NAME = "preferred_name";
  @jakarta.annotation.Nullable  private String preferredName;

  public static final String JSON_PROPERTY_SUB = "sub";
  @jakarta.annotation.Nullable  private String sub;

  public GetUserInfoResponse() { 
  }

  public GetUserInfoResponse email(@jakarta.annotation.Nullable String email) {
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


  public GetUserInfoResponse familyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
    return this;
  }

  /**
   * Get familyName
   * @return familyName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFamilyName() {
    return familyName;
  }


  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFamilyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
  }


  public GetUserInfoResponse givenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
    return this;
  }

  /**
   * Get givenName
   * @return givenName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getGivenName() {
    return givenName;
  }


  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGivenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
  }


  public GetUserInfoResponse id(@jakarta.annotation.Nullable String id) {
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


  public GetUserInfoResponse isAdmin(@jakarta.annotation.Nullable Boolean isAdmin) {
    this.isAdmin = isAdmin;
    return this;
  }

  /**
   * Get isAdmin
   * @return isAdmin
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsAdmin() {
    return isAdmin;
  }


  @JsonProperty(JSON_PROPERTY_IS_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsAdmin(@jakarta.annotation.Nullable Boolean isAdmin) {
    this.isAdmin = isAdmin;
  }


  public GetUserInfoResponse keapId(@jakarta.annotation.Nullable String keapId) {
    this.keapId = keapId;
    return this;
  }

  /**
   * Get keapId
   * @return keapId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_KEAP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getKeapId() {
    return keapId;
  }


  @JsonProperty(JSON_PROPERTY_KEAP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setKeapId(@jakarta.annotation.Nullable String keapId) {
    this.keapId = keapId;
  }


  public GetUserInfoResponse middleName(@jakarta.annotation.Nullable String middleName) {
    this.middleName = middleName;
    return this;
  }

  /**
   * Get middleName
   * @return middleName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MIDDLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMiddleName() {
    return middleName;
  }


  @JsonProperty(JSON_PROPERTY_MIDDLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMiddleName(@jakarta.annotation.Nullable String middleName) {
    this.middleName = middleName;
  }


  public GetUserInfoResponse preferredName(@jakarta.annotation.Nullable String preferredName) {
    this.preferredName = preferredName;
    return this;
  }

  /**
   * Get preferredName
   * @return preferredName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PREFERRED_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPreferredName() {
    return preferredName;
  }


  @JsonProperty(JSON_PROPERTY_PREFERRED_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPreferredName(@jakarta.annotation.Nullable String preferredName) {
    this.preferredName = preferredName;
  }


  public GetUserInfoResponse sub(@jakarta.annotation.Nullable String sub) {
    this.sub = sub;
    return this;
  }

  /**
   * Get sub
   * @return sub
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUB)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSub() {
    return sub;
  }


  @JsonProperty(JSON_PROPERTY_SUB)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSub(@jakarta.annotation.Nullable String sub) {
    this.sub = sub;
  }

  /**
   * Return true if this GetUserInfoResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetUserInfoResponse getUserInfoResponse = (GetUserInfoResponse) o;
    return Objects.equals(this.email, getUserInfoResponse.email) &&
        Objects.equals(this.familyName, getUserInfoResponse.familyName) &&
        Objects.equals(this.givenName, getUserInfoResponse.givenName) &&
        Objects.equals(this.id, getUserInfoResponse.id) &&
        Objects.equals(this.isAdmin, getUserInfoResponse.isAdmin) &&
        Objects.equals(this.keapId, getUserInfoResponse.keapId) &&
        Objects.equals(this.middleName, getUserInfoResponse.middleName) &&
        Objects.equals(this.preferredName, getUserInfoResponse.preferredName) &&
        Objects.equals(this.sub, getUserInfoResponse.sub);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, familyName, givenName, id, isAdmin, keapId, middleName, preferredName, sub);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetUserInfoResponse {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    familyName: ").append(toIndentedString(familyName)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isAdmin: ").append(toIndentedString(isAdmin)).append("\n");
    sb.append("    keapId: ").append(toIndentedString(keapId)).append("\n");
    sb.append("    middleName: ").append(toIndentedString(middleName)).append("\n");
    sb.append("    preferredName: ").append(toIndentedString(preferredName)).append("\n");
    sb.append("    sub: ").append(toIndentedString(sub)).append("\n");
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
    
        private GetUserInfoResponse instance;
    
        public Builder() {
          this(new GetUserInfoResponse());
        }
    
        protected Builder(GetUserInfoResponse instance) {
          this.instance = instance;
        }
    
        public GetUserInfoResponse.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public GetUserInfoResponse.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public GetUserInfoResponse.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public GetUserInfoResponse.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public GetUserInfoResponse.Builder isAdmin(Boolean isAdmin) {
              this.instance.isAdmin = isAdmin;
          return this;
        }
            public GetUserInfoResponse.Builder keapId(String keapId) {
              this.instance.keapId = keapId;
          return this;
        }
            public GetUserInfoResponse.Builder middleName(String middleName) {
              this.instance.middleName = middleName;
          return this;
        }
            public GetUserInfoResponse.Builder preferredName(String preferredName) {
              this.instance.preferredName = preferredName;
          return this;
        }
            public GetUserInfoResponse.Builder sub(String sub) {
              this.instance.sub = sub;
          return this;
        }
        
    
        /**
        * returns a built GetUserInfoResponse instance.
        *
        * The builder is not reusable.
        */
        public GetUserInfoResponse build() {
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
      public static GetUserInfoResponse.Builder builder() {
        return new GetUserInfoResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public GetUserInfoResponse.Builder toBuilder() {
        return new GetUserInfoResponse.Builder()
          .email(getEmail())
          .familyName(getFamilyName())
          .givenName(getGivenName())
          .id(getId())
          .isAdmin(getIsAdmin())
          .keapId(getKeapId())
          .middleName(getMiddleName())
          .preferredName(getPreferredName())
          .sub(getSub());
      }
}

