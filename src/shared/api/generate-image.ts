/* eslint-disable @typescript-eslint/no-unused-vars */
type generateImageParams = {
  model: string;
  prompt: string;
  tags: Record<string, string[]> | null;
};

export const generateImage = async ({
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
