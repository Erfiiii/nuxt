export default HTTP = class {
  static async getRequest(path, data, header) {
    try {

      let response =  await fetch(path, {
        method: 'GET',
        headers: {
          ...header
        }
      })
  
      return await response.json();
    } catch (e) {
      throw e;
    }
  }

  static postRequest(path, data, header) {
    try {
      let response =  await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          ...header
        }
      })
  
      return await response.json();
    } catch (e) {
      throw e;
    }
  }
}