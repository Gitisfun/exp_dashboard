//import Notifications from "../logic/factories/notifications.js";

class ApiCalls {
  
  static getAll(requestHandler, params, responseHandler, context) { 
    console.log(context);
    requestHandler(params)
      .then((res) => responseHandler(res))
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Er ging iets fout met het ophalen van de gegevens", context);
        }
      });
  }

  static getById(requestHandler, id, responseHandler, context) {
    console.log(context);
    requestHandler(id)
      .then((res) => responseHandler(res))
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Er ging iets fout met het ophalen van de gegevens", context);
        }
      });
  }

  static getMultiple(requestList, responseHandler, context) {
    console.log(context);
    Promise.all(requestList)
      .then((res) => responseHandler(res))
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Er ging iets fout met het ophalen van de gegevens", context);
        }
      });
  }

  static create(requestHandler, body, context, back) {
    requestHandler(body)
      .then((res) => {
        if (res) {
          //Notifications.successMessage("Succesvol toegevoegd", context);
          if (back) {
            context.$router.go(-1);
          }
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Kon niet worden toegevoegd, er ging iets fout op de server", context);
        }
      });
  }

  static update(requestHandler, body, context, back) {
    requestHandler(body.id, body)
      .then((res) => {
        if (res) {
          if (back) {
            context.$router.go(-1);
          }
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Kon niet worden toegevoegd, er ging iets fout op de server", context);
        }
      });
  }

  static deleteById(requestHandler, id, context, back) {
    requestHandler(id)
      .then((res) => {
        if (res) {
          if (back) {
            context.$router.go(-1);
          }
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //Notifications.errorMessage("Kon niet worden verwijderd, er ging iets fout op de server", context);
        }
      });
  }
}

export default ApiCalls;
