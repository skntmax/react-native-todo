const setItem = async (value) => {
        try {
          await AsyncStorage.setItem('prds', JSON.stringify([prd_data]));
        } catch (e) {
          // saving error
        }
      };

      const getItem = async () => {
        try {
          const value = await AsyncStorage.getItem('prds');
          if (value !== null) {
            return JSON.parse(value)   
          }
        } catch (e) {
          console.log(e);
        }
      };
