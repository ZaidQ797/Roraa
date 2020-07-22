import config from "../_config";

export function getImageURL(image) {
    return image && (image.includes("http") || image.includes("file:")) ? image : config.baseUrl + image;
}