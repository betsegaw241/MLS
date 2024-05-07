import { put, call } from "redux-saga/effects";
import { NotificationPageActions } from ".";

function* handleFetchNotifications() {
  try {
    const eventSource = new EventSource(
      "https://medicin-locator-service.onrender.com/api/notification/new"
    );

    function* onMessageHandler(event: MessageEvent<any>) {
      const data = JSON.parse(event.data);
      console.log("**************", data);
      yield put(NotificationPageActions.fetchNotificationsSuccess(data));
    }

    eventSource.onmessage = function (event) {
      const generator = onMessageHandler(event);
      generator.next();
    };

    yield call(() => {
      eventSource.close();
    });
  } catch (error) {
    yield put(NotificationPageActions.fetchNotificationsFailed());
  }
}

export function* NotificationPageSaga() {
  yield call(handleFetchNotifications);
}
