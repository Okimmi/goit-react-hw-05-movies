import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from 'components/Global/Global.styled';
import { Review } from 'components/Review/Review';
import { getReviews } from 'services/api';
import { Loader } from 'components/Loader';

const ReviewsPage = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollToAdditional = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  useEffect(() => {
    const controller = new AbortController();

    async function getReviewsInfo() {
      try {
        setLoading(true);
        const responce = await getReviews(id, controller);
        setReviews(responce.data.results);
        scrollToAdditional();
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getReviewsInfo();
    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Wrapper>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <Review key={id} author={author} content={content}></Review>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default ReviewsPage;
