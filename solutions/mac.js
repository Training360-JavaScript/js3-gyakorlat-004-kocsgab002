const checkMac = (MacAddress) => {
    const MacAddressPattern = /^([a-f0-9A-F]{2}[:-]){5}([a-f0-9A-F]{2})$/;
    return MacAddress.match(MacAddressPattern) ? true : false;
}


export default checkMac;