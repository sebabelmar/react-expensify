import features from './utils/camp_features';

const campsApi = {
  getFeatures() {
    return new Promise((resolve, reject) => {
      resolve(features);
    });
  }
};

export default campsApi;
