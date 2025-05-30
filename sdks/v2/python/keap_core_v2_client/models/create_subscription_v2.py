# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.812056
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import date
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set
from typing_extensions import Self

class CreateSubscriptionV2(BaseModel):
    """
    CreateSubscriptionV2
    """ # noqa: E501
    allow_duplicate: Optional[StrictBool] = Field(default=None, description="If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.")
    allow_tax: Optional[StrictBool] = Field(default=None, description="Only works if the product the product subscription is for is taxable. Default is false.")
    auto_charge: Optional[StrictBool] = Field(default=None, description="Defaults to true.")
    billing_amount: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Must be 0 or greater. Default is the price in the product subscription.")
    contact_id: StrictStr
    first_bill_date: Optional[date] = Field(default=None, description="The first day the subscription will bill, in EST. Must not be in the past. Default is today.")
    payment_method_id: Optional[StrictStr] = Field(default=None, description="Default is the contact's most recently used card, if auto charge is true. Default is 0 otherwise.")
    quantity: Optional[StrictInt] = Field(default=None, description="Must be greater than 0. Default is 1.")
    sale_affiliate_id: Optional[StrictStr] = None
    subscription_plan_id: Optional[StrictStr] = Field(default=None, description="Id of the product subscription.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["allow_duplicate", "allow_tax", "auto_charge", "billing_amount", "contact_id", "first_bill_date", "payment_method_id", "quantity", "sale_affiliate_id", "subscription_plan_id"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CreateSubscriptionV2 from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateSubscriptionV2 from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "allow_duplicate": obj.get("allow_duplicate"),
            "allow_tax": obj.get("allow_tax"),
            "auto_charge": obj.get("auto_charge"),
            "billing_amount": obj.get("billing_amount"),
            "contact_id": obj.get("contact_id"),
            "first_bill_date": obj.get("first_bill_date"),
            "payment_method_id": obj.get("payment_method_id"),
            "quantity": obj.get("quantity"),
            "sale_affiliate_id": obj.get("sale_affiliate_id"),
            "subscription_plan_id": obj.get("subscription_plan_id")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


