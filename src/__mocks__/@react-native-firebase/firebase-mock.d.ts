/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
declare module "firebase-mock" {
  class tMockBase {
    autoFlush: () => void;
  }
  class tMockSDK extends tMockBase {
    app: {};

    auth: {};

    firestore: {};

    storage: {};

    messaging: {};

    reset: () => void;

    apps: [];
  }
  class MockAuthentication extends tMockBase {}
  class MockFirestore extends tMockBase {}
  class MockStorage extends tMockBase {}
  class MockMessaging extends tMockBase {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class MockFirebaseSdk extends tMockSDK {
    constructor(
      db: () => null,
      auth: () => MockAuthentication,
      firestoreMock: () => MockFirestore,
      mockStorage: () => MockStorage,
      mockMessaging: () => MockMessaging,
    ) {
      super();
    }

    reset: () => void;
  }
}
