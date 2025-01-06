/* eslint-disable @typescript-eslint/no-unused-vars */
type generateImageParams = {
  model: string;
  prompt: string;
  category: string;
  tags: string[];
};

export const generateImage = async ({
  category,
  model,
  prompt,
  tags,
}: generateImageParams): Promise<string> => {
  return new Promise((res) =>
    setTimeout(() => {
      res('/generated-img.png');
    }, 1000)
  );
};
