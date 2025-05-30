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
import com.keap.core.sdk.model.Address;
import com.keap.core.sdk.model.EmailAddress;
import com.keap.core.sdk.model.FaxNumber;
import com.keap.core.sdk.model.PhoneNumber;
import com.keap.core.sdk.model.SocialAccount;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * User
 */
@JsonPropertyOrder({
  User.JSON_PROPERTY_ADDRESS,
  User.JSON_PROPERTY_ADMIN,
  User.JSON_PROPERTY_COMPANY_NAME,
  User.JSON_PROPERTY_CREATE_TIME,
  User.JSON_PROPERTY_CREATED_BY,
  User.JSON_PROPERTY_EMAIL_ADDRESSES,
  User.JSON_PROPERTY_FAMILY_NAME,
  User.JSON_PROPERTY_FAX_NUMBERS,
  User.JSON_PROPERTY_GIVEN_NAME,
  User.JSON_PROPERTY_GLOBAL_USER_ID,
  User.JSON_PROPERTY_ID,
  User.JSON_PROPERTY_KEAP_ID,
  User.JSON_PROPERTY_PARTNER,
  User.JSON_PROPERTY_PHONE_NUMBERS,
  User.JSON_PROPERTY_SOCIAL_ACCOUNTS,
  User.JSON_PROPERTY_STATUS,
  User.JSON_PROPERTY_TIME_ZONE,
  User.JSON_PROPERTY_TITLE,
  User.JSON_PROPERTY_UPDATE_TIME,
  User.JSON_PROPERTY_UPDATED_BY,
  User.JSON_PROPERTY_WEBSITE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class User implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESS = "address";
  @jakarta.annotation.Nullable  private Address address;

  public static final String JSON_PROPERTY_ADMIN = "admin";
  @jakarta.annotation.Nullable  private Boolean admin;

  public static final String JSON_PROPERTY_COMPANY_NAME = "company_name";
  @jakarta.annotation.Nullable  private String companyName;

  public static final String JSON_PROPERTY_CREATE_TIME = "create_time";
  @jakarta.annotation.Nullable  private String createTime;

  public static final String JSON_PROPERTY_CREATED_BY = "created_by";
  @jakarta.annotation.Nullable  private Long createdBy;

  public static final String JSON_PROPERTY_EMAIL_ADDRESSES = "email_addresses";
  @jakarta.annotation.Nullable  private List<@Valid EmailAddress> emailAddresses = new ArrayList<>();

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_FAX_NUMBERS = "fax_numbers";
  @jakarta.annotation.Nullable  private List<@Valid FaxNumber> faxNumbers = new ArrayList<>();

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_GLOBAL_USER_ID = "global_user_id";
  @jakarta.annotation.Nullable  private String globalUserId;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_KEAP_ID = "keap_id";
  @jakarta.annotation.Nullable  private String keapId;

  public static final String JSON_PROPERTY_PARTNER = "partner";
  @jakarta.annotation.Nullable  private Boolean partner;

  public static final String JSON_PROPERTY_PHONE_NUMBERS = "phone_numbers";
  @jakarta.annotation.Nullable  private List<@Valid PhoneNumber> phoneNumbers = new ArrayList<>();

  public static final String JSON_PROPERTY_SOCIAL_ACCOUNTS = "social_accounts";
  @jakarta.annotation.Nullable  private List<@Valid SocialAccount> socialAccounts = new ArrayList<>();

  /**
   * Gets or Sets status
   */
  public enum StatusEnum {
    ACTIVE(String.valueOf("ACTIVE")),
    
    INVITED(String.valueOf("INVITED")),
    
    INACTIVE(String.valueOf("INACTIVE")),
    
    NOT_A_USER(String.valueOf("NOT_A_USER")),
    
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

  public static final String JSON_PROPERTY_TIME_ZONE = "time_zone";
  @jakarta.annotation.Nullable  private String timeZone;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_UPDATE_TIME = "update_time";
  @jakarta.annotation.Nullable  private String updateTime;

  public static final String JSON_PROPERTY_UPDATED_BY = "updated_by";
  @jakarta.annotation.Nullable  private Long updatedBy;

  public static final String JSON_PROPERTY_WEBSITE = "website";
  @jakarta.annotation.Nullable  private String website;

  public User() { 
  }

  public User address(@jakarta.annotation.Nullable Address address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Address getAddress() {
    return address;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddress(@jakarta.annotation.Nullable Address address) {
    this.address = address;
  }


  public User admin(@jakarta.annotation.Nullable Boolean admin) {
    this.admin = admin;
    return this;
  }

  /**
   * Get admin
   * @return admin
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAdmin() {
    return admin;
  }


  @JsonProperty(JSON_PROPERTY_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdmin(@jakarta.annotation.Nullable Boolean admin) {
    this.admin = admin;
  }


  public User companyName(@jakarta.annotation.Nullable String companyName) {
    this.companyName = companyName;
    return this;
  }

  /**
   * Get companyName
   * @return companyName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCompanyName() {
    return companyName;
  }


  @JsonProperty(JSON_PROPERTY_COMPANY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompanyName(@jakarta.annotation.Nullable String companyName) {
    this.companyName = companyName;
  }


  public User createTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
    return this;
  }

  /**
   * Get createTime
   * @return createTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreateTime() {
    return createTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreateTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
  }


  public User createdBy(@jakarta.annotation.Nullable Long createdBy) {
    this.createdBy = createdBy;
    return this;
  }

  /**
   * Get createdBy
   * @return createdBy
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getCreatedBy() {
    return createdBy;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedBy(@jakarta.annotation.Nullable Long createdBy) {
    this.createdBy = createdBy;
  }


  public User emailAddresses(@jakarta.annotation.Nullable List<@Valid EmailAddress> emailAddresses) {
    this.emailAddresses = emailAddresses;
    return this;
  }

  public User addEmailAddressesItem(EmailAddress emailAddressesItem) {
    if (this.emailAddresses == null) {
      this.emailAddresses = new ArrayList<>();
    }
    this.emailAddresses.add(emailAddressesItem);
    return this;
  }

  /**
   * Get emailAddresses
   * @return emailAddresses
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESSES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid EmailAddress> getEmailAddresses() {
    return emailAddresses;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESSES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmailAddresses(@jakarta.annotation.Nullable List<@Valid EmailAddress> emailAddresses) {
    this.emailAddresses = emailAddresses;
  }


  public User familyName(@jakarta.annotation.Nullable String familyName) {
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


  public User faxNumbers(@jakarta.annotation.Nullable List<@Valid FaxNumber> faxNumbers) {
    this.faxNumbers = faxNumbers;
    return this;
  }

  public User addFaxNumbersItem(FaxNumber faxNumbersItem) {
    if (this.faxNumbers == null) {
      this.faxNumbers = new ArrayList<>();
    }
    this.faxNumbers.add(faxNumbersItem);
    return this;
  }

  /**
   * Get faxNumbers
   * @return faxNumbers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAX_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FaxNumber> getFaxNumbers() {
    return faxNumbers;
  }


  @JsonProperty(JSON_PROPERTY_FAX_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFaxNumbers(@jakarta.annotation.Nullable List<@Valid FaxNumber> faxNumbers) {
    this.faxNumbers = faxNumbers;
  }


  public User givenName(@jakarta.annotation.Nullable String givenName) {
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


  public User globalUserId(@jakarta.annotation.Nullable String globalUserId) {
    this.globalUserId = globalUserId;
    return this;
  }

  /**
   * Get globalUserId
   * @return globalUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GLOBAL_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getGlobalUserId() {
    return globalUserId;
  }


  @JsonProperty(JSON_PROPERTY_GLOBAL_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGlobalUserId(@jakarta.annotation.Nullable String globalUserId) {
    this.globalUserId = globalUserId;
  }


  public User id(@jakarta.annotation.Nullable String id) {
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


  public User keapId(@jakarta.annotation.Nullable String keapId) {
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


  public User partner(@jakarta.annotation.Nullable Boolean partner) {
    this.partner = partner;
    return this;
  }

  /**
   * Get partner
   * @return partner
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PARTNER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getPartner() {
    return partner;
  }


  @JsonProperty(JSON_PROPERTY_PARTNER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPartner(@jakarta.annotation.Nullable Boolean partner) {
    this.partner = partner;
  }


  public User phoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
    return this;
  }

  public User addPhoneNumbersItem(PhoneNumber phoneNumbersItem) {
    if (this.phoneNumbers == null) {
      this.phoneNumbers = new ArrayList<>();
    }
    this.phoneNumbers.add(phoneNumbersItem);
    return this;
  }

  /**
   * Get phoneNumbers
   * @return phoneNumbers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PhoneNumber> getPhoneNumbers() {
    return phoneNumbers;
  }


  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
  }


  public User socialAccounts(@jakarta.annotation.Nullable List<@Valid SocialAccount> socialAccounts) {
    this.socialAccounts = socialAccounts;
    return this;
  }

  public User addSocialAccountsItem(SocialAccount socialAccountsItem) {
    if (this.socialAccounts == null) {
      this.socialAccounts = new ArrayList<>();
    }
    this.socialAccounts.add(socialAccountsItem);
    return this;
  }

  /**
   * Get socialAccounts
   * @return socialAccounts
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SOCIAL_ACCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid SocialAccount> getSocialAccounts() {
    return socialAccounts;
  }


  @JsonProperty(JSON_PROPERTY_SOCIAL_ACCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSocialAccounts(@jakarta.annotation.Nullable List<@Valid SocialAccount> socialAccounts) {
    this.socialAccounts = socialAccounts;
  }


  public User status(@jakarta.annotation.Nullable StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public User timeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
    return this;
  }

  /**
   * Get timeZone
   * @return timeZone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTimeZone() {
    return timeZone;
  }


  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
  }


  public User title(@jakarta.annotation.Nullable String title) {
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


  public User updateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
    return this;
  }

  /**
   * Get updateTime
   * @return updateTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUpdateTime() {
    return updateTime;
  }


  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
  }


  public User updatedBy(@jakarta.annotation.Nullable Long updatedBy) {
    this.updatedBy = updatedBy;
    return this;
  }

  /**
   * Get updatedBy
   * @return updatedBy
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_UPDATED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getUpdatedBy() {
    return updatedBy;
  }


  @JsonProperty(JSON_PROPERTY_UPDATED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdatedBy(@jakarta.annotation.Nullable Long updatedBy) {
    this.updatedBy = updatedBy;
  }


  public User website(@jakarta.annotation.Nullable String website) {
    this.website = website;
    return this;
  }

  /**
   * Get website
   * @return website
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getWebsite() {
    return website;
  }


  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWebsite(@jakarta.annotation.Nullable String website) {
    this.website = website;
  }

  /**
   * Return true if this User object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.address, user.address) &&
        Objects.equals(this.admin, user.admin) &&
        Objects.equals(this.companyName, user.companyName) &&
        Objects.equals(this.createTime, user.createTime) &&
        Objects.equals(this.createdBy, user.createdBy) &&
        Objects.equals(this.emailAddresses, user.emailAddresses) &&
        Objects.equals(this.familyName, user.familyName) &&
        Objects.equals(this.faxNumbers, user.faxNumbers) &&
        Objects.equals(this.givenName, user.givenName) &&
        Objects.equals(this.globalUserId, user.globalUserId) &&
        Objects.equals(this.id, user.id) &&
        Objects.equals(this.keapId, user.keapId) &&
        Objects.equals(this.partner, user.partner) &&
        Objects.equals(this.phoneNumbers, user.phoneNumbers) &&
        Objects.equals(this.socialAccounts, user.socialAccounts) &&
        Objects.equals(this.status, user.status) &&
        Objects.equals(this.timeZone, user.timeZone) &&
        Objects.equals(this.title, user.title) &&
        Objects.equals(this.updateTime, user.updateTime) &&
        Objects.equals(this.updatedBy, user.updatedBy) &&
        Objects.equals(this.website, user.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, admin, companyName, createTime, createdBy, emailAddresses, familyName, faxNumbers, givenName, globalUserId, id, keapId, partner, phoneNumbers, socialAccounts, status, timeZone, title, updateTime, updatedBy, website);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    admin: ").append(toIndentedString(admin)).append("\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    createTime: ").append(toIndentedString(createTime)).append("\n");
    sb.append("    createdBy: ").append(toIndentedString(createdBy)).append("\n");
    sb.append("    emailAddresses: ").append(toIndentedString(emailAddresses)).append("\n");
    sb.append("    familyName: ").append(toIndentedString(familyName)).append("\n");
    sb.append("    faxNumbers: ").append(toIndentedString(faxNumbers)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
    sb.append("    globalUserId: ").append(toIndentedString(globalUserId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    keapId: ").append(toIndentedString(keapId)).append("\n");
    sb.append("    partner: ").append(toIndentedString(partner)).append("\n");
    sb.append("    phoneNumbers: ").append(toIndentedString(phoneNumbers)).append("\n");
    sb.append("    socialAccounts: ").append(toIndentedString(socialAccounts)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    timeZone: ").append(toIndentedString(timeZone)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    updateTime: ").append(toIndentedString(updateTime)).append("\n");
    sb.append("    updatedBy: ").append(toIndentedString(updatedBy)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
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
    
        private User instance;
    
        public Builder() {
          this(new User());
        }
    
        protected Builder(User instance) {
          this.instance = instance;
        }
    
        public User.Builder address(Address address) {
              this.instance.address = address;
          return this;
        }
            public User.Builder admin(Boolean admin) {
              this.instance.admin = admin;
          return this;
        }
            public User.Builder companyName(String companyName) {
              this.instance.companyName = companyName;
          return this;
        }
            public User.Builder createTime(String createTime) {
              this.instance.createTime = createTime;
          return this;
        }
            public User.Builder createdBy(Long createdBy) {
              this.instance.createdBy = createdBy;
          return this;
        }
            public User.Builder emailAddresses(List<EmailAddress> emailAddresses) {
              this.instance.emailAddresses = emailAddresses;
          return this;
        }
            public User.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public User.Builder faxNumbers(List<FaxNumber> faxNumbers) {
              this.instance.faxNumbers = faxNumbers;
          return this;
        }
            public User.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public User.Builder globalUserId(String globalUserId) {
              this.instance.globalUserId = globalUserId;
          return this;
        }
            public User.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public User.Builder keapId(String keapId) {
              this.instance.keapId = keapId;
          return this;
        }
            public User.Builder partner(Boolean partner) {
              this.instance.partner = partner;
          return this;
        }
            public User.Builder phoneNumbers(List<PhoneNumber> phoneNumbers) {
              this.instance.phoneNumbers = phoneNumbers;
          return this;
        }
            public User.Builder socialAccounts(List<SocialAccount> socialAccounts) {
              this.instance.socialAccounts = socialAccounts;
          return this;
        }
            public User.Builder status(StatusEnum status) {
              this.instance.status = status;
          return this;
        }
            public User.Builder timeZone(String timeZone) {
              this.instance.timeZone = timeZone;
          return this;
        }
            public User.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public User.Builder updateTime(String updateTime) {
              this.instance.updateTime = updateTime;
          return this;
        }
            public User.Builder updatedBy(Long updatedBy) {
              this.instance.updatedBy = updatedBy;
          return this;
        }
            public User.Builder website(String website) {
              this.instance.website = website;
          return this;
        }
        
    
        /**
        * returns a built User instance.
        *
        * The builder is not reusable.
        */
        public User build() {
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
      public static User.Builder builder() {
        return new User.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public User.Builder toBuilder() {
        return new User.Builder()
          .address(getAddress())
          .admin(getAdmin())
          .companyName(getCompanyName())
          .createTime(getCreateTime())
          .createdBy(getCreatedBy())
          .emailAddresses(getEmailAddresses())
          .familyName(getFamilyName())
          .faxNumbers(getFaxNumbers())
          .givenName(getGivenName())
          .globalUserId(getGlobalUserId())
          .id(getId())
          .keapId(getKeapId())
          .partner(getPartner())
          .phoneNumbers(getPhoneNumbers())
          .socialAccounts(getSocialAccounts())
          .status(getStatus())
          .timeZone(getTimeZone())
          .title(getTitle())
          .updateTime(getUpdateTime())
          .updatedBy(getUpdatedBy())
          .website(getWebsite());
      }
}

