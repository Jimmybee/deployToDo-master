export const backendless = {
  APPLICATION_ID: '975C9B70-4090-2D14-FFB1-BA95CB96F300',
  SECRET_KEY: 'F7752450-85A1-C9E8-FF01-0D38C4CAC200',
  JAVASCRIPT_KEY: 'BFED56C2-8483-F9CD-FF84-A8B4679DA300',
  VERSION: 'v1',
};


export function imageUrl(objectId) {
	return  "https://api.backendless.com/" + backendless.APPLICATION_ID + "/" + backendless.VERSION + "/files/myfiles/" + objectId + "/image.jpg"
}
