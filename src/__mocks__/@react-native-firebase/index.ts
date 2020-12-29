/**
 * react native firebase sdk mock
 */
import firebaseMock from "firebase-mock";

// eslint-disable-next-line import/no-mutable-exports
let mockSDK: firebaseMock.tMockSDK;
export function initMockSDK() {
  const mockAuth = new firebaseMock.MockAuthentication();
  const mockFirestore = new firebaseMock.MockFirestore();
  const mockStorage = new firebaseMock.MockStorage();
  const mockMessaging = new firebaseMock.MockMessaging();
  mockSDK = new firebaseMock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    () => {
      return null;
    },
    // use null if your code does not use AUTHENTICATION
    () => {
      mockAuth.autoFlush();
      return mockAuth;
    },
    // use null if your code does not use FIRESTORE
    () => {
      mockFirestore.autoFlush();
      return mockFirestore;
    },
    // use null if your code does not use STORAGE
    () => {
      mockStorage.autoFlush();
      return mockStorage;
    },
    // use null if your code does not use MESSAGING
    () => {
      mockMessaging.autoFlush();
      return mockMessaging;
    }
  );
  mockSDK.apps = [];
  /**
   * Once we complete a test that modifies the
   * state of our database, we should
   * reset our mock firestore so we don't
   * bleed shared state into other tests.
   * NOTE: 'reset' is not normally part of
   * the firebase-admin sdk, but it is a function
   * that I have added to our mock sdk
   * for use cases such as this.
   */
  mockSDK.reset = () => {
    // console.warn("Mock admin sdk has been reset!");
    initMockSDK();
  };
  return mockSDK;
}
mockSDK = initMockSDK();

export default mockSDK;
