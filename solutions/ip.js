const checkIP = (IpAddress) => {
    const IpAddressPattern = /^((\d\d?|1\d\d|2([0-4]\d|5[0-5]))\.){3}(\d\d?|1\d\d|2([0-4]\d|5[0-5]))$/;
    return IpAddress.match(IpAddressPattern) ? true : false;
}


export default checkIP;