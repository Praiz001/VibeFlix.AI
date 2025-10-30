

const sampleService = {
    someService: async () => {
        try {
            return "Sample method";
        } catch (error) {
            console.error('Sample method error:', error);
            return null;
        }
    }
}


export default sampleService;