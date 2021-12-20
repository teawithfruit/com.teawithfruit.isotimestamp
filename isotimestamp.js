var ISOTimestampDynamicValue = function() {
  this.evaluate = function() {
    return (new Date()).toISOString();
  };
  this.title = function() {
    return "ISO timestamp";
  };
};

ISOTimestampDynamicValue.identifier = "com.teawithfruit.isotimestamp";
ISOTimestampDynamicValue.title = "ISO timestamp";
ISOTimestampDynamicValue.inputs = [];

registerDynamicValueClass(ISOTimestampDynamicValue);
