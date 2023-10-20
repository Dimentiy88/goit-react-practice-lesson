import React, { Suspense, lazy, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
// import PostCommentsPage from './PostCommentsPage';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import { findPostById } from 'services/api';
import { useSelector } from 'react-redux';

const PostCommentsPage = lazy(() => import('pages/PostCommentsPage'));

const PostDetailsPage = () => {
  const { postId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const postDetails = useSelector(state => state.postDetails.postDetailsData);
  const isLoading = useSelector(state => state.postDetails.isLoading);
  const error = useSelector(state => state.postDetails.error);
  // const [postDetails, setPostDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const fetchAllPosts = async () => {
      try {
        // setIsLoading(true);
        const postData = await findPostById(postId);

        // setPostDetails(postData);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, [postId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go Back</Link>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {postDetails !== null && (
        <div>
          <h2>Post Title: {postDetails.title}</h2>
          <p>Post Body: {postDetails.body}</p>
        </div>
      )}

      <div>
        <NavLink to="comments" className="header-link">
          Comments
        </NavLink>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostCommentsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;
