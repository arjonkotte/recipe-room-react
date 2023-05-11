
export default function RecipeDetailPage() {


    return(
        <main>
            {/* <h3>Preparation time: <%=recipe.prepTime%></h3>
            <!-- <img> -->
            <h2>Ingredients:</h2>
            <ul>
                <% recipe.ingredients.forEach(function(r){ %>
                <li><%=r%></li>
                <%})%>
            </ul>

            <h2>Cooking Instructions:</h2>
            <p id="cooking-instructions"><%=recipe.instructions%></p>

            <table id="reviews-table">
                <thead>
                    <th>Name</th>
                    <th>Comments</th>
                    <th>Rating</th>
                </thead>
                <tbody>
                <% recipe.reviews.forEach(function (rev){ %>
                    <tr>
                        <td><%= rev.name %></td>
                        <td><%= rev.review %></td>
                        <td><%= rev.starRating %></td>
                    </tr>
                <% }) %>
                </tbody>
            </table>



            <form id="add-review-form" action="/recipes/<%= recipe._id %>/reviews" method="POST">
                <label>Name:</label>
                <input type="text" name="name">
                <label>Comments:</label>
                <textarea type="text" name="review" id="comments"></textarea>
                <label>Rating:</label>
                <select name="starRating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Add Review</button>
            </form> */}
        </main>
    )
}