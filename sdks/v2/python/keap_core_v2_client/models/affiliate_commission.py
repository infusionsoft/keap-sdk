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

from datetime import datetime
from pydantic import BaseModel, ConfigDict, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set
from typing_extensions import Self

class AffiliateCommission(BaseModel):
    """
    AffiliateCommission
    """ # noqa: E501
    aff_owed_id: Optional[StrictInt] = None
    amount_earned: Optional[Union[StrictFloat, StrictInt]] = None
    contact_first_name: Optional[StrictStr] = None
    contact_id: Optional[StrictInt] = None
    contact_last_name: Optional[StrictStr] = None
    date_earned: Optional[datetime] = None
    description: Optional[StrictStr] = None
    invoice_id: Optional[StrictInt] = None
    product_name: Optional[StrictStr] = None
    sales_affiliate_id: Optional[StrictInt] = None
    sold_by_first_name: Optional[StrictStr] = None
    sold_by_last_name: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["aff_owed_id", "amount_earned", "contact_first_name", "contact_id", "contact_last_name", "date_earned", "description", "invoice_id", "product_name", "sales_affiliate_id", "sold_by_first_name", "sold_by_last_name"]

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
        """Create an instance of AffiliateCommission from a JSON string"""
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
        """Create an instance of AffiliateCommission from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "aff_owed_id": obj.get("aff_owed_id"),
            "amount_earned": obj.get("amount_earned"),
            "contact_first_name": obj.get("contact_first_name"),
            "contact_id": obj.get("contact_id"),
            "contact_last_name": obj.get("contact_last_name"),
            "date_earned": obj.get("date_earned"),
            "description": obj.get("description"),
            "invoice_id": obj.get("invoice_id"),
            "product_name": obj.get("product_name"),
            "sales_affiliate_id": obj.get("sales_affiliate_id"),
            "sold_by_first_name": obj.get("sold_by_first_name"),
            "sold_by_last_name": obj.get("sold_by_last_name")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


