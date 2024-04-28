function changeDimensions(originalString:string, className?: string) {
    // Regular expression to match the width and height attributes
    let widthRegex = /width="(\d+(?:\.\d+)?)"/;
    let heightRegex = /height="(\d+(?:\.\d+)?)"/;


    // Replace the width and height values with the new ones
    let modifiedString = originalString.replace(widthRegex, 'width="100%"').replace(heightRegex, 'height="400px"');

    if(className) {
        modifiedString = modifiedString.replace('<iframe', '<iframe className="' + className + '"');
    }

    return modifiedString;
}

export default changeDimensions;
