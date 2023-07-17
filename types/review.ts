

export interface ReviewPostItem {
    id: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    authorId: string,
      author: {
        name: string,
        email: string,
        image: string,
        role: string,
      };
    }
